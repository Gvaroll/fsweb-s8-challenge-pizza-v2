import { useState } from "react";
import OrderDetails from "./OrderDetails";
import OrderPriceBox from "./OrderPriceBox";



export default function OrderNotesContainer() {
    const [siparisAdeti, setSiparisAdeti] = useState(0);

    
    return (
        <form className='order-summary-container'>
            <OrderDetails
            siparisAdeti={siparisAdeti}
            setSiparisAdeti={setSiparisAdeti}
            />
            <div className='order-price'>
                <OrderPriceBox siparisAdeti={siparisAdeti}/>
                <button className='order-price-button'>Sipariş Ver</button>
            </div>
                            
        </form>
    )
}