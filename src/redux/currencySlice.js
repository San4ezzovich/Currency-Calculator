import {fetchCurrency} from "./fetchCurrency";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currencies: [],
    first: {
        val: 0,
        curr: 'UAH',
    },
    second: {
        val: 0,
        curr: 'USD',
    },
    isLoading: true
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        currencyFirst: (state, action) => {
            const firstCurrency = state.currencies.find((currency) => currency.curr === state.first.curr);
            const firstSale = firstCurrency.sale;

            const secondCurrency = state.currencies.find((currency) => currency.curr === state.second.curr);
            const secondSale = secondCurrency.sale;


            state.first.val = action.payload;
            state.second.val = secondSale / firstSale * action.payload;
        },
        currencySecond: (state, action) => {
            const firstCurrency = state.currencies.find((currency) => currency.curr === state.first.curr);
            const firstSale = firstCurrency.sale;

            const secondCurrency = state.currencies.find((currency) => currency.curr === state.second.curr);
            const secondSale = secondCurrency.sale;

            state.second.val = action.payload;
            state.first.val = firstSale/secondSale * action.payload;
        },
        writeFirst: (state, action) => {
            state.first.curr = action.payload;
        },
        writeSecond: (state, action) => {
            state.second.curr = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrency.fulfilled, (state, action) => {
            state.currencies = action.payload;
            state.isLoading = false;
        })

        builder.addCase(fetchCurrency.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(fetchCurrency.rejected, (state) => {
            state.isLoading = false;
        })
    },
});

export const {
    currencyFirst,
    currencySecond,
    writeFirst,
    writeSecond
} = currencySlice.actions;