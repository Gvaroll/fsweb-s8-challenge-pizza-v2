import React, { useEffect } from 'react';
import './OrderExtrasContainer.css';
import { useState } from "react";

export default function OrderExtrasContainer( { selectedIngredients, setSelectedIngredients } ) {
    const [error, setError] = useState({});
    useEffect(() => {
        const newErrors = {};
        if (selectedIngredients.length > 10) {
            newErrors.ingredients = 'En fazla 10 malzeme seçebilirsiniz.';
        }
        if (selectedIngredients.length < 4) {
            newErrors.ingredients = 'Lütfen en az 4 malzeme seçin.';
        }
        setError(newErrors);
    }, [selectedIngredients]);
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedIngredients((prev) => 
            checked ? [...prev, value] : prev.filter((ingredient) => ingredient !== value)
        );
    };
    const isChecked = (value) => selectedIngredients.includes(value);



    return (
        <form className='order-extras-container'>
            <div className='form-ingredients'>
                <p className='form-title'>Ek Malzemeler</p>
                <p className='form-subtitle'>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                {error.ingredients && <p className='error-message'>{error.ingredients}</p>}

                <div className='ingredients-checkboxes'>
                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        value="Pepperoni"
                        checked={isChecked("Pepperoni")}
                        onChange={handleCheckboxChange}
                        />
                        Pepperoni
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        value="Tavuk Izgara"
                        checked={isChecked("Tavuk Izgara")}
                        onChange={handleCheckboxChange}
                        />
                        Tavuk Izgara
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        value="Mısır"
                        checked={isChecked("Mısır")}
                        onChange={handleCheckboxChange}
                        />
                        Mısır
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        value="Sarımsak"
                        checked={isChecked("Sarımsak")}
                        onChange={handleCheckboxChange}
                        />
                                                
                        Sarımsak
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        checked={isChecked("Ananas")}
                        onChange={handleCheckboxChange}
                        name="ingredients"
                        value="Ananas"
                        />
                        Ananas
                    </label>

                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        checked={isChecked("Sosis")}
                        onChange={handleCheckboxChange}
                        value="Sosis"/>
                        Sosis
                    </label>

                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        checked={isChecked("Soğan")}
                        onChange={handleCheckboxChange}
                        value="Soğan"/>
                        Soğan
                    </label>

                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        checked={isChecked("Sucuk")}
                        onChange={handleCheckboxChange}
                        value="Sucuk"/>
                        Sucuk
                    </label>

                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        checked={isChecked("Biber")}
                        onChange={handleCheckboxChange}
                        value="Biber"/>
                        Biber
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        checked={isChecked("Kabak")}
                        onChange={handleCheckboxChange}
                        value="Kabak"/>
                        Kabak
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        value="Kanada Jambonu"
                        checked={isChecked("Kanada Jambonu")}
                        onChange={handleCheckboxChange}
                        />
                        Kanada Jambonu
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        checked={isChecked("Domates")}
                        onChange={handleCheckboxChange}
                        value="Domates"/>
                        Domates
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        checked={isChecked("Jalapeno")}
                        onChange={handleCheckboxChange}

                        value="Jalapeno"/>
                        Jalapeno
                    </label>
                    <label>
                        <input
                        type="checkbox"
                        name="ingredients"
                        checked={isChecked("Mantar")}
                        onChange={handleCheckboxChange}
                        value="Mantar"/>
                        Mantar
                    </label>
                </div>

            </div>

        </form>    
    )
}