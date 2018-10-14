import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Timer extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Text>Button Here</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {},
    upper:{
        flex:1,
    },
    lower:{
        flex:1,
    },
    time:{
        fontSize:100,
    }
})


export default Timer;