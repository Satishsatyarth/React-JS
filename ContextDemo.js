
import React, {useContext, useState} from "react";

let userDetailsContext = React.createContext(null);

export default function ContextDemo(){
    
    const[userDetails, setUserDetails] = useState({
        userName : "",
        email :""
    })
    
    function handleUser(e){
        setUserDetails({
            userName : e.target.value,
            email : userDetails.email
        })
    }

    function handleEmail(e){
        setUserDetails({
            userName : userDetails.userName,
            email : e.target.value
        })
    }
    function handleSet(e){
        setUserDetails({
            userName : userDetails.userName,
            email : userDetails.email
        })
    }

    return(
    <userDetailsContext.Provider value={userDetails}>
        <div className="container-fluid">
            <h2>Context Demo - {userDetails.userName}</h2>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input onChange={handleUser} type="text"/>
                </dd>

                <dt>Email</dt>
                <dd>
                    <input onChange={handleEmail} type="email"/>
                </dd>
            </dl>
            <button onClick={handleSet}>Set Details</button>
            <HeaderComponent/>
        </div>
    </userDetailsContext.Provider>    
    )
}

function HeaderComponent(){

    const userDetails = useContext(userDetailsContext);

    return(
        <div className="bg-info text-white" style={{height:"150px", padding:"10px"}}>
            <h2>Home - {userDetails.userName}</h2>
            <NavBarComponent/>
        </div>
    )
}

function NavBarComponent(){

    const userDetails = useContext(userDetailsContext)
    return(
        <div className="btn-toolbar bg-dark text-white justify-content-between">
            <div className="btn-group">
                <button className="btn btn-dark">Amazon</button>
            </div>

            <div className="btn-group">
                <button className="btn btn-dark">userEmail -{userDetails.email}</button>
            </div>
        </div>
    )
}