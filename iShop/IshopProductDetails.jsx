
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function IshopProductDetails(){

    const[product, setProduct] = useState({});
    let params = useParams();

    useEffect(() =>{
        
        axios.get(`http://localhost:4000/getproducts/${params.id}`)
        .then(response => {
            setProduct(response.data);
        })
    },[])

    return(
        <div>
            <h2>Products Details</h2>
            <dl>
                <dt>Title</dt>
                <dd>{product[0].title}</dd>

                <dt>Price</dt>
                <dd>{product[0].price}</dd>

                <dt>Preview</dt>
                <dd><img src={product[0].image} width="80" height="80"/></dd>

                <dt>Rating</dt>
                <dd>{product[0].rating.rate}</dd>
            </dl>

            <br/>
            <Link to={"/product/" + product[0].category}> Back to product</Link>
        </div>
    )
}