import { useState } from "react"


export default function EventBindingComponent(){

    const [userName, setuserName] = useState("Satish");

    function handleUserName(e){
        setuserName(e.target.value)
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>Usre Name</dt>
                <dd><input type="text" value={userName} onChange={handleUserName}></input></dd>
            </dl>
            <h3>Hello! {userName}</h3>
        </div>
    )
}