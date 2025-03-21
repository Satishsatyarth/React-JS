import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function IshopLoging(){

    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [cookies, setCookies, removeCookies] = useCookies();
    const Formik = useFormik({
        initialValues : {
            user_id : "",
            password : ""
        },
        onSubmit : values => {
              for (const user of users) {
                if(user.user_id == values.user_id && user.password == values.password){
                    setCookies("user_id", user.user_id);
                    navigate("/dashboard");
                    break;
                }else{
                    navigate("/errorpage")
                }
              } 
          }
    }) 

    useEffect(() => {
        axios.get("http://localhost:4000/getusers")
            .then(response => {
              setUsers(response.data);
            })
    },[])

    return(
        <div>
            <h1>User Loging</h1>
            <form onSubmit={Formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd>
                        <input value={Formik.values.user_id} 
                        name="user_id" onChange={Formik.handleChange} 
                        type="text"/>
                    </dd>

                    <dt>Password</dt>
                    <dd><input values={Formik.values.password} name="password" onChange={Formik.handleChange} type="password"/></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </form>
            <br/>
            <Link to="/register">New user?</Link>
        </div>
    )
}