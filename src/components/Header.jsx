import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const currency = useSelector(store=>store.currency.currencies)

    return (
        <div className="header">

            <div className="header-ul">
                <img className="button" src="https://cdn-icons-png.flaticon.com/512/1533/1533239.png" alt=""/>
                <li>
                    <div className="currency">USD</div>
                    <div className="sum">{Math.round(1/currency[0].sale * 1e4) / 1e4}</div>
                </li>
                <li>
                    <div className="currency">EUR</div>
                    <div className="sum">{Math.round(1/currency[1].sale * 1e4) / 1e4}</div>
            </li>
            </div>
        </div>
    );
};

export default Header;