import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Ultils/axios";
export const fetchLoginUser = createAsyncThunk(
  "fetchLogin",
  async (token, thunkAPI) => {
    const response = await axiosInstance
      .post("/login", token)
      .then((res) => res.data);
    return response;
  }
);
export const fetchProfileUser = createAsyncThunk(
  "fetchProfile",
  async (apitoken, thunkAPI) => {
    const user = axiosInstance
      .get("/profile", { headers: { Authorization: `Bearer ${apitoken}` } })
      .then((response) => response.data);
    return user;
  }
);
const AuthReducer = createSlice({
  name: "Auth",
  initialState: {
    loading: false,
    user: { name: "", token: "", id: "" },
    apitoken: "",
    auth: false,
    loadingProfile: true,
  },
  reducers: {
    authlogin(state, action) {
      state.auth=true;
    },
  },
  extraReducers: {
    /**
     * kiem tra login
     */
    [fetchLoginUser.pending]: (state, payload) => {
      state.loading = true;
    },
    [fetchLoginUser.fulfilled]: (state, payload) => {
      if (payload.payload.status === true) {
        state.apitoken = payload.payload.data;
        state.auth = true;
        localStorage.setItem("token", payload.payload.data);
      } else {
        localStorage.removeItem("token");
      }
    },
    [fetchLoginUser.rejected]: (state, payload) => {
      state.loading = false;
    },
    /**
     * kiem tra profile
     */
    [fetchProfileUser.pending]: (state, payload) => {},
    [fetchProfileUser.fulfilled]: (state, payload) => {
      if (payload.payload.status === true) {
        state.auth = true;
        state.user = {
          name: payload.payload.data.username,
          token: "",
          id: payload.payload.data.id,
        };
        state.loadingProfile=false;
      } else {
        
        state.auth=false
      }
    },
    [fetchProfileUser.rejected]: (state, payload) => {
      state.loadingProfile=false;
    },
  },
});
export default AuthReducer.reducer;
export const { authlogin } = AuthReducer.actions;
