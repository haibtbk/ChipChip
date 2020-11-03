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
  Alert,
} from 'react-native';
import FabManager from '@fab/FabManager';
import {useFocusEffect} from '@react-navigation/native';
import {ButtonIconComponent} from '@component';
import {AppSizes, AppStyles, AppColors} from '@theme';
import {getProduct} from 'react-native-device-info';
import {API} from '@network';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Localization from '@localization';
import {FilterType} from '@constant';
import _ from 'lodash';




const SalesScreen = (props) => {
  const {navigation} = props;
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setTimeout(() => {
        FabManager.show();
      }, 100);
      return () => {
        // Do something when the screen is unfocusXed
        // Useful for cleanup functions
        FabManager.hide();
      };
    }, []),
  );

  const getProductList = () => {
    API.getProductList()
      .then((res) => {
        const products = res?.data ?? [];
        setProducts(products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductList();
  }, [searchKey]);
  return (
    <ImageBackground
      source={require('@images/background/backgroundSale.jpg')}
      style={styles.imageBackground}>
      <ScrollView style={styles.container}>
        <View style={styles.nav1}>
          <TextInput
            type="text"
            placeholder={Localization.t('enter_the_product')}
            placeholderTextColor="#6d6dab"
            style={styles.textInput}
            value={searchKey}
            onChangeText={(text) => setSearchKey(text)}
          />
          <ButtonIconComponent
            name="search1"
            source="AntDesign"
            size={20}
            containerStyle={styles.searchBar}
          />
          <ButtonIconComponent
            name="close"
            source="AntDesign"
            size={20}
            containerStyle={styles.close}
            action={() => setSearchKey('')}
          />
        </View>
        <View style={styles.nav1}>
          <ButtonIconComponent
            name="tags"
            source="FontAwesome"
            size={20}
            color={'red'}
          />
          <Text styel={AppStyles.fontMedium}>Các mặt hàng bán chạy nhất</Text>
        </View>

        <View style={styles.nav2}>
          <FlatList
            numColumns={2}
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.nav3}
                  onPress={() =>
                    navigation.navigate('ProductDetail', {
                      item: item,
                    })
                  }>
                  <Image
                    style={styles.image}
                    source={{uri: item.avatar}}></Image>
                  <Text style={{textAlign: 'center', color: 'yellow'}}>
                    {item.name}
                  </Text>
                  <Text style={{textAlign: 'center', color: 'yellow'}}>
                    Giá Tiền: {item.price} $
                  </Text>
                </TouchableOpacity>
              );
            }}></FlatList>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SalesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  textInput: {
    marginLeft: '2%',
    height: 40,
    width: '85%',
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
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    width: AppSizes.screen.width,
  },
  nav2: {
    marginTop: 10,
    flex: 1,
    width: AppSizes.screen.width,
  },
  nav3: {
    width: AppSizes.screen.width / 2.25,
    height: AppSizes.screen.height / 5,
    borderWidth: 1,
    margin: 1,
    backgroundColor: 'red',
  },
  searchBar: {
    position: 'absolute',
    left: '5%',
    top: '25%',
  },
  close: {
    position: 'absolute',
    right: '15%',
    top: '25%',
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  filter: {
    flexDirection: 'row',
    height: '8%',
    width: AppSizes.screen.width,
    backgroundColor: AppColors.vividPink,
  },
  navFilter: {
    flexDirection: 'row',
    height: '100%',
    width: AppSizes.screen.width / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFilter: {
    marginLeft: '5%',
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: 'white',
    top: '2%',
    marginLeft: 0,
  },
});