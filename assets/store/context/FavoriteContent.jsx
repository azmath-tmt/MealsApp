import { createContext, useState } from "react"


export const FavoriteContent = createContext({
    ids : [],
    addFavorite : (id) => {},
    removeFavorite : (id) => {}
})




function FavoriteContentProvider({children}){

    const [favoriteMeal, setFavoriteMeal] = useState([])


    const addFavorite = (id)=>{

        setFavoriteMeal((previous)=> [...previous, id])
    }

    const removeFavorite = (id)=>{
        setFavoriteMeal((val)=> val.filter((e)=> e !== id))
    }

    const value = {
        ids : favoriteMeal,
        addFavorite : addFavorite,
        removeFavorite : removeFavorite
    }
    



   return (
    <FavoriteContent.Provider value={value}>
        {children} 
     </FavoriteContent.Provider>
   ) 
}



export default FavoriteContentProvider