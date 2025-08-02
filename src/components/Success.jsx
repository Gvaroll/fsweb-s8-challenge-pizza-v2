import React from 'react';
import './Success.css';
import OrderPriceBox from './Order/OrderPriceBox';

export default function Success({ siparisAdeti, setSiparisAdeti ,siparisBoyutu, hamurTipi, selectedIngredients}) {
    return (
      <header className="success-header">
        <img src="images\iteration-1-images\logo.svg" alt=""/>
        <h1>TEBRİKLER! <br>
        </br>SİPARİŞİNİZ ALINDI!</h1>
        <p>Position Absolute Acı Pizza</p>
        <div className='order-summary'>
          <p>Boyut: {siparisBoyutu} </p>
          <p>Hamur: {hamurTipi}</p>
          <p>Ek Malzemeler: {selectedIngredients.join(', ')}</p>
        </div>
        <OrderPriceBox
          handleOrderSubmit={handleOrderSubmit}
          siparisAdeti={siparisAdeti}
          selectedIngredients={selectedIngredients}
        />



      </header>
    );
}