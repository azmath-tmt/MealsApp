import { createSlice } from '@reduxjs/toolkit'

const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids : []
  },

  reducers: {

    addFavorite : (state, action)=>{
        state.ids.push(action.payload.id)
    },

    removeFavorite : (state, action)=>{
        state.ids.splice(state.ids.indexOf(action.payload.id),1)   
  }

}
})

export const {addFavorite , removeFavorite  } = FavoriteSlice.actions

export default FavoriteSlice.reducer


