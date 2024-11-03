import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'




const MealItems = ({id,title, img, duration, affordable, complexity}) => {

  const navigation = useNavigation()

  
  const selectMealItemHandler = ()=>{
    navigation.navigate("MealsDetails", {mealId : id})
  }


  return (
    <View style={styles.container}>

      <Pressable android_ripple={{color :'#ccc'}} 
       style={({pressed})=> pressed ? styles.pressed : null }
       
      onPress={selectMealItemHandler}

       >

        <View>
          
          <Image style={styles.image} source ={{uri : img}} />
          <Text style={styles.text}> {title} </Text>

        </View>

        <View style={styles.innerText}>

          <Text> {duration}m </Text>
          <Text> {complexity.toUpperCase()} </Text>
          <Text> {affordable.toUpperCase()}</Text>

        </View>

      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    backgroundColor : '#ffe4e1',
    overflow : 'hidden',
    marginVertical : 10,
    borderRadius : 18,
    shadowColor : "black",
    shadowOffset : {width : 0, height :2},
    shadowOpacity : 1,
    shadowRadius : 8,
    elevation : 5,
    margin :16
 
  },

  image:{
    width : '100%',
    height : 200,
    objectFit : 'cover',
    
  },
  
  text:{
    fontWeight : 'bold',
    fontSize : 18,
    textAlign : 'center',
    marginBottom : 20,
    padding :8
  },

  innerText:{
    flexDirection : 'row',
    alignItems : 'center', 
    justifyContent : 'center',
    padding :10

  },

  pressed:{
    opacity : 0.7
  }


})



export default MealItems