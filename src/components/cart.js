import React from "react";
import Checkout from './checkout';

export default function(props){
    /*berechnet die summe der ausgewählten produkte */
    let finalPrice = props.dropdown.reduce((sum, obj)=>{
        return ((sum + (obj.price*obj.amount*(100-obj.discount)/100)));}, 0);

    let cartEntry = props.dropdown.map(entry =>{
        function handleAdd(){
            function stackItems(arr){
                /*finde position des objekts im einkaufswagen mit dem gleichen namen, wie das element, das hinzugefügt werden soll  */
                let productLocation = arr.findIndex(item => {return item.name===entry.name}) 
                arr[productLocation].amount = arr[productLocation].amount+1
                
                return arr;
            }
            /*map-funktion notwendig, sonst rerendert react nicht! */
            props.modifyCart(prev =>(stackItems(prev).map(x=>x) ))
            
        }
        function handleSub(){
            function stackItems(newArr){
                let productLocation = newArr.findIndex(item => {return item.name==entry.name})
                /*verhindert negativ-einträge bei der produktanzahl */ 
                if (newArr[productLocation].amount >= 1){
                    newArr[productLocation].amount = newArr[productLocation].amount-1
                }
                return newArr;
            }
            /* map-funktion notwendig, sonst rerendert react nicht!*/
            props.modifyCart(prev =>(stackItems(prev).map(x=>x) ))
        }
        return ( 
            <div className="dropdown-item">
                <div className="dropdown-item-product">
                    <img className="" src={entry.image} width="20px" alt="img here"/>
                    <p>{entry.name}</p>
                </div>
                <div className="dropdown-item2">
                    
                        {/* wenn discount = 0, kein rendern der grünen box mit dem preisnachlass*/
                        entry.discount==0? "":<div className="dropdown-item-discount">-{entry.discount}%</div>}
                        {/*produkt entfernen oder hinzufügen */}
                        <div className="dropdown-item-modifier">
                            <div className="dropdown-item-modifier-button" onClick={handleAdd}>+</div>
                            <div>{entry.amount}</div>
                            <div className="dropdown-item-modifier-button" onClick={handleSub}>-</div>
                        
                    </div>
                    <div className="dropdown-item-sum">
                        {/*berechnen der endsumme für alle produkte */
                        (entry.amount*entry.price*(100-entry.discount)/100).toFixed(2)}€
                    </div>
                </div>
                
            </div>
            
            )
    })
    
    /* rendert die einträge  */
    return props.dropdown.length===0? 
    <p>cart is empty</p>:
    <div>
        {cartEntry}
        <div>{finalPrice.toFixed(2)}€</div>
        <Checkout cart={props.dropdown} modifyCart={props.modifyCart}/>
    </div>
}