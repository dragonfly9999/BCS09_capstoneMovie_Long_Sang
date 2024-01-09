import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { seatSetting } from '../../services/seatSetting'

export const getAllTicketManagerThunk = createAsyncThunk('ticket-manager/getAll', async (data,api) =>{
    try {
        const result = await seatSetting.getItemFromStorage()
        return result
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    listTicket: []
}

const ticketManagerSlice = createSlice({
  name: 'ticket-manager',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(getAllTicketManagerThunk.fulfilled, (state,action) =>{
        state.listTicket = action.payload
    })
  }
});

export const {} = ticketManagerSlice.actions

export default ticketManagerSlice.reducer