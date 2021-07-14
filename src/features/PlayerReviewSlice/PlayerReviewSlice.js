import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const callReviews = createAsyncThunk(
    'review/fetchReview',
    async (commentInfo) => {

      // const response = await fetch('https://enigmatic-garden-34025.herokuapp.com/review').then(res=>res.json());
      const response = await fetch('https://blooming-thicket-66783.herokuapp.com/review').then(res=>res.json());

      console.log(response,"think called");
      return response;
    }
);

const initialState = {
    reviews: [],
    status: 'idle',
  };

  export const reviewNewSlice = createSlice({
    name: 'newReview',
    initialState,
    reducers:{
        addReview : (state,action)=>{
          const _state = [...state.reviews,action.payload]
          state.reviews = _state
        },
    },
    extraReducers: (builder)=>{
        builder
      .addCase(callReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(callReviews.fulfilled, (state, action) => {
        state.status = 'idle';
        state.reviews = action.payload;
      });
    }
  })

  export const {addReview} = reviewNewSlice.actions;
   export default reviewNewSlice.reducer;