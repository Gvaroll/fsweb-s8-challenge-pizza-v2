import "./OrderMainHeader.css";
import React from 'react';

export default function OrderMainHeader() {


    return (
            <div className='main-header'>
                <h3 className='main-title'>Position Absolute Acı Pizza</h3>
                <div className="pizza-info">
                    <p className="pizza-price"> 85.50₺ </p>
                    <nav>
                        <p>4.9</p>
                        <p>(200)</p>
                    </nav>
                </div>
            </div>
    )
}