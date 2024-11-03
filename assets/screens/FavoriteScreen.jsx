import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { MEALS } from '../data/dummyData'
import MealsList from '../components/MealsList'

const FavoriteScreen = () => {

  const favoriteMealsIds =   useSelector((state)=> state.favoriteMeals.ids )

  const favoriteMeal = MEALS.filter((e) => favoriteMealsIds.includes(e.id)  ) 



  if(favoriteMeal.length === 0){

    return <View style={styles.container}>

      <Text style={styles.text}> You have no favorite meals yet...  </Text>
      
    </View>
  }

  return <MealsList items = {favoriteMeal}  />


}


const styles = StyleSheet.create({
  container:{
    flex :1 ,
    alignItems : 'center',
    justifyContent : 'center'
  },

  text: {
    color : 'black',
    fontSize  :20,
    fontWeight : 'bold'
  }


})


export default FavoriteScreen

