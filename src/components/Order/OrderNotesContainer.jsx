export default function OrderNotesContainer() {
    return (
                <form className='order-notes-container'>
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