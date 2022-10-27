import React, {useEffect} from "react"

export default function(props){
    function handleClick(){
        /*funktion die produkte stapelt, also duplikate verhindert und stattdessen die anzahl (.amount) erhöht */
        function stackItems(arr){
            /*variable newAtt ist nötig, weil parameter arr der state ist, und state nicht direkt verändert werden darf!  */
            let newArr = arr
            /*finde position des objekts im einkaufswagen mit dem gleichen namen, wie das element, das hinzugefügt werden soll  */
            let duplicateLocation = newArr.findIndex(item => {return item.name==props.productCart.name}) 
            newArr[duplicateLocation].amount = newArr[duplicateLocation].amount+1
            
            return newArr;
        }
        
        props.setCart(prevCart => {
           /*überprüft, ob ein element im einkaufswagen(prevcart), den gleichen namen hat, wie das element, das hinzugefügt werden soll(props.productcart) */
            return (prevCart.some(prevCart=> prevCart.name==props.productCart.name)?
            /*wenn name doppelt vorkommt */
            /*map funktion notwendig sonst rerendert react nicht beim hinzufügen eines duplikats */
            stackItems(prevCart).map(x=>x)
            /*sonst wird neues produkt hinzugefügt */
            :[...prevCart, props.productCart])
        }
        )
    }
    /*add-to-cart-button */
    return(
        <div  className="addToCart" onClick={handleClick}>
            <p>+</p>
        </div>
    )
}
