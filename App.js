import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer   } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './screens/SearchScreen';


const navigation = createStackNavigator({
   Search: SearchScreen 
} , 
  {
    initailRoutName: 'Search' ,
    defaultNavigationOptions: {
    title: 'Busienss Search'
    } 
  }
);

const styles = StyleSheet.create({
  
});


export default createAppContainer(navigation);