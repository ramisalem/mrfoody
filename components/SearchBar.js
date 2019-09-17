import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({term , onTermChange , onTermSummit }) => {
    return (
        <View style={styles.backGround}>
            <Feather style={styles.FeatherIcon} name="search" size={25} />
            <TextInput 
            style={styles.inputField} 
            placeholder="Search for " 
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={ onTermChange}
            onEndEditing={onTermSummit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backGround: {
        marginTop: 10 , 
        backgroundColor: '#dfe6e9',
        height: 40,
        marginHorizontal: 15,
        borderRadius: 5 ,
        flexDirection: "row" 

    } ,
    inputField: {
        fontSize: 18 , 
        flex: 1 

    } , 
    FeatherIcon: {
        alignSelf: "center" ,
        marginHorizontal: 15 ,
        fontSize: 35 
    }

});


export default SearchBar;