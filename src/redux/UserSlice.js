import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addUser, deleteUser, editUser } = UserSlice.actions;
export default UserSlice.reducer;
