import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'



const CategoryGridTitle = ({title,color,pressHandler}) => {


  return (  
  
  <View style={[styles.grindItems,, {backgroundColor : color}]}>
    <Pressable
     style={({pressed})=>[ styles.button, pressed ? styles.pressed : null ]} 
     onPress={pressHandler}
    >

        <View style={styles.textContainer} >
            <Text style={styles.text}> {title} </Text>

        </View>


    </Pressable>



  </View>

  )
}

const styles = StyleSheet.create({
    grindItems:{
        flex : 1,
        height : 150,
        alignItems:'center',
        justifyContent : 'center',
        margin : 10,
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 28,
        padding : 20,
        shadowColor : 'black',
        shadowOpacity : 1,
        shadowOffset : {width : 2, height : 4},
        cursor : 'auto' ,
    },
    textContainer:{
        flex:1,
        alignItems : 'center',
        justifyContent : 'center',
        textAlign : 'center',

    },

    text : {
        fontWeight : 'bold',
       
        textAlign:'center'
    },
    button:{
        flex :1,
    },
    pressed:{
        opacity : 0.5,
    }
})

export default CategoryGridTitle