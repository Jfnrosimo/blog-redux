import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Jomar Anniban" },
  { id: "1", name: "Daniel Ocampo" },
  { id: "2", name: "Shajana Melen" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
