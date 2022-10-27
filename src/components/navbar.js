import { Navbar } from "react-bootstrap"
import Cart from "./cart"

export default function(props){
    return(
        <div className="nav">
                <div className="navigation-img">
                        <img src="https://cdn-icons-png.flaticon.com/512/539/539853.png" width="100px" />
                </div>
                <div className="navigation">
                    
                    <div className="nav-products">
                        <p>Produkte</p>
                    </div>
                    <div className="nav-social">
                        <p>Social</p>
                    </div>
                </div>
                <div className="cart-search">
                    <div className="dropdown">
                        <p>Cart</p> 
                        <div className="dropdown-content"> 
                            <Cart dropdown={props.dropdown} modifyCart={props.modifyCart}/>
                        </div>
                    </div>
                    <div className="nav-search">
                        <p>search</p>
                    </div>
                </div>  
        </div>
    )
}