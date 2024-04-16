import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
axios.defaults.baseURL = 'https://661d4a6298427bbbef016077.mockapi.io';

export const fetchFormData = createAsyncThunk(
  'form/fetchFormData',
  async (formData, thunkAPI) => {

    try {
      const { data } = await axios.post('/applications', {formData});
      return data;
    } catch (error) {
      toast.error('Something went wrong, please try reloading the page', {
        duration: 5000,
      });

      thunkAPI.rejectWithValue(error.message);
    }
  }
);