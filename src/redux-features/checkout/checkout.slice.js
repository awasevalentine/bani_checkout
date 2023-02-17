import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'



//Creating initialstate
const initialState = {
    itemsData: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
}


//Section for checkout
export const checkoutData = createAsyncThunk('checkout/item-checkout', async(checkoutData, thunkAPI) =>{
    try {
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
        .addCase(checkoutData.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(checkoutData.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(checkoutData.rejected, (state,action)=>{
            state.isError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload
        })
    }
})


export const {reset} = checkoutSlice.actions;

export default checkoutSlice.reducer