import {createSlice} from '@reduxjs/toolkit';
import axios from axios


const initialState = []

export const fetchUsersAsync = createAsyncThunk('allUsers', async () => {
    try {
        const {data} = await axios.get('/api/users')
        return data
    } catch (err){
        console.log(err)
    }
})

const userSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAsync.fulfilled, (state,action) =>{
            return action.payload
        })
    }
})

export const selectUsers = (state) => {
    return state.users
}

export default userSlice.reducer