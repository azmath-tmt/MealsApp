import React, { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummyData'
import MealItems from '../components/MealItems'
import MealsList from '../components/MealsList'

const MealsOverview = ({route,navigation}) => {

    const catId = route.params.categoryId

    const displayMealItem = MEALS.filter((val) => val.categoryIds.indexOf(catId) >= 0 )


    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((item)=> item.id === catId ).title

        navigation.setOptions({
            title : categoryTitle
        })

    },[catId, navigation])

    

  return  <MealsList items = {displayMealItem} />
  
}



export default MealsOverview