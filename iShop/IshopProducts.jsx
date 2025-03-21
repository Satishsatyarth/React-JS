import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function IshopProducts(){

    const[category, setCategory] = useState();
    const[products, setproducts] = useState([]);
    let params = useParams();

    useEffect(() =>{
        setCategory(params.category);
        axios.get("http://localhost:4000/getproducts")
        .then(response =>{
            setproducts(response.data);
        })
    },[])

   return(
    <div>
        <h2>{params.category} List</h2>
        <ol>
            {
                products.filter(item => item.category === category)
                .map(product =>
                    <li key={product.id}>
                        <img src={product.image} width="70" height="70"/>
                        <div>
                            <Link to={"/details/" + product.id}>{ product.title }</Link>
                        </div>
                    </li>
                )
            }
        </ol>
        <div>
            <Link to="/dashboard">Back to Categories</Link>
        </div>
    </div>
   )
}