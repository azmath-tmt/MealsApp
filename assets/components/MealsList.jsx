import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItems from './MealItems'

const MealsList = ({items}) => {


    function renderMealItem(meal){

        return <MealItems id = {meal.item.id} title={meal.item.title} img = {meal.item.imageUrl}
        
        complexity = {meal.item.complexity} affordable ={meal.item.affordability}
        duration = {meal.item.duration}     
        
        />
    }


  return (

    <View style={styles.container}> 

        <FlatList data={items} renderItem={renderMealItem} 
        keyExtractor={item => item.id}   />

    </View>

  )
}

const styles = StyleSheet.create({

    container : {
        flex : 1,
        padding : 16
    }
})

export default MealsList