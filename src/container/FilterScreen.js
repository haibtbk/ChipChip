import React, { useState, useEffect  } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text  } from 'react-native';
import { NavBar } from '@component';
import { FilterType } from '@constant';
import { API } from '@network';
import ICON from 'react-native-vector-icons/Feather';
import { AppColors } from '@theme';

const defaultFn = () => {};

const ItemView = ({ name = '', isChecked = false, onPress = defaultFn }) => { 
  console.log('helo');
  return (
    <View style={ styles.flatList }>
      <TouchableOpacity onPress={ onPress } style={ styles.nav }>
        { isChecked ? (
          <ICON
            name="check"
            size={ 20 }
            style={ styles.icon }
            color={ AppColors.vividPink }></ICON>
        ) : (
          <View></View>
        ) }
        <Text style={{ color: 'black' }}>{ name }</Text>
      </TouchableOpacity>
    </View>
  );
 };

const FilterScreen = (props) => {
  const { route, navigation } = props;
  const { title, type, callbackData } = route.params;
  const [data, setItems] = useState([]);
  const [selectedIds, setSelectedIds] = useState(
    route.params.selectedIds || [],
  );

  useEffect(() => { 
    switch (type) { 
      case FilterType.product:
        getProductTypes();
        break;
      case FilterType.arrangedInOrder:
        getArrangedInOrder();
        break;
      case FilterType.provider:
        getProviders();
        break;
      default:
        break;
     }
   }, []);

  const getProductTypes = () => { 
    API.getProductTypes()
      .then((res) => { 
        const productTypes = res?.data ?? [];
        setItems(productTypes);
       })
      .catch((err) => console.log(err));
   };

  const getProviders = () => { 
    API.getProviders()
      .then((res) => { 
        const providers = res?.data ?? [];
        setItems(providers);
       })
      .catch((err) => console.log(err));
   };
  const getArrangedInOrder = () => { 
    API.getArrangedInOrder()
      .then((res) => { 
        const arrangedInOrder = res?.data ?? [];
        setItems(arrangedInOrder);
       })
      .catch((err) => console.log(err));
   };
  const getExpiryDate = () => { 
    API.getExpiryDate()
      .then((res) => { 
        const arrangedInOrder = res?.data ?? [];
        setItems(arrangedInOrder);
       })
      .catch((err) => console.log(err));
   };

  const handlePressItem = (id) => { 
    const isChecked = selectedIds.includes(id);
    if (isChecked) { 
      setSelectedIds(selectedIds.filter((item) => item !== id));
     } else { 
      setSelectedIds([...selectedIds, id]);
     }
   };

  return (
    <View style={ styles.container }>
      <NavBar
        actionApply={ () => { 
          callbackData && callbackData(selectedIds);
          navigation.pop(1);
         } }
        title={ title }></NavBar>
      <View style={ styles.header }>
        <FlatList
          keyExtractor={ (item) => item?.id?.toString() }
          data={ data }
          renderItem={ ({ item, index }) => (
            <ItemView
              index={ index }
              name={ item.name }
              isChecked={ selectedIds.includes(item.id) }
              onPress={ () => handlePressItem(item.id) }
            />
          ) }
        />
      </View>
    </View>
  );
 };

export default FilterScreen;

const styles = StyleSheet.create({ 
  container: { 
    backgroundColor: 'white',
    flex: 1,
   },
  nav: { 
    width: '95%',
    height: 40,
    backgroundColor: 'pink',
    borderRadius: 50,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   },
  flatList: { 
    flex: 1,
   },
  icon: { 
    position: 'absolute',
    left: 10,
   },
 });
