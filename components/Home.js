import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Home = () => {
    return (
        <View>
            <View style={styles.container}>
                <FontAwesome5 name="user-circle" size={24} color="black" />
                <Feather name="twitter" size={24} color="black" />
                <AntDesign name="setting" size={24} color="black" />
            </View>
            <Text>I am home screen</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})