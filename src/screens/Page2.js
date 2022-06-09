import React from 'react';
import {View,StyleSheet,Text,Button,TouchableOpacity} from 'react-native';

const Page2=({navigation})=>{
    return(
        <View>
            <Text>Page2</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Page3')}}>
                <Text>Go to the page 3</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        marginTop: 50,
    }
})
export default Page2;