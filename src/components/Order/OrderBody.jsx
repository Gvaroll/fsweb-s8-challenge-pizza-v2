import { useState } from "react";
import OrderSizeContainer from "./OrderSizeContainer";
import OrderExtrasContainer from "./OrderExtrasContainer";
import OrderNotesContainer from "./OrderNotesContainer";
import OrderSummaryContainer from "./OrderSummaryContainer"
import './OrderBody.css';

export default function OrderBody() {

    return (
            <div className='main-container'>
                
                <p className='pizza-description'>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
                <OrderSizeContainer/>
                <OrderExtrasContainer/>
                <OrderNotesContainer/>
                <div>
                    <hr className='divider' />
                </div>
                <OrderSummaryContainer/>
            </div>
    )
}