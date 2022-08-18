import { createSlice } from '@reduxjs/toolkit';
const initialState = {}
const user_slice = createSlice({
  name: 'user_slice',
  initialState,
  reducers: {
    set_current_user: (state = {}, action = {}) => {
      return { ...action.payload }
    },
  }
})
export const { set_current_user } = user_slice.actions;
export default user_slice.reducer;