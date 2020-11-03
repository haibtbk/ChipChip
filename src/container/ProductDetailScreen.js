import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {NavBar} from '@component';
import {AppSizes, AppColors} from '@theme';
import {
  ButtonIconComponent,
  ButtonTextComponent,
  ButtonIconTextComponent,
} from '@component';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useFocusEffect} from '@react-navigation/native';
import FabManager from '@fab/FabManager';
import {Rating} from 'react-native-ratings';

// useFocusEffect(
//     React.useCallback(() => {
//       // Do something when the screen is focused
//       setTimeout(() => {
//         FabManager.show();
//       }, 100);
//       return () => {
//         // Do something when the screen is unfocusXed
//         // Useful for cleanup functions
//         FabManager.hide();
//       };
//     }, []),
//   );

const ProductDetailScreen = (props) => {
  const {route, isCheck} = props;
  const [isChecked, setIsChecked] = useState(isCheck);
  const {item} = route.params;
  const [quantity, setQuantity] = useState(1);


  const _handleChangeText = (text) => {
    const quantityNumber = parseInt(text);
    if (quantityNumber > 1 && quantityNumber <= 9999999) {
      setQuantity(quantityNumber);
    } else if (quantityNumber > 9999999) {
      setQuantity(9999999);
    } else {
      setQuantity(1);
    }
  };

  const onCheckPress = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    console.log(isChecked);
  };

  const actionMinus = () => {
    if (quantity > 1 && quantity <= 9999999) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };
  const actionAdd = () => {
    if (quantity < 9999999) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity);
    }
  };

  const ratingCompleted = (rating) => {
    console.log(rating);
  };

  return (
    <View style={styles.container}>
      <NavBar
        actionApply={() => {
          callbackData && callbackData(selectedIds);
          navigation.pop(1);
        }}
        title={item.name}></NavBar>

      <View style={{flex: 1}}>
        <ScrollView>
          <View>
            <Image source={{uri: item.avatar}} style={styles.imageSlider} />
            <AntDesign
              onPress={() => onCheckPress()}
              style={styles.iconHeart}
              name="heart"
              size={30}
              color={isChecked ? AppColors.vividPink : AppColors.inputBg}
            />
          </View>
          <View style={styles.nav1}>
            <View style={styles.navRate}>
              <TouchableOpacity
                style={styles.navRate2}
                onPress={() => Alert.alert('Bạn có chắc muốn đánh giá')}>
                <View style={{flexDirection: 'row'}}>
                  <Text>4,5 </Text>
                  <ButtonIconComponent name="star" color={'black'} size={15} />
                </View>
                <Text> 999 N đánh giá</Text>
              </TouchableOpacity>
              <View style={styles.divider}></View>
              <TouchableOpacity
                style={styles.navRate2}
                onPress={() => Alert.alert('hihi')}>
                <View style={{flexDirection: 'row'}}>
                  <Text>Lượt mua </Text>
                  <ButtonIconComponent
                    name="shopping-cart"
                    color={'black'}
                    size={15}
                  />
                </View>
                <Text> 999 N lượt mua </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navRate1}>
              <Text>Đánh giá: </Text>
              <Rating
                type="custom"
                imageSize={20}
                onFinishRating={ratingCompleted}
                style={styles.rating}
              />
            </View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text1}>Nhà cung cấp: {item.provider}</Text>
            <Text style={styles.text1}>Tồn kho: {item.amount} </Text>
            <Text style={styles.text1}>Ngày hết hạn : {item.expiry_date}</Text>
            <View style={styles.__}></View>
            <View style={styles.nav4}>
              <View style={styles.nav2}>
                <Text style={styles.text2}>Số Lượng : </Text>
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
              <View style={styles.price}>
                <Text
                  style={{textDecorationLine: 'line-through', color: 'black'}}>
                  {item.price} $
                </Text>
                <Text style={{color: 'red'}}>{(item.price * 80) / 100} $</Text>
              </View>
            </View>
            <View style={styles.__}></View>
            <Text style={styles.title}>Thông tin sản phẩm :</Text>
            <Text style={styles.text1}>{item.description}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.button}>
        <ButtonTextComponent
          title="Thanh toán"
          containerStyle={styles.buttonBuy}
          textStyle={{fontSize: 25}}></ButtonTextComponent>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  nav1: {
    padding: AppSizes.paddingXSmall,
    margin: AppSizes.marginSmall,
  },
  nav2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nav3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageSlider: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height / 4,
  },
  title: {
    fontSize: AppSizes.fontLarge,
    fontWeight: 'bold',
  },
  __: {
    marginTop: AppSizes.marginSmall,
    marginBottom: AppSizes.marginSmall,
    width: AppSizes.screen.width - 30,
    height: 1,
    backgroundColor: '#A4A4A4',
  },
  price: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text1: {
    fontSize: AppSizes.fontMedium,
    color: 'rgba(52, 52, 52, 0.7)',
  },
  text2: {
    color: AppColors.vividPink,
    fontSize: AppSizes.fontLarge,
  },
  button: {
    height: AppSizes.screen.height / 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlign: 'center',
    width: AppSizes.screen.width / 5,
    height: AppSizes.screen.width / 15,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    fontSize: 15,
    paddingTop: 0,
    paddingBottom: 0,
  },
  buttonBuy: {
    width: AppSizes.screen.width / 1.2,
    height: AppSizes.screen.height / 13,
    backgroundColor: AppColors.vividPink,
    borderRadius: 30,
  },
  iconHeart: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  rate: {
    marginLeft: 10,
  },
  navRate: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navRate1: {
    flexDirection: 'row',
  },
  navRate2: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  divider: {
    height: 30,
    width: 1,
    backgroundColor: 'black',
    marginLeft: 20,
    marginRight: 20,
  },
  rating: {
    backgroundColor: 'transparent',
  },
});

export default ProductDetailScreen;
