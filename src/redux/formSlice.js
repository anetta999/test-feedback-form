import { createSlice } from "@reduxjs/toolkit";
import { fetchFormData } from "./operations";

const formState = {
    formData: {
        name: '',
        email: '',
        message: ''
    },
    isLoading: false,
    error: null,
}

const formSlice = createSlice({
  name: 'form',
  initialState: formState,
  extraReducers: builder => {
    builder
      //fetchFormData
      .addCase(fetchFormData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFormData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.formData = action.payload;
      })
      .addCase(fetchFormData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const formReducer = formSlice.reducer;