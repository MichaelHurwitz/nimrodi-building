import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FloorAccessState {
  floorAccess: boolean[];
}

const initialState: FloorAccessState = {
  floorAccess: [false, false, false, false, false],
};

const floorSlice = createSlice({
  name: "floorAccess",
  initialState,
  reducers: {
    changeAccess: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.floorAccess[index] = !state.floorAccess[index];
    },
  },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
