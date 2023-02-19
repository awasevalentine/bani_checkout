import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { baniBaseUrl } from '../../api_calls/call_url'



//Creating initialstate
const initialState = {
    paymentDetails: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
}



//Fetch the payment details
export const getDetails = createAsyncThunk('checkout/get-details', async(param, thunkAPI) =>{
    try {
        return await (await baniBaseUrl.get(param)).data.data
        
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();
        
        console.log(message)
        const {data} = error.response.data
        return thunkAPI.rejectWithValue(data)
    }
})




const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers:{
        reset: (state)=>{
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = ''
        },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getDetails.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getDetails.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.paymentDetails = action.payload
        })
        .addCase(getDetails.rejected, (state,action)=>{
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload
        })
    }
})


export const {reset} = checkoutSlice.actions;

export default checkoutSlice.reducer