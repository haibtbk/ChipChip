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

const HomeScreen = (props) => {
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [productFilterTypes, setProductFilterTypes] = useState([]);
  const [arrangedInOrderPriceFilterType, setArrangedInOrderPriceFilterType] = useState(
    false,
  );
  const [arrangedInOrderDateFilterType, setArrangedInOrderDateFilterType] = useState(
    false,
  );
  const [providerFilterTypes, setProviderFilterTypes] = useState([]);
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
    const productIds = _.map(productFilterTypes, (item) => item.id);
    const arrangedInOrderPriceFilterTypeIds = _.map(
      arrangedInOrderPriceFilterType,
      (item) => item.id,
    );
    const arrangedInOrderDateFilterTypeIds = _.map(
      arrangedInOrderDateFilterType,
      (item) => item.id,
    );
    const providerIds = _.map(providerFilterTypes, (item) => item.id);
    const params = {searchKey, productIds, arrangedInOrderPriceFilterTypeIds, arrangedInOrderDateFilterTypeIds, providerIds};
    API.getProductList(params)
      .then((res) => {
        const products = res?.data ?? [];
        setProducts(products);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductList();
  }, [
    productFilterTypes,
    arrangedInOrderPriceFilterType,
    arrangedInOrderDateFilterType,
    providerFilterTypes,
    searchKey,
  ]);

  const {navigation} = props;

  handleCallbackFilterProductTypes = (data) => {
    console.log('data: ', data);
    setProductFilterTypes(data);
  };
  handleCallbackFilterProductOrderPrice = (data) => {
    console.log('data: ', data);
    setArrangedInOrderPriceFilterType(data);
  };
  handleCallbackFilterProductOrderDate = (data) => {
    console.log('data: ', data);
    setArrangedInOrderDateFilterType(data);
  };
  handleCallbackFilterProductProviders = (data) => {
    console.log('data: ', data);
    setProviderFilterTypes(data);
  };
 

  return (
    <ImageBackground
      source={require('@images/background/backgroundSale.jpg')}
      style={styles.imageBackground}>
      <View style={styles.filter}>
        <TouchableOpacity
          style={styles.navFilter}
          onPress={() =>
            navigation.navigate('Filter', {
              title: 'Lọc theo sản phẩm',
              type: FilterType.productTypes,
              selectedIds: productFilterTypes,
              callbackData: (data) => handleCallbackFilterProductTypes(data),
            })
          }>
          <Text
            style={[AppStyles.baseText, {textAlign: 'center', color:'white'}]}>
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
            navigation.navigate('Filter', {
              title: 'Lọc theo giá tiền',
              type: FilterType.arrangedInOrder,
              selectedIds: arrangedInOrderPriceFilterType,
              callbackData: (data) => handleCallbackFilterProductOrderPrice(data),
            })
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
            navigation.navigate('Filter', {
              title: 'Lọc theo Hạn sử dụng',
              type: FilterType.arrangedInOrder,
              selectedIds: arrangedInOrderDateFilterType,
              callbackData: (data) => handleCallbackFilterProductOrderDate
                  (data),
            })
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
            navigation.navigate('Filter', {
              title: 'Lọc theo nhà cung cấp',
              type: FilterType.provider,
              selectedIds: providerFilterTypes,
              callbackData: (data) => handleCallbackFilterProductProviders(data),
            })
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
            type="text"
            placeholder="Nhập sản phẩm bạn muốn tìm"
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
          <ButtonIconComponent name="" />
        </View>
        <View style={styles.nav1}>
          <ButtonIconComponent
            name="tags"
            source="FontAwesome"
            size={20}
            color={'red'}
          />
          <Text styel={AppStyles.baseText}>Các mặt hàng bán chạy nhất</Text>
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
    backgroundColor: AppColors.vividPink,
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




