import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FabManager from '@fab/FabManager';
import {useFocusEffect} from '@react-navigation/native';
import {ButtonIconComponent, ButtonIconTextComponent} from '@component';
import {AppSizes, AppColors} from '@theme';
import {} from '@container';

const SettingsScreen = (props) => {
  const {navigation} = props;
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
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
        }}>
        <ButtonIconComponent
          name="account-circle"
          source="MaterialIcons"
          size={50}
          color={AppColors.fabButton}></ButtonIconComponent>
        <View style={{flexDirection: 'column', marginLeft: 10}}>
          <Text style={{fontSize: AppSizes.fontBase}}>
            Chào mừng bạn đến với ChipChip
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: AppColors.fabButton,
                  fontSize: AppSizes.fontMedium,
                }}>
                Đăng nhập/
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  color: AppColors.fabButton,
                  fontSize: AppSizes.fontMedium,
                }}>
                Đăng kí
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.nav2} />
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <ButtonIconTextComponent
          name="profile"
          source="AntDesign"
          title="Quản lí đơn hàng"
          size={20}
          containerStyle={styles.nav1}
          action={() => Alert.alert('...')}
          color={'black'}
          textStyle={AppSizes.fontBase}
          />
          <View style={styles.nav3}/>
          <ButtonIconTextComponent
          name="shoppingcart"
          source="AntDesign"
          title="Sản phẩm đã mua"
          size={20}
          containerStyle={styles.nav1}
          action={() => Alert.alert('...')}
          color={'black'}
          textStyle={AppSizes.fontBase}
          />
           <View style={styles.nav3}/>
          <ButtonIconTextComponent
          name="eyeo"
          source="AntDesign"
          title="Sản phẩm đã xem"
          size={20} 
          containerStyle={styles.nav1}
          action={() => Alert.alert('...')}
          color={'black'}
          textStyle={AppSizes.fontBase}
          />
           <View style={styles.nav3}/>
          <ButtonIconTextComponent
          name="hearto"
          source="AntDesign"
          title="Sản phẩm yêu thích"
          size={20}
          containerStyle={styles.nav1}
          action={() => Alert.alert('...')}
          color={'black'}
          textStyle={AppSizes.fontBase}
          />
           <View style={styles.nav3}/>
          <ButtonIconTextComponent
          name="bookmark"
          source="Feather"
          title="Sản phẩm mua sau"
          size={20}
          containerStyle={styles.nav1}
          action={() => Alert.alert('...')}
          color={'black'}
          textStyle={AppSizes.fontBase}
          />
           <View style={styles.nav3}/>
          <ButtonIconTextComponent
          name="commenting-o"
          source="FontAwesome"
          title="Nhận xét của tôi"
          size={20}
          containerStyle={styles.nav1}
          action={() => Alert.alert('...')}
          color={'black'}
          textStyle={AppSizes.fontBase}
          />
      </View>
      <View style={styles.nav2} />
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <ButtonIconTextComponent
         
          title="Ưu đãi cho chủ thẻ ngân hàng"
          size={20}
          containerStyle={styles.nav1}
          action={() => Alert.alert('...')}
          color={'black'}
          textStyle={AppSizes.fontBase}
          />
          <View style={styles.nav3}/>
          <ButtonIconTextComponent
         
          title="HOT LINE: 1900-1009(Miễn phí)"
          size={20}
          containerStyle={styles.nav1}
          action={() => Alert.alert('...')}
          color={'black'}
          textStyle={AppSizes.fontBase}
          />
           <View style={styles.nav3}/>
          <ButtonIconTextComponent
          title="Cài đặt"
          size={20}
          containerStyle={styles.nav1}
          action={() => Alert.alert('...')}
          color={'black'}
          textStyle={AppSizes.fontBase}
          />
      </View>
      <View style={styles.nav2} />
      <ButtonIconTextComponent
          name="headphones"
          source="FontAwesome"
          title="Hỗ trợ"
          size={20}
          containerStyle={styles.nav1}
          action={() => Alert.alert('...')}
          color={'black'}
          textStyle={AppSizes.fontBase}
          />
           <View style={styles.nav3}/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  nav1: {
    padding: 5,
    alignItems: 'center',
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },
  nav2: {
    marginTop: 10,
    backgroundColor: '#DCDCDC',
    height: 6,
    width: '100%',
  },
  nav3:{
    marginTop: 10,
    backgroundColor: '#D3D3D3',
    height: 0.5,
    width: '100%',
  }
});

export default SettingsScreen;
