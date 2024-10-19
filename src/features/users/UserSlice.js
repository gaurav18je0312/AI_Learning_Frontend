import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAxios } from "../../hooks";

export const verifyToken = createAsyncThunk("users/verifyToken", async () => {
    const token = localStorage.getItem("token");
    if (!token){
        return null;
    }
  const { data } = useAxios("/users/verify-token", "GET", null, true);
  return data;
});
