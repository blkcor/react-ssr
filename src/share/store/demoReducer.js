import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getDemoData = createAsyncThunk('demo/getData', async (initData) => {
  const res = await axios.post('http://localhost:3000/api/getDemoData', {
    content: initData,
  })
  return res.data?.data?.content
})

const demoReducer = createSlice({
  name: 'demo',
  initialState:
    typeof window !== 'undefined'
      ? window.context?.state?.demo
      : {
          content: 'default data',
        },
  // 同步reducer
  reducers: {},
  // 异步reducer
  extraReducers(build) {
    build
      .addCase(getDemoData.pending, (state, action) => {
        state.content = 'pending'
      })
      .addCase(getDemoData.fulfilled, (state, action) => {
        state.content = action.payload
      })
      .addCase(getDemoData.rejected, (state, action) => {
        state.content = 'rejected'
      })
  },
})

export { demoReducer, getDemoData }
