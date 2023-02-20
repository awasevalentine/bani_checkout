import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { baniBaseUrl } from '../../api_calls/call_url'


const initdata = {
    page_amount: 0,
    page_whatsapp_phone: '', 
    email: '', 
    firstName: '', 
    lastName: '',
    additional_request: '', 
}

//Creating initialstate
var initialState = {
    paymentDetails: initdata,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
}



//Fetch the payment details
export const getDetails = createAsyncThunk('checkout/get-details', async(param, thunkAPI) =>{
    try {
        return await baniBaseUrl.get(param).then((res)=>{
            if(res.data.data){
                res.data.data.firstName = res.data.data.page_creator_details.account_trade_name.split(" ")[0]
                res.data.data.lastName = res.data.data.page_creator_details.account_trade_name.split(" ")[1]
                return res.data.data
            }
  
        })
        
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();
        
        console.log(message)
        const {data} = error.response.data
        return thunkAPI.rejectWithValue(data)
    }
})
getDetails()




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
        updatePaymentDetails: (state, action)=>{
            state.paymentDetails = action.payload;
        }
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


export const {reset, updatePaymentDetails} = checkoutSlice.actions;

export default checkoutSlice.reducer