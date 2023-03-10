import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const fetchSingleUser = createAsyncThunk('singleUser', async(id)=> {
    try{
        const {data} = await axios.get(`/api/users/${id}`)
        return data
    } catch (err) {
        console.log(err)
    }
})

export const editUser = createAsyncThunk('singleUser/edit', async (updatedUser) =>{
    try{
        const {data} = await axios.put(`/api/users/${updatedUser.id}`, updatedUser);
        return data;
    }catch(err){
        console.log(err);
    }
})

const singleUserSlice = createSlice ({
    name: 'singleUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleUser.fulfilled, (state,action) => {
            return action.payload
        })
        builder.addCase(editUser.fulfilled, (state,action) => {
            return action.payload
        })
    }
})

export const selectSingleUser = (state) => {
    return state.singleUser
}

export default singleUserSlice.reducer



