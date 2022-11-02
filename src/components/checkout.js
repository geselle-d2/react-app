import React from "react"
export default function(props){
    function handleClick(){
        /*funktion ändert display-style von none auf flex => sichtbar */
        document.getElementById("calculation-popup").style.display = "flex"
       
    } 
    /*rendert den checkout button für das "absenden" der bestellung */
    return(
        <div>
            <button onClick={handleClick} className="checkout">CheckOut</button>   
        </div>
    )
}