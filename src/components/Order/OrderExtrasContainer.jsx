import React from 'react';
import './OrderExtrasContainer.css';

export default function OrderExtrasContainer() {
    return (
        <form className='order-extras-container'>
                    <div className='form-ingredients'>
                        <p className='form-title'>Ek Malzemeler</p>
                        <p className='form-subtitle'>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                        <div className='ingredients-checkboxes'>
                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="pepperoni"/>
                                Pepperoni
                            </label>
                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="Tavuk Izgara"/>
                                Tavuk Izgara
                            </label>
                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="Mısır"/>
                                Mısır
                            </label>
                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="Sarımsak"/>
                                Sarımsak
                            </label>
                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="Ananas"/>
                                Ananas
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="sosis"/>
                                Sosis
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="soğan"/>
                                Soğan
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="sucuk"/>
                                Sucuk
                            </label>

                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="biber"/>
                                Biber
                            </label>
                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="kabak"/>
                                Kabak
                            </label>
                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="kanada Jambonu"/>
                                Kanada Jambonu
                            </label>
                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="domates"/>
                                Domates
                            </label>
                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="Jalapeno"/>
                                Jalapeno
                            </label>
                            <label>
                                <input
                                type="checkbox"
                                name="ingredients"
                                value="Sucuk"/>
                                Sucuk
                            </label>

                        </div>
                    </div>
        </form>    
    )
}