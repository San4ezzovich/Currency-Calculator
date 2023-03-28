import React, {useEffect} from 'react';
import './App.css';
import Header from "../components/Header";
import Form from "../components/Form";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrency} from "../redux/fetchCurrency";
import {currencyFirst, currencySecond, writeFirst, writeSecond} from "../redux/currencySlice";

const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(store=>store.currency.isLoading);
    const currency1 = useSelector(store=>store.currency.first);
    const currency2 = useSelector(store=>store.currency.second);
    useEffect(()=>{
        dispatch(fetchCurrency())
    },[]);

    return (
        <div className="App">
            {isLoading
                ? <div className="lds-dual-ring"></div>
                : <div>
                    <Header/>
                    <div className="main">
                        <Form
                            currency={currency1}
                            write={writeFirst}
                            currencyAction={currencyFirst}
                        />
                        <img src="https://www.svgrepo.com/show/29910/two-arrows-spin.svg" alt=""/>
                        <Form
                            currency={currency2}
                            write={writeSecond}
                            currencyAction={currencySecond}/>
                    </div>
                </div>
            }

        </div>
    );
}

export default App;
