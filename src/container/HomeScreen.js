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
  const [
    arrangedInOrderPriceFilterType,
    setArrangedInOrderPriceFilterType,
  ] = useState(false);
  const [
    arrangedInOrderDateFilterType,
    setArrangedInOrderDateFilterType,
  ] = useState(false);
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
    const productIds = _.map(products, (item) => item.id);
    const productTypeIds = _.map(productFilterTypes, (item) => item.id);
    const arrangedInOrderPriceFilterTypeIds = _.map(
      arrangedInOrderPriceFilterType,
      (item) => item.id,
    );
    const arrangedInOrderDateFilterTypeIds = _.map(
      arrangedInOrderDateFilterType,
      (item) => item.id,
    );
    const providerIds = _.map(providerFilterTypes, (item) => item.id);
    const params = {
      searchKey,
      productIds,
      productTypeIds,
      arrangedInOrderPriceFilterTypeIds,
      arrangedInOrderDateFilterTypeIds,
      providerIds,
    };
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
      source={require('@images/background/backGround3.jpg')}
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
            style={[
              AppStyles.fontMedium,
              {textAlign: 'center', color: 'white', width: '70%'},
            ]}>
            {Localization.t('productType')}
          </Text>
          <FontAwesome
            name="filter"
            size={15}
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
              callbackData: (data) =>
                handleCallbackFilterProductOrderPrice(data),
            })
          }>
          <Text
            style={[
              AppStyles.fontMedium,
              {textAlign: 'center', color: 'white'},
            ]}>
            {Localization.t('price')}
          </Text>
          <FontAwesome
            name="filter"
            size={15}
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
              callbackData: (data) =>
                handleCallbackFilterProductOrderDate(data),
            })
          }>
          <Text
            style={[
              AppStyles.fontMedium,
              {textAlign: 'center', color: 'white'},
            ]}>
            {Localization.t('expiryDate')}
          </Text>
          <FontAwesome
            name="filter"
            size={15}
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
              callbackData: (data) =>
                handleCallbackFilterProductProviders(data),
            })
          }>
          <Text
            style={[
              AppStyles.fontMedium,
              {width: '70%', textAlign: 'center', color: 'white'},
            ]}>
            {Localization.t('provider')}
          </Text>
          <FontAwesome
            name="filter"
            size={15}
            style={styles.iconFilter}
            color={'white'}></FontAwesome>
        </TouchableOpacity>
      </View>
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
                  <Text style={{textAlign: 'center', color: 'black'}}>
                    {item.name}
                  </Text>
                  <Text style={{textAlign: 'center', color: 'black'}}>
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

export default HomeScreen;

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
    margin: 3,
    backgroundColor: 'white',
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
