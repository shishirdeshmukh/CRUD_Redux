import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../TempData";

export const Userslice = createSlice({
  name: "user",
  initialState: { value: UsersData },
  reducers: {
    adduser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteuser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateusername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.userId = action.payload.userId;
        }
      });
    },
  },
});

export const { adduser, deleteuser, updateusername } = Userslice.actions;
export default Userslice.reducer;
