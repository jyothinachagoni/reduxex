import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Statuscode from "../utils/statuscode";

const initialState = {
    data: [],
    status: 'idle'
}

export const getProducts = createAsyncThunk('products/get', async () => {
    try {
        const data = await fetch('https://fakestoreapi.com/products');
        const result = await data.json();
        return result;
    } catch (error) {
        throw Error('Failed to fetch products');
    }
});

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // Other reducers if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = Statuscode.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = Statuscode.IDLE;
                state.data = action.payload;
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = Statuscode.ERROR;
            });
    }
});

export default productSlice.reducer;
