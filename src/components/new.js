import AddToCart from "./addToCart.js"

export default function(props){
    /* anzahl der x neusten produkte, die dargestellt werden sollen*/
    const numOfDisplProd = 3;
    /*sortieren der produkte nach datum des hinzufügens zur produktpalette */
    props.newProducts.sort((a,b)=>  b.for_sale_since-a.for_sale_since)
    const newestProducts = props.newProducts.slice(0, numOfDisplProd)
    
    let newProd = newestProducts.map((prod) =>{
        /*mapt objekt-array zu einer liste von produktkarten */
        return (
            <div className="new-products-item">
                
                <img className="new-products-item-image" src={prod.image} width="200px" height="200px"/>
                <div className="new-products-title">
                <AddToCart productCart={prod} setCart={props.modifyCart}/>
                <h3>{prod.name}</h3>
                </div>
                <p>produkbeschreibung placeholder</p>
                

            </div>
            )
    })
    /*rendern der produkte unter "neu im sortiment"   */
    return(
        <div className="new-products main-elements">
            <h2>Neu im Sortiment</h2>
            <div className="new-products-body">
                {newProd}
            </div>
        </div>
    )
}