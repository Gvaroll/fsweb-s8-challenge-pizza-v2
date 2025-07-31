import React, { useEffect, useState } from 'react';
import './OrderSizeContainer.css';

export default function OrderSizeContainer( { siparisBoyutu, setSiparisBoyutu, hamurTipi, setHamurTipi } ) {

    const [error, setError] = useState({});

    useEffect (() => {
        const newErrors = {};
        if (siparisBoyutu === '') {
            newErrors.siparisBoyutu = 'Lütfen bir boyut seçin.';
                }
        if (hamurTipi === '') {
            newErrors.hamurTipi = 'Lütfen bir hamur tipi seçin.';
        }
        setError(newErrors);
    }, [siparisBoyutu, hamurTipi]); 

    


    const handleSizeChange = (e) => {
        setSiparisBoyutu(e.target.value);
    };
    const handleDoughChange = (e) => {
        setHamurTipi(e.target.value);
    };

    return (
        <form className='order-size-container'>
            <div className='form-size'>
                <p className='form-title-size'>Boyut Seç</p>
                <div className='radio-buttons'>
                    <label className='radio-label'>
                        <input
                        type="radio"
                        htmlFor="pizza-type"
                        name="pizza-type"
                        value="Small"
                        onChange={handleSizeChange}
                        />
                        Küçük
                    </label>

                    <label className='radio-label'>
                        <input
                        type="radio"
                        htmlFor="pizza-type"
                        name="pizza-type"
                        value="Medium"
                        onChange={handleSizeChange}
/>
                        Orta
                    </label>

                    <label className='radio-label'>
                        <input
                        type="radio"
                        htmlFor="pizza-type"
                        name="pizza-type"
                        value="Large"
                        onChange={handleSizeChange}                        
                        />
                        Büyük
                    </label>
                </div>
            </div>
            <div className="form-dough">
                <p className='form-title-dough'>Hamur Seç</p>
                <select 
                className='dough-select' 
                name="dough-type" 
                id="dough-type" 
                onChange={handleDoughChange}
                >
                    <option value="" disabled>Hamur Kalınlığı</option>
                    <option value="İnce">İnce</option>
                    <option value="Normal" >Normal</option>
                    <option value="Kalın">Kalın</option>
                </select>
            </div>
            {error.siparisBoyutu && <p className='error-message'>{error.siparisBoyutu}</p>}
            {error.hamurTipi && <p className='error-message'>{error.hamurTipi}</p>}
        </form>
 
    )
}