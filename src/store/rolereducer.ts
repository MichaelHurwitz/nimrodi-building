import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import optionalroles from "../data/roles.json";

interface RoleState {
  role: string;
}

const initialState: RoleState = {
  role: optionalroles[0],
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<number>) => {
      state.role = optionalroles[action.payload];
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
