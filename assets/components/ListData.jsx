import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListData = ({data}) => {
  return (

    <View  style={styles.ingredients} >

        <Text style={styles.ingredients2} > {data}</Text>
    
    </View>

  )
}

const styles = StyleSheet.create({


    ingredients : {
        padding : 6,
        marginHorizontal :30,
        overflow : 'hidden'
        
    },
    ingredients2 : {
        backgroundColor : '#ff00ff',
        borderRadius : 10,
        textAlign : 'center',
        padding :10,
        color : 'white',
        fontWeight : 'bold',
    }
})

export default ListData