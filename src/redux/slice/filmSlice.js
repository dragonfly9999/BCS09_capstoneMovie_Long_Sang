import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { quanLyPhimServ } from '../../services/quanLyPhimServ'

export const getFilmListAsyncThunk = createAsyncThunk('film/getFilmSync', async (data,api) =>{
    try {
        const result = await quanLyPhimServ.getAllMovie()
        return result.data.content
    } catch (error) {
        return error
    }
})

const initialState = {
    listFilm:[]
}

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(getFilmListAsyncThunk.fulfilled, (state,action) =>{
        state.listFilm = action.payload
    })
  }
});

export const {} = filmSlice.actions

export default filmSlice.reducer