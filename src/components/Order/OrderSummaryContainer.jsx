import { useEffect, useState} from "react";
import OrderDetails from "./OrderDetails";
import OrderPriceBox from "./OrderPriceBox";
import { useHistory } from "react-router-dom";

export default function OrderSummaryContainer( { siparisBoyutu ,hamurTipi ,selectedIngredients } ) {

    const history = useHistory();

    const handleClick = (e) => {
    e.preventDefault();
    history.push('/success');
    }


    const [siparisAdeti, setSiparisAdeti] = useState(0);
    const isValid = siparisBoyutu && hamurTipi && siparisAdeti > 0  && selectedIngredients.length >= 4 && selectedIngredients.length <= 10;

    
    return (
        <form className='order-summary-container'>
            <OrderDetails
            siparisAdeti={siparisAdeti}
            setSiparisAdeti={setSiparisAdeti}
            />
            <div className='order-price'>
                <OrderPriceBox 
                siparisAdeti={siparisAdeti}
                selectedIngredients={selectedIngredients}
                />
                <button 
                onClick={handleClick} 
                className='order-price-button'
                disabled={!isValid }
                >Sipariş Ver</button>
            </div>
                            
        </form>
    )
}