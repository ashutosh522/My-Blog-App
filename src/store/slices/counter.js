//Here we basically need to create the slice.
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  countValue: 0
}

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncreaseCountAction: (state, action) => {
      //console.log(state, action);
      state.countValue += 1; //Here we are updating the state

    },

    handleDecreaseCountAction: (state, action) => {
      state.countValue -= 1;
    }
  }
})
export const { handleIncreaseCountAction, handleDecreaseCountAction } = CounterSlice.actions

export default CounterSlice.reducer