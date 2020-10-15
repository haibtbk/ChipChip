import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  ActivityIndicator,
  Icon,
} from 'react-native';
import FabManager from '@fab/FabManager';
import {useFocusEffect} from '@react-navigation/native';
import {ButtonIconComponent} from '@component';
import {AppSizes, AppStyles} from '@theme';
import {getProduct} from 'react-native-device-info';
import {API} from '@network';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Localization from '@localization';

const HomeScreen = (props) => {
  const [products, setProducts] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setTimeout(() => {
        FabManager.show();
      }, 100);
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        FabManager.hide();
      };
    }, []),
  );

  const getProductList = () => {
    const prams = {};
    API.getProductList(prams)
      .then((res) => {
        const products = res?.data ?? [];
        setProducts(products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductList();
    console.log(props);
  }, []);
  const {navigation} = props;
  return (
    <ImageBackground
      source={require('@images/background/backgroundSale.jpg')}
      style={styles.imageBackground}>
      <View style={styles.filter}>
        <TouchableOpacity
          style={styles.navFilter}
          onPress={() =>
            navigation.navigate('Filter', {title: 'Lọc theo sản phẩm'})
          }>
          <Text
            style={[AppStyles.baseText, {textAlign: 'center', color: 'white'}]}>
            {Localization.t('productType')}
          </Text>
          <FontAwesome
            name="filter"
            size={20}
            style={styles.iconFilter}
            color={'white'}></FontAwesome>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.navFilter}
          onPress={() =>
            navigation.navigate('Filter', {title: 'Lọc theo giá tiền'})
          }>
          <Text
            style={[AppStyles.baseText, {textAlign: 'center', color: 'white'}]}>
            {Localization.t('price')}
          </Text>
          <FontAwesome
            name="filter"
            size={20}
            style={styles.iconFilter}
            color={'white'}></FontAwesome>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.navFilter}
          onPress={() =>
            navigation.navigate('Filter', {title: 'Lọc theo Hạn sử dụng'})
          }>
          <Text
            style={[AppStyles.baseText, {textAlign: 'center', color: 'white'}]}>
            {Localization.t('expiryDate')}
          </Text>
          <FontAwesome
            name="filter"
            size={20}
            style={styles.iconFilter}
            color={'white'}></FontAwesome>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.navFilter}
          onPress={() =>
            navigation.navigate('Filter', {title: 'Lọc theo nhà cung cấp'})
          }>
          <Text
            style={[AppStyles.baseText, {textAlign: 'center', color: 'white'}]}>
            {Localization.t('provider')}
          </Text>
          <FontAwesome
            name="filter"
            size={20}
            style={styles.iconFilter}
            color={'white'}></FontAwesome>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.nav1}>
          <TextInput
            placeholder="Nhập sản phẩm bạn muốn tìm"
            placeholderTextColor="#6d6dab"
            style={styles.textInput}></TextInput>
          <ButtonIconComponent
            name="search1"
            source="AntDesign"
            size={20}
            containerStyle={styles.searchBar}></ButtonIconComponent>
        </View>
        <View style={styles.nav1}>
          <ButtonIconComponent
            name="tags"
            source="FontAwesome"
            size={20}
            color={'red'}></ButtonIconComponent>
          <Text styel={AppStyles.baseText}> Các mặt hàng bán chạy nhất</Text>
        </View>

        <View style={styles.nav2}>
          <FlatList
            horizontal={false}
            numColumns={2}
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <View style={styles.nav3}>
                  <Image
                    style={styles.image}
                    source={{uri: item.source}}></Image>
                  <Text style={{textAlign: 'center', color: 'yellow'}}>
                    {item.name}
                  </Text>
                  <Text style={{textAlign: 'center', color: 'yellow'}}>
                    Giá Tiền: {item.price} VNĐ
                  </Text>
                </View>
              );
            }}></FlatList>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    height: 50,
    width: '100%',
    borderRadius: 20,
    paddingLeft: 40,
    backgroundColor: '#A4A4A4',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  nav1: {
    flexDirection: 'row',
    marginTop: '5%',
    paddingLeft: '2%',
    paddingRight: '2%',
    marginBottom: '2%',
  },
  nav2: {
    width: '100%',
    marginBottom: '5%',
  },
  nav3: {
    width: '46%',
    marginBottom: '2%',
    borderWidth: 1,
    marginLeft: '2%',
    marginRight: '2%',
    backgroundColor: 'red',
  },
  searchBar: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  image: {
    width: (AppSizes.screen.width * 41.05) / 100,
    height: (AppSizes.screen.width / 100) * 40,
  },
  filter: {
    flexDirection: 'row',
    height: 45,
    width: '100%',
    backgroundColor: '#e91e63',
  },
  navFilter: {
    padding: 10,
    flexDirection: 'row',
    height: '100%',
    width: 96,
    alignItems: 'center',
  },
  iconFilter: {
    position: 'absolute',
    top: '50%',
    right: 1,
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: 'white',
    top: 6,
    marginLeft: 5,
  },
});
