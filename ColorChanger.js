import { useState } from "react";

export default function ColorChanger(){

  const[Theme, setTheme] = useState({});

  function handleColorChange(e){
    if(e.target.checked){
        setTheme({
            backgroundColor:"black",
            color : "white",
            width : "250px",
            padding : "10px",
            margin : "10px"

        })
        }else{
            setTheme({
                backgroundColor : "white",
                color : "black",
                width : "250px",
                padding : "10px",
                margin : "10px"
            })
        }
    }

  return(
    <div className="container-fluid">
      <div style = {Theme}>
        <h2>User Details</h2>
        <div className="form-switch">
          <input onChange={handleColorChange} type="checkbox" className="form-check-input" />
        </div>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" />
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="password" />
          </dd>
        </dl>
        <button>User Login</button>
      </div>
    </div>
  );
}


/*
If we configure from class then we have to pass the property in String

function handleColorChange(e){
    if(e.target.checked){
        setTheme("bg-dark text-white p-2 w-25")
    }else{
            setTheme("bg-light text-dark w-25 p-2")
        }
    }

    function handleColorChange(e){
    if(e.target.checked){
        setTheme({
            backgroundColor:"black",
            color : "white",
            width : "250px",
            padding : "10px",
            margin : "10px"

        })
        }else{
            setTheme({
                backgroundColor : "white",
                color : "black",
                width : "250px",
                padding : "10px",
                margin : "10px"
            })
        }
    }
*/