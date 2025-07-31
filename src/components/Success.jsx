import React from 'react';
import './Success.css';

export default function Success({siparisBoyutu, hamurTipi, selectedIngredients}) {
    return (
      <header className="success-header">
        <img src="images\iteration-1-images\logo.svg" alt=""/>
        <h1>TEBRİKLER! <br>
        </br>SİPARİŞİNİZ ALINDI!</h1>
        <div className='order-summary'>
          <p>Boyut: {siparisBoyutu} </p>
          <p>Hamur: {hamurTipi}</p>
          <p>Ek Malzemeler: {selectedIngredients.join(', ')}</p>


        </div>
      </header>
    );
}