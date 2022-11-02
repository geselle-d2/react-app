import AddToCart from "./addToCart"
import Carousel from 'react-bootstrap/Carousel';

export default function Offers(props){
    /*sortieren der produkte nach höhe des discounts */
    props.reducedProducts.sort((a,b)=>  b.discount-a.discount)
    const redSellers = props.reducedProducts.slice(0,3)
    /*mappen des produktarrays zur produktkarte */
    let productCard = redSellers.map((prod) =>{
        
        return (
        
            <Carousel.Item>
                
                <div className="offer-item">
                
                <img className="d-block w-100 offer-item-image" src={prod.image} alt={prod.name}/>
                <div className="offer-item-title">
                <AddToCart productCart={prod} setCart={props.modifyCart} state={props.state}/>
                <h3>{prod.name}</h3>
                
                </div>
                {/*darstellung des produktpreises, je nach preisnachlass */}
                {prod.discount ==0? 
                <p>{prod.price}</p>
                
                :<div className="offer-item-description">
                    <div className="offer-item-description-discount">
                        {prod.discount}% reduziert
                    </div>
                    Nur {prod.price*(1-prod.discount/100).toFixed(2)}€
                </div>}
                
                
                </div>
                
            </Carousel.Item>
        
        
        
        
        )
    })
    /*darstellung des bootstrap carousel */
    return(
        <div className="offers main-elements">
            <div className="offer-title">
                <h2>Im Angebot</h2>
            </div>
                <div className="offer-body">
                <Carousel variant="dark">
                    {productCard}
                </Carousel>
            </div> 
        </div>
    )
}