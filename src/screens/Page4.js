import React from 'react';
import {View,StyleSheet,Text,Button,TouchableOpacity} from 'react-native';

const Page4=({navigation})=>{
    return(
        <View>
            <Text>Page4</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('HomeScreen')}}>
                <Text>Go to the Page1</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
    }
})

export default Page4;