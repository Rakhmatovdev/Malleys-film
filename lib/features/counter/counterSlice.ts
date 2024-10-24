import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'test',
    initialState: 0,
    reducers: {
      increment: (state, action: PayloadAction<number>) => state + action.payload,
    },
  })
 
  export const {increment}=counterSlice.actions
  export default counterSlice.reducer