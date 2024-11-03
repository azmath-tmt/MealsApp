import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';




const IconButton = ({ mealIsFavorite ,changeFavoriteHandler}) => {
  return (

    <Pressable style={({pressed})=>  pressed && styles.pressed} onPress = {changeFavoriteHandler} >


      <Ionicons name={mealIsFavorite ? "star" : "star-outline"} size={24} color="white" />

    </Pressable>

  )
}



const styles = StyleSheet.create({

    pressed:{
        opacity : 0.7
    }
})



export default IconButton