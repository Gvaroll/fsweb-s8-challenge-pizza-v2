import React from 'react';
import './OrderPriceBox.css';
export default function OrderPriceBox({ siparisAdeti, selectedIngredients }) {
    return (
    <div className='order-price-box'>
        <div className='order-price-header'>
            <p className='order-price-title'>Sipariş Toplamı</p>
            <div className='order-extras'>
                <p className='total-extras'>Seçimler</p>
                <p className='total-extras-price'>{(selectedIngredients.length * 5).toFixed(2)}₺</p>
            </div>
            <div className='total-price-container'>
                <p className="total-price-text"> Toplam </p>
                <p className='total-price-value'>{(siparisAdeti * 85.50+selectedIngredients.length * 5).toFixed(2)}₺</p>
            </div>                                    
        </div>

    </div>
    );
}