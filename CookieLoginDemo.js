import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import useCaptcha from "../Hooks/useCaptcha";
import $ from "jquery";

export default function CookieLoginDemo(){

    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const[users, setUsers] = useState([]);

    const code  = useCaptcha();

    const[userDetails, setUserDetails] = useState({
        userName : "",
        password : ""
    });

    function HandleUsername(e){
        setUserDetails({
            userName : e.target.value,
            password: userDetails.password
        })
    }

    function HandlePassword(e){
        setUserDetails({
            userName : userDetails.userName,
            password: e.target.value
        })
    }

    function handlelogin(){
        setCookie("username", userDetails.userName,{path: "/", expires : new Date("2025-01-19 20:25")});
        alert('Login Suceessfully...')
    }

    // function handlelogin(){
    //     for (const user of users) {
    //         if(user.user_id == userDetails.userName && user.password == userDetails.password){
    //             setCookie("username", userDetails.userName,{path: "/", expires : new Date("2025-01-19 20:25")});
    //             alert('Login Suceessfully...')
    //             break;
    //         }
    //         else{
    //             alert("Invalid Login")
    //         }
    //     }
    // }

    function HandleSignOut(){
        removeCookie("username");
        alert("Signed Out SuccessFully...")
    }

    useEffect(() => {
        $.ajax({
            method : "GET",
            url :"http://localhost:4000/getusers",
            success : function(response){
                setUsers(response)
            }
        })
    },[])
    return(
        <div className="container-fluid">
            <h2>User Details</h2>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input onChange={HandleUsername} type="text"/>
                </dd>
                <dt>Password</dt>
                <dd>
                    <input onChange={HandlePassword} type="password"/>
                </dd>

                <dt>Verify Code</dt>
                <dd>{code.code}</dd>
            </dl>
            <button onClick={handlelogin}>Submit</button>
            <hr/>
            <h3>Home <button  onClick={HandleSignOut} className="btn btn-link">SignOut</button></h3>
            Hello ! {cookies.username}
        </div>
    )
}