import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Name = ({children}) => {
  return (

    <View  style={styles.text2 }>
        <Text  style={styles.text}> {children} </Text>

    </View>

  )
}

const styles = StyleSheet.create({
    text2:{
        alignItems : 'center',
        borderBottomWidth:2,
        borderBottomColor: "black",
        marginHorizontal : 35,
        marginVertical : 10
    },
    text:{
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : '25',
        padding:10
    },
})

export default Name