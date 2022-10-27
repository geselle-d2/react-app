import React from "react";

export default function(props){
    /*berechnen der finalsumme */
    let finalPrice = props.calculation.reduce((sum, obj)=>{
        return (sum + (obj.price*obj.amount*(100-obj.discount)/100));}, 0);
        
        /*rendern der finalsumme und runden auf 2 stellen */
    return(
        <div id="calculation-popup">
            <div class="calculation-content">
            <p>Der Finalpreis beträgt: {finalPrice.toFixed(2)}€</p>
            </div>
        </div>
    )
}