import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    searchContact(state, action) {
      return action.payload;
    },
  },
});

export const { searchContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
