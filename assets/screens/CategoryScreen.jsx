import React from 'react'
import { FlatList} from 'react-native'
import CategoryGridTitle from '../components/CategoryGridTitle'
import { CATEGORIES } from '../data/dummyData'



const CategoryScreen = ({navigation}) => {

    function renderCategoryItem(val){

        function pressHandler(){
            navigation.navigate("MealsOverview", {categoryId : val.item.id})
        }
    
        return   <CategoryGridTitle  title = {val.item.title} 
        color = {val.item.color} pressHandler = {pressHandler}
        />
    }


  return (
    <FlatList data={CATEGORIES} renderItem={renderCategoryItem}

    // <CategoryGridTitle title = {val.item.title} color = {val.item.color} /> 
 
        keyExtractor={(e)=> e.id} numColumns={2}   />
  )
} 

export default CategoryScreen