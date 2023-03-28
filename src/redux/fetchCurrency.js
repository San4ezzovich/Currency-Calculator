import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrency = createAsyncThunk(
    'api/fetchCurrency',
    async (arg, thunkAPI) => {
        const response = await axios.get("https://api.apilayer.com/exchangerates_data/latest?symbols=usd%2Ceur&base=uah", {
            headers: {
                "apikey": "GplghBc6223g1RLThYcKmqDNAREqWndF"
            }
        })
        const data = response.data;
        if (!data) throw new Error();

        const resData = Object.entries(data.rates).map(([key, val]) => ({
            curr: key,
            sale: val
        }));

        resData.push({
            curr: "UAH",
            sale: 1
        });

        return resData;
    }
);