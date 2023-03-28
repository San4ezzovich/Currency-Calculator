import React from 'react';
import {useDispatch} from "react-redux";


const Form = (props) => {
    const dispatch = useDispatch();

    const options = ["USD", "EUR", "UAH" ];
    const value = props.currency.val;
    const curr = props.currency.curr;

    const handleSelectChange = (event) => {
        dispatch(props.write(event.target.value))
        dispatchCounter(value)
    };

    const dispatchCounter = (val)=>{
        if (val < 0) {
            return;
        }
        dispatch(props.currencyAction(val))
    }
    const handleInputChange = (event) => {
        dispatchCounter(event.target.value)
    };

    return (
        <div className='selectContainer'>
            <select className='select' value={curr} onChange={handleSelectChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <input className='input' type='number' min='0' value={Math.round(value * 1e4) / 1e4} onChange={handleInputChange}/>
        </div>
    );
};

export default Form;