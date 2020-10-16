import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {AppSizes, AppColors} from '@theme';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Localization from '@localization';
import {ButtonTextComponent} from '@component';

const NavBar = (props) => {
  const {title} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="arrow-back"
        color="white"
        style={styles.icon}
        size={20}
        onPress={() => navigation.pop(1)}></MaterialIcons>
      <Text style={styles.text}>{title}</Text>
      <View style={{position: 'absolute', right: 5,}}>
        <ButtonTextComponent
          containerStyle={styles.buttonApply}
          textStyle={styles.text}
          action={() => Alert.alert('Apply')}
          title={Localization.t('apply')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height / 15,
    backgroundColor: AppColors.vividPink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  text: {
    fontSize: AppSizes.fontMedium,
    color: 'white',
  },
});

export default NavBar;
