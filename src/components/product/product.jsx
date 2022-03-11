import './product.css';

import Liftsite from "./liftsite/liftsite";
import Restsite from "./restsite/restsite";


function Product() {
    return(
        <>
        <div className="product">
        <Liftsite />
        <Restsite />
        </div>
       
        </>
    )
    
}
export default Product;