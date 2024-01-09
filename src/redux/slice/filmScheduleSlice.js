import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { quanLyPhimServ } from '../../services/quanLyPhimServ';


export const filmScheduleAsyncThunk = createAsyncThunk('film/getSchedule', async (id) =>{
    try {
        const result = await quanLyPhimServ.layThongTinLichChieuPhim(id)
        return result.data.content
    } catch (error) {
        return error
    }
})

const initialState = {
    filmSchedule: []
}

const filmScheduleSlice = createSlice({
  name: 'film schedule',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(filmScheduleAsyncThunk.fulfilled, (state,action) =>{
        state.filmSchedule = action.payload
    })
  }
});

export const {} = filmScheduleSlice.actions

export default filmScheduleSlice.reducer