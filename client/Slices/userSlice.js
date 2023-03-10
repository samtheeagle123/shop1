import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = []

export const fetchUsersAsync = createAsyncThunk('allUsers', async () => {
    try {
        const {data} = await axios.get('/api/users')
        return data
    } catch (err){
        console.log(err)
    }
})

export const deleteUser = createAsyncThunk('deleteUser', async (id) => {
    try {
        await axios.delete(`/api/users/${id}`)
        return id
    } catch (err) {
        console.log(err)
    }
})

const userSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
            return action.payload
        }),
        
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            return state.filter(user => user.id !== action.payload)
    })
}

})
export const selectUsers = (state) => {
    return state.users
}

export default userSlice.reducer