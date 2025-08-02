import { useEffect, useState} from "react";
import OrderDetails from "./OrderDetails";
import OrderPriceBox from "./OrderPriceBox";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function OrderSummaryContainer( {siparisAdeti,setSiparisAdeti ,siparisBoyutu ,hamurTipi ,selectedIngredients } ) {

    const history = useHistory();

    const  handleOrderSubmit =  (e) => {
    e.preventDefault();
    const orderData = {
      siparisBoyutu,
      hamurTipi,
      selectedIngredients,
      siparisAdeti
    };
    axios.post("https://reqres.in/api/pizza", orderData , {
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })
    .then((response) => {
        console.log("Gelen yanıt:", response.data);
        history.push("/success");
    })
    .catch((error) => {
      console.error("Bir hata oluştu:", error);
    });
  }
    const isValid = 
    siparisBoyutu && 
    hamurTipi && 
    siparisAdeti > 0  && 
    selectedIngredients.length >= 4 &&
    selectedIngredients.length <= 10;   
    return (
        <form className='order-summary-container' onSubmit={handleOrderSubmit}>
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
                type='submit'
                className='order-price-button'
                disabled={!isValid }
                >Sipariş Ver</button>
            </div>       
        </form>
    );
}