import React, { useState } from 'react';
import './OrderPizza.css';
import OrderMainHeader from './OrderMainHeader';
import OrderHeader from './OrderHeader';
import OrderBody from './OrderBody';


export default function OrderPizza() {

  const [siparisAdeti, setSiparisAdeti] = useState(0);


    return (

    <div className="order-page">
        <OrderHeader/>
        <main className="order-main">
            <OrderMainHeader/>
            <OrderBody/>            
       </main>
    </div>

    );
    }

