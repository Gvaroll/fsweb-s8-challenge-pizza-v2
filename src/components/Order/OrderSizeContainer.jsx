import React from 'react';
import './OrderSizeContainer.css'; // Assuming you have a CSS file for styles

export default function OrderSizeContainer() {
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
                                value="small"/>
                                Küçük
                            </label>

                            <label className='radio-label'>
                                <input
                                type="radio"
                                htmlFor="pizza-type"
                                name="pizza-type"
                                value="medium"/>
                                Orta
                            </label>

                            <label className='radio-label'>
                                <input
                                type="radio"
                                htmlFor="pizza-type"
                                name="pizza-type"
                                value="large"/>
                                Büyük
                            </label>
                        </div>
                    </div>
                    <div className="form-dough">
                        <p className='form-title-dough'>Hamur Seç</p>
                        <select className='dough-select' name="dough-type" id="dough-type"  >
                            <option value="" disabled defaultValue="Hamur Kalınlığı">Hamur Kalınlığı</option>
                            <option value="normal">Normal</option>
                            <option value="ince">İnce</option>
                            <option value="kalın">Kalın</option>
                        </select>
                    </div>
        </form>
 
    )
}