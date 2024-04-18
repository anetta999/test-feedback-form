import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
axios.defaults.baseURL = 'https://test-feedback-form-node-js.onrender.com';

export const fetchFormData = createAsyncThunk(
  'form/fetchFormData',
  async (formData, thunkAPI) => {

    try {
      const { data } = await axios.post('/feedbacks', formData);
      return data;
    } catch (error) {
      toast.error('Something went wrong, please try reloading the page', {
        duration: 5000,
      });

      thunkAPI.rejectWithValue(error.message);
    }
  }
);