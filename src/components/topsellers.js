import AddToCart from "./addToCart.js"

export default function TopSellers(props){
    /*modifiziert die anzahl der dargestellten produktkarten */
    let numOfDisplayedProd = 5
    props.topProducts.sort((a,b)=>  b.sold_units-a.sold_units)
    const bestSellers = props.topProducts.slice(0,numOfDisplayedProd)
    
    /*mappt die ausgewählten produkte zu produktkarten */
    let top = bestSellers.map((prod) =>{
        return (
        <div className="topseller-item">
            <img className="topseller-item-image" src={prod.image} width="240px" height="240px"/>
            <div className="topsellers-title">
            <AddToCart productCart={prod} setCart={props.modifyCart}/>
            <h4>{prod.name}</h4>
            </div>
        </div>
        )
    })
    /*rendert den abschnitt topseller */
    return(
        <div className="topseller main-elements">
            <div className="topseller-title">
                <h2>Unsere Renner!</h2>
            </div>
            <div className="topseller-body">
            {top}
            </div> 
        </div>
    )
}