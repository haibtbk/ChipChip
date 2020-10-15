import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {NavBar} from '@component';
import {FilterType} from '@constant';
import {API} from '@network';
import ICON from 'react-native-vector-icons/Feather';

const FilterScreen = (props) => {
  const {route} = props;
  const {title, type, selectedData = []} = route.params;
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(selectedData);
  useEffect(() => {
    switch (type) {
      case FilterType.product:
        getProductTypes();
        break;
      case FilterType.price:
        getPrices();
        break;
      case FilterType.expiryDate:
        getExpiryDate();
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
        const result = res?.data ?? [];
        setData(result);
      })
      .catch((err) => console.log(err));
  };

  const getProviders = () => {
    API.getProviders()
      .then((res) => {
        const result = res?.data ?? [];
        setData(result);
      })
      .catch((err) => console.log(err));
  };


  const ItemView = (props) => {
    const {item, index} = props
    let [isOnChecked, setOnCheck] = useState(false);
    const onChecked = () => {
      setOnCheck(!isOnChecked);
    };
    return (
      <View style={styles.flatList}>
        <TouchableOpacity onPress={() => onChecked()} style={styles.nav}>
          <ICON
            name="check"
            size={20}
            style={styles.icon}
            color={isOnChecked ? '#41cd7d' : 'black'}></ICON>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavBar title={title}></NavBar>
      <View style={styles.header}>
        <FlatList
          keyExtractor={(item) => item?.id?.toString()}
          data={data}
          renderItem={({item, index}) => <ItemView item={item} index={index}/>}
        />
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  nav: {
    width: '90%',
    height: 40,
    backgroundColor: '#6d6dab',
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
