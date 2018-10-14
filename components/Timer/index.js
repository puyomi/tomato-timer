import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Button/index';


class Timer extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button iconName="play-circle" onPress={()=> alert("It Works")} />
                    <Button iconName="stop-circle" onPress={()=> alert("It Works")} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#CE0B24"
    },
    upper:{
        flex:3,
        justifyContent: "center",
        alignItems:"center",
    },
    lower:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
    },
    time:{
        fontSize:120,
        color:"white",
        fontWeight:"100",
    }
})


export default Timer;