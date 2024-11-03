import React, { useContext, useLayoutEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummyData'
import Name from '../components/Name'
import ListData from '../components/ListData'
import IconButton from '../components/IconButton'
// import { FavoriteContent } from '../store/context/FavoriteContent'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/FavoriteSlice'





const MealsDetails = ({route,navigation}) => {

    const mealId = route.params.mealId

    const selectedMealDetails = MEALS.find((item)=> item.id === mealId)

    // using Context.

    // const FavoriteContentCtx  = useContext(FavoriteContent)

    // const mealIsFavorite = FavoriteContentCtx.ids.includes(mealId)


    // Using Redux...
    
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids) 

    const mealIsFavorite = favoriteMealsIds.includes(mealId)

    const dispatch = useDispatch()


    function changeFavoriteHandler(){
        if(mealIsFavorite){
            // FavoriteContentCtx.removeFavorite(mealId)
            dispatch(removeFavorite({id : mealId}))
        }
        else{
            // FavoriteContentCtx.addFavorite(mealId)
            dispatch(addFavorite({id : mealId}))
        }
        

    }



    // Icon Button....

    useLayoutEffect(()=>{

        navigation.setOptions({
            headerRight : ()=> 
            <IconButton mealIsFavorite={mealIsFavorite}  changeFavoriteHandler={changeFavoriteHandler}
            
        />
        })


    },[navigation,changeFavoriteHandler])


  return (
    <ScrollView style={styles.container}>
        <Image style={styles.img} source={{uri : selectedMealDetails.imageUrl}} />

        <Text style={styles.text}> {selectedMealDetails.title}</Text>

        <View style={styles.innerText}>

            <Text> {selectedMealDetails.duration}m </Text>
            <Text> {selectedMealDetails.complexity.toUpperCase()} </Text>
            <Text> {selectedMealDetails.affordability.toUpperCase()}</Text>

        </View>


        <Name> Ingredients </Name>

        
        {selectedMealDetails.ingredients.map((val)=>

        <ListData key={val} data={val}/>
        )}


        <Name> Steps </Name>

        {selectedMealDetails.steps.map((val)=>
        
        <ListData key={val} data={val} />
        )}




    </ScrollView>
  )
}




const styles = StyleSheet.create({
    container:{
        marginBottom : 35
    },

    img :{
        width: '100%',
        height : 300,
        objectFit : 'cover',
    },
    text:{
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : '25',
        padding:10
    },
    innerText:{
        flexDirection : 'row',
        alignItems : 'center', 
        justifyContent : 'center',
        padding :10
    
    },

    





})

export default MealsDetails