import { useState } from "react";
import './OrderDetails.css';

export default function OrderDetails({siparisAdeti, setSiparisAdeti}) {

    
    return (
    <div className="order-details">
        <button
            onClick={(e)=> {
                e.preventDefault();
                setSiparisAdeti(siparisAdeti > 0 ? siparisAdeti - 1 : 0);

            }}
            className='decrement-button'                                
        >-</button> 
        <p className='order-quantity'>{siparisAdeti}</p>
        <button
            onClick={(e)=> {
                e.preventDefault();
                setSiparisAdeti(siparisAdeti + 1);
            }}
        className='increment-button'>+</button>
    </div>
 
    )
}