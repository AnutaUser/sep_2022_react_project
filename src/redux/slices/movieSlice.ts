import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";

interface IState {
    movies: IMovie[];
}

const initialState: IState = {
    movies: [],
};

// const getALL = createAsyncThunk<IMovie[]>(
//     'movieSlice/getALL',
//     async () => {
//         try {
//
//         }catch (e) {
//
//         }
//     }
// );

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers:builder => 
        builder
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {};

export {
    movieReducer,
    movieActions,
};
