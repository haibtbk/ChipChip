import React, {Component, createRef, useRef} from 'react';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppStyles, AppSizes, AppColors} from '@theme';
import _ from 'lodash';
import * as Animatable from 'react-native-animatable';
import {View} from 'react-native';



const FabButton = React.forwardRef((props, ref) => {
  const [visible, setVisible] = React.useState(false);
  const [showLightbox, setShowLightbox] = React.useState(false);
  const rotatingView = useRef();
  
  const reset = () => {
    setShowLightbox(false);
    rotatingView.current.transitionTo({rotate: '0deg'});
  };
  const show = () => {
    setVisible(true);
  };
  const hide = () => {
    setVisible(false);
  };
  React.useImperativeHandle(ref, () => ({
    reset,
    show,
    hide,
  }));
  const goToCartScreen = () => {
    const {navigationRef} = props;
    const navigation = navigationRef.current;
    navigation.navigate('Cart');
  }

  return (
    <View ref={ref}>
      {!visible ? (
        <View />
      ) : (
        <Button
          rounded
          style={[
            AppStyles.fabButton,
            {
              backgroundColor: showLightbox
                ? AppColors.vividPink
                : AppColors.vividPink,
            },
          ]}
          onPress={() => goToCartScreen()}>
          <Animatable.View duration={0} ref={rotatingView}>
            <Icon
              name="shoppingcart"
              style={[
                AppStyles.fabIcon,
                {
                  color: AppColors.white,
                },
              ]}
            />
          </Animatable.View>
        </Button>
      )}
    </View>
  );
});

// export default FabButton
export default FabButton;

