import { useState, useEffect } from "react"


export default function ReactHookDemo(){

    const [msg, setMsg] = useState();

    function handleSuccessClick(){
        setMsg(<SuccessComponent/>)
    }

    function handleErrorClick(){
        setMsg(<ErrorComponent/>)
    }
    
    return(
        <div className="container-fluid m-5 p-2">
            <button onClick={handleSuccessClick} className="m-2">Success Login</button>
            <button onClick={handleErrorClick}>Invalid Login</button>
            <hr/>
            <div>
                {msg}
            </div>
        </div>
    )
}

function SuccessComponent(){
    useEffect(() =>{
        alert('Success  component will Mount');

        return(()=>{
            alert("Success component will unMount");
        })
    },[])

    return(
        <div>
            <h2>Success Login...</h2>
        </div>
    )
}

function ErrorComponent(){
    useEffect(() =>{
        alert('Error component will Mount');

        return(()=>{
            alert("Error component will unMount");
        })
    },[])

    return(
        <div>
            <h2>Invalid Credentials</h2>
        </div>
    )
}