import React from 'react';
import {View, Text} from 'react-native';
import {NavBar} from '@component';
import { FlatList } from 'react-native-gesture-handler';



const FilterScreen = (props) => {
 const {route} = props;
 const {title} = route.params;
    return (
        <View>
            <NavBar title={title}></NavBar>
            <FlatList></FlatList>
        </View>
    )
}


export default FilterScreen;