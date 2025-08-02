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
                        data-cy="pizza-size-small"
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
                        data-cy="pizza-size-medium"
                        onChange={handleSizeChange}/>
                        Orta
                    </label>

                    <label className='radio-label'>
                        <input
                        type="radio"
                        htmlFor="pizza-type"
                        name="pizza-type"
                        value="Large"
                        data-cy="pizza-size-large"
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
                    <option 
                    value="İnce"
                    data-cy="pizza-dough-thin"
                    >İnce</option>
                    <option 
                    value="Normal" 
                    data-cy="pizza-dough-normal"
                    >Normal</option>
                    <option 
                    value="Kalın"
                    data-cy="pizza-dough-normal"
                    >Kalın</option>
                </select>
            </div>
        </form>
 
    )
}