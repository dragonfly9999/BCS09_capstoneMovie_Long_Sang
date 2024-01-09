import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';

export const getAllMovieThunk = createAsyncThunk(
  'movie/getAllMovieThunk',
  async (data, thunkAPI) => {
    console.log(data);
    // gọi dữ liệu từ server để lấy danh sách phim
    const result = await quanLyPhimServ.getAllMovie();
    return result.data.content;
  }
);

const initialState = {
  // tạo listMovie chứa danh sách phim
  listMovie: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fulfilled là trạng thái của thunk khi lấy dữ liệu thành công
    builder.addCase(getAllMovieThunk.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
      state.listMovie = action.payload;
    })
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
