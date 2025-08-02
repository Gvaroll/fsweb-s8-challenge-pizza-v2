import { useState } from "react";

export default function OrderNotesContainer() {

    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setName(value);

        if (value.length < 3) {
        setError('İsim en az 3 karakter olmalı.');
        } else {
        setError('');
        }
    };
    return (
                <form className='order-notes-container'>
                    <div>
                        <label>İsim:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={handleChange}
                            required
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                    <div className="order-notes">
                        <p className='form-title'>Sipariş Notu</p>
                        <textarea
                            className='notes-textarea'
                            name="order-notes"
                            id="order-notes"
                            placeholder='Siparişine eklemek istediğin bir not var mı?'
                            rows="4"
                        ></textarea>
                    </div>
                </form>

    )
}