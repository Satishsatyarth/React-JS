import { Cookies, useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function IshopDashboard(){

    const [user_id, setUserId] = useState();
    const [cookies, setCookies, removeCookies] = useCookies();
    const[categories, setCategories] = useState([]);

    let navigate = useNavigate();

    function LoadCategories(){
        axios.get("http://localhost:4000/getcategories")
          .then(response => {
           setCategories(response.data);
        });
    }

    useEffect(() =>{
        if(cookies["user_id"] == undefined){
            navigate("/loging")
        }
        else{
            setUserId(cookies["user_id"]);
            LoadCategories(); 
        }
    },[])

    function handleSingout(){
        removeCookies("user_id");
        navigate("/loging");
    }

    return(
        <div>
            <h1>User Dashboard {user_id} - <button className="btn btn-link" 
            onClick={handleSingout}>SingOut</button></h1>
            <h2>Product Categories</h2>
            <ol>
                {
                    categories.map(item =>
                        <li key={item.category}>
                            <Link to={"/products/" + item.category}>{item.category.toUpperCase()}
                            </Link>
                        </li>
                    )
                }
            </ol>
        </div>
    )
}