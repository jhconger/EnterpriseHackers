import React from 'react';
import {View,StyleSheet,Text,Button,TouchableOpacity} from 'react-native';

class Page3 extends React.Component{
    render(){
        return(
            <View>
                <Text>Page3</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Page4')}}>
                    <Text>Go to the page 4</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
    }
})
export default Page3;