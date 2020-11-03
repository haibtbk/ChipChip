import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {AppSizes, AppColors, AppFonts} from '@theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ButtonTextComponent, ButtonIconComponent} from '@component';
import _ from 'lodash'

const DATA = [
  {
    id: 1,
    name: 'Táo medusa ahaha',
    avatar:
      'https://media.istockphoto.com/photos/fresh-red-apples-on-white-background-picture-id183422512?k=6&m=183422512&s=612x612&w=0&h=BSvOL3aFruJVgjJ2pp_bfGFwUXFEm0KEkpeL4hBqZeE=',
    price: 50,
    company: 'Cty Băm Ba Ra',
    address: 'Mỹ',
    quality: 'Hàng đẹp, cuống tươi, cực ngon',
  },
  {
    id: 2,
    name: 'Ổi Halus',
    avatar: 'https://caythuoc.org/wp-content/uploads/2019/06/Qua-oi-chin_4.jpg',
    price: 69,
    company: 'Cty Băm Ba Ra',
    address: 'Mỹ',
    quality: 'Hàng đẹp, cuống tươi, cực ngon',
  },
  {
    id: 3,
    name: 'Cam Otaraka',
    avatar: 'https://i.khoahoc.tv/photos/image/2017/11/16/qua-cam.jpg',
    price: 49,
    company: 'Cty Băm Ba Ra',
    address: 'Mỹ',
    quality: 'Hàng đẹp, cuống tươi, cực ngon',
  },
  {
    id: 4,
    name: 'Táo medusa ahaha',
    avatar:
      'https://sohanews.sohacdn.com/2020/5/20/photo-1-15899437759231800218858.jpg',
    price: 36,
    company: 'Cty Băm Ba Ra',
    address: 'Mỹ',
    quality: 'Hàng đẹp, cuống tươi, cực ngon',
  },
  {
    id: 5,
    name: 'Táo medusa ahaha',
    avatar:
      'https://media.istockphoto.com/photos/fresh-red-apples-on-white-background-picture-id183422512?k=6&m=183422512&s=612x612&w=0&h=BSvOL3aFruJVgjJ2pp_bfGFwUXFEm0KEkpeL4hBqZeE=',
    price: 50,
    company: 'Cty Băm Ba Ra',
    address: 'Mỹ',
    quality: 'Hàng đẹp, cuống tươi, cực ngon',
  },
];

const Item = (props) => {
  const {item, onItemCallBack, onItemDelete} = props;
  const { name, avatar, price, company, address, quality} = item
  const [quantity, setQuantity] = useState(0);
  const _handleChangeText = (text) => {
    let quantityNumber = parseInt(text);
    if (quantityNumber > 1 && quantityNumber <= 9999999) {
      setQuantity(quantityNumber);
    } else if (quantityNumber > 9999999) {
      quantityNumber = 9999999
      setQuantity(9999999);
    } else {
      quantityNumber = 1
      setQuantity(1);
    }
    const newItem = {...item, quantity: quantityNumber}
    onItemCallBack && onItemCallBack(newItem)

  };


  const actionMinus = () => {
    let quantityNumber = 0;
    if (quantity > 1 && quantity <= 9999999) {
      quantityNumber = quantity - 1;
      setQuantity(quantity - 1);
    } else {
      quantityNumber = quantity;
      setQuantity(1);
    }
    const newItem = {...item, quantity: quantityNumber}
    onItemCallBack && onItemCallBack(newItem)

  };
  const actionAdd = () => {
    let quantityNumber = 0;
    if (quantity < 9999999) {
      quantityNumber = quantity + 1;
      setQuantity(quantity + 1);
    } else {
      quantityNumber = quantity;
      setQuantity(quantity);
    }
    const newItem = {...item, quantity: quantityNumber}
    onItemCallBack && onItemCallBack(newItem)

  };  
  return (
    <View>
      <View style={styles.navProduct}>
        <Image style={styles.image} source={{uri: avatar}}></Image>
        <View style={styles.navDrescription}>
          <Text style={styles.text3}>{name}</Text>
          <Text style={styles.text4}>{quality}</Text>
          <Text style={styles.text4}>Công ty: {company}</Text>
          <Text style={styles.text4}>Xuất xứ: {address}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text6}>{price * 1.5}$</Text>
            <Text style={styles.text5}> {price}$ </Text>
          </View>

          <View style={styles.nav3}>
            <ButtonIconComponent
              style={{padding: AppSizes.marginXMedium}}
              name="chevron-left"
              size={20}
              action={actionMinus}
            />
            <TextInput
              borderRadius={15}
              style={styles.input}
              keyboardType="number-pad"
              value={quantity.toString()}
              onChangeText={_handleChangeText}
            />
            <ButtonIconComponent
              style={{padding: AppSizes.marginXMedium}}
              name="chevron-right"
              size={20}
              action={actionAdd}
            />
          </View>
        </View>
        <ButtonIconComponent
          name="close"
          source="AntDesign"
          color={'white'}
          action={() => onItemDelete && onItemDelete(item)}
          containerStyle={styles.goBack}
        />
        <View style={styles.total}>
          <Text>Thành tiền </Text>
          <Text style = {styles.text5}>{price * quantity} $</Text>
          </View>
      </View>
      <View style={styles.__}></View>
    </View>
  );
};

const CartScreen = (props) => {
  const {navigation} = props;
  const [data, setData] = useState(DATA);

  const onItemCallBack = (item) => {
    console.log(item)
    const dataClone = data
    const newData = _.map(dataClone, i => {
      if(i.id === item.id){
        i = item
      }
      return i
    })
    setData(newData)
  }
  const onItemDelete = (item) => {
    const dataClone = data
    const newData = _.filter(dataClone, i => {
      return i.id !== item.id
    })
    setData(newData);
  }
  const totalPrice = (data) => {
    let total = 0;
    _.forEach(data,item=>{
      total += item.price * (item.quantity??0);
    })
    return total;
  }

  const renderItem = ({item}) => {
    return (
      <Item
        onItemCallBack= {(item) => {onItemCallBack(item)}}
        onItemDelete = {(item) => {onItemDelete(item)}}
        item= {item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <MaterialIcons
          onPress={() => navigation.pop(1)}
          name="arrow-back"
          size={25}
          color={'white'}
          style={{position: 'absolute', left: 0, padding: 10}}
        />
        <Text style={styles.text1}>Giỏ hàng của bạn</Text>
      </View>
      <FlatList
        style={styles.body}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={styles.navPayment}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <Text>Tổng giá trị đơn hàng :</Text>
        <Text style={{color: AppColors.vividPink}}> {totalPrice(data)} $</Text>
        </View>
        <ButtonTextComponent
          title="Thanh toán"
          containerStyle={styles.payment}
          textStyle={styles.text2}></ButtonTextComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navBar: {
    flexDirection: 'row',
    width: AppSizes.screen.width,
    height: AppSizes.screen.height / 12,
    backgroundColor: AppColors.vividPink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  navProduct: {
    width: AppSizes.screen.width,
    flexDirection: 'row',
    padding: 8,
  },
  navDrescription: {
    width: AppSizes.screen.width / 2,
    height: '100%',
    marginLeft: 6,
  },
  image: {
    width: AppSizes.screen.width / 3,
    height: '100%',
  },
  text1: {
    fontSize: AppSizes.fontLarge,
    color: 'white',
  },
  text2: {
    fontSize: AppSizes.fontTitle,
    color: 'white',
  },
  text3: {
    fontSize: AppSizes.fontXMedium,
    fontWeight: 'bold',
  },
  text4: {
    fontSize: AppSizes.fontSmall,
  },
  text5: {
    fontSize: AppSizes.fontMedium,
    color: AppColors.vividPink,
  },
  text6: {
    fontSize: AppSizes.fontMedium,
    color: '#a8a7a3',
    textDecorationLine: 'line-through',
  },
  navPayment: {
    width: AppSizes.screen.width,
    padding: AppSizes.paddingSmall,
    borderWidth: 1,
    borderColor: '#a8a7a3',
  },
  payment: {
    width: AppSizes.screen.width - 30,
    height: AppSizes.screen.height / 12,
    backgroundColor: AppColors.vividPink,
    borderRadius: 40,
  },
  __: {
    width: AppSizes.screen.width - 20,
    height: 1,
    backgroundColor: '#A4A4A4',
    marginLeft: 10,
  },
  nav3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navCalculation: {
    backgroundColor: '#a8a7a3',
  },
  navScreenQuantity: {},
  input: {
    textAlign: 'center',
    width: AppSizes.screen.width / 5,
    height: AppSizes.screen.width / 15,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    fontSize: AppSizes.fontMedium,
    paddingBottom: 0,
    paddingTop: 0,
  },
  goBack: {
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    right: 8,
    top: 8,
  },
  total: {
    position: 'absolute',
    alignItems: 'center',
    right: 8,
    bottom: 8,
    fontSize: AppSizes.fontMedium
  }
});

export default CartScreen;
