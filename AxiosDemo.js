import axios from "axios"
import { useState, useEffect } from "react"

export default function AxioxDemo(){

    const[users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:4000/getusers")
        .then(function(response){
            setUsers(response.data)
        })
        .catch((ex) =>{
            console.log(ex); 
        })
    },[])

    return(
        <div>
            <h2>User Details</h2>
            <ol>
                {
                    users.map(user =>
                        <li key={user.user_id}>{user.user_id}</li>
                    )
                }
            </ol>
        </div>
        
    )
}