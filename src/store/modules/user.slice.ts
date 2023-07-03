import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginPost } from "../../services/api.services";
import { LoginProps, User } from "../../types/user.type";

export const loginAction = createAsyncThunk(
  "user/login",
  async (props: LoginProps) => {
    const result = loginPost(props);
    console.log("log result asyncthunk", result);
    return result;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {} as User,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginAction.pending, () => {
      console.log("requisicao iniciada...");
    });
    builder.addCase(loginAction.fulfilled, (_, action) => {
      console.log("log action", action);
      return action.payload.data ?? [];
    });
  },
});

export default userSlice.reducer;