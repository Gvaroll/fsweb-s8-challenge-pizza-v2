import React, { useState } from 'react';
import './OrderPizza.css';
import OrderMainHeader from './OrderMainHeader';
import OrderHeader from './OrderHeader';
import OrderBody from './OrderBody';


export default function OrderPizza(  {siparisBoyutu, setSiparisBoyutu, hamurTipi, setHamurTipi, selectedIngredients, setSelectedIngredients }  ) {


    return (

    <div className="order-page">
        <OrderHeader/>
        <main className="order-main">
            <OrderMainHeader/>
            <OrderBody
              siparisBoyutu={siparisBoyutu}
              setSiparisBoyutu={setSiparisBoyutu}
              hamurTipi={hamurTipi}
              setHamurTipi={setHamurTipi}
              selectedIngredients={selectedIngredients}
              setSelectedIngredients={setSelectedIngredients}
            />            
       </main>
    </div>

    );
    }

