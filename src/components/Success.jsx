import React from 'react';
import './Success.css';
import OrderPriceBox from './Order/OrderPriceBox';

export default function Success({ siparisAdeti, setSiparisAdeti ,siparisBoyutu, hamurTipi, selectedIngredients}) {
    return (
      <header className="success-header">
        <img src="images\iteration-1-images\logo.svg" alt=""/>
        <h1>lezzetin yolda </h1>
        <p className='siparis'>SİPARİŞ ALINDI </p>
        <hr />
        <p className='siparis-name'>Position Absolute Acı Pizza</p>
        <div className='order-summary'>
          <p>Boyut: <span style={{ fontWeight: "700" }}>{siparisBoyutu}</span> </p>
          <p>Hamur:  <span style={{ fontWeight: "700" }}>{hamurTipi}</span> </p>
          <p>Ek Malzemeler: <span style={{ fontWeight: "700" }}>{selectedIngredients.join(', ')}</span> </p>
        </div>
        <OrderPriceBox
          siparisAdeti={siparisAdeti}
          selectedIngredients={selectedIngredients}
        />



      </header>
    );
}