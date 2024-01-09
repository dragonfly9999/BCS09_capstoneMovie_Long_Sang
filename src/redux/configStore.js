import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import movieSlice from './slice/movieSlice';
import loadingSlice from './slice/loadingSlice';
import ticketSlice from './slice/ticketSlice';
import filmSlice from './slice/filmSlice';
import ticketManagerSlice from './slice/ticketManagerSlice';
import filmScheduleSlice from './slice/filmScheduleSlice';

export const store = configureStore({
  reducer: {
    userSlice,
    movieSlice,
    loadingSlice,
    ticketSlice,
    filmSlice,
    ticketManagerSlice,
    filmScheduleSlice
  },
});
