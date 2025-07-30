import React from 'react';
import './OrderHeader.css';

export default function OrderHeader() {


    return (
        <header className="order-header">
            <div className='header-container'>
                <img src="/images/iteration-1-images/logo.svg" alt="logo" className="logo" />
                <div className='header-text'>
                    <p className='header-main' > Ana Sayfa -</p>
                    <p className='header-subtitle'>Sipariş Oluştur</p>
                </div>
            </div>
        </header>
    )
}