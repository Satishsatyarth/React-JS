import { useState } from "react"

export function FormAndValidation() {

    const [users] = useState([
        {userId :'satish'},
        {userId:"Sagar"},   
        {userId:"kumkum"},    
        {userId:"nitish"},    
        {userId:"shiva"}    
    ]);

    const [userMsg, setUserMsg] = useState('');
    const [isUserValid, setUserValid] = useState(false);
    const [pwdMsg, setpwdMsg] = useState('');
    const [capsStatus, setcapsStatus] = useState(false);
    const [cityMsg, setcityMsg] = useState("");
    
    const [userDetails, setUserDetails] = useState({
        userId : "",
        password : "",
        city :""
    })

    function VerifyUserID(e){
        for(let user of users){
            if(user.userId == e.target.value){
                setUserMsg("User ID taken - Try Another")
                setUserValid(false)
                break;
            }
            else{
                setUserMsg("User ID available")
                setUserValid(true)
            }
        }
    }

    function HideUserMsg(e){
        if(e.target.value == ""){
            setUserMsg("User Id Required")
        }
        else{
            setUserMsg("");
        }
    }

    function HidePwdMsg(){
        setpwdMsg("");
        setcapsStatus("");
    }

    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
            setpwdMsg("Strong Password")
        }
        else{
            if(e.target.value.length<4){
                setpwdMsg("Poor Password");
            }
            else{
                setpwdMsg("Weak Password")
            }
        }
    }

    function verifyCaps(e){
        if(e.keyCode >= 65 && e.keyCode <= 90 || e.which >= 65 && e.which <= 90){
            setcapsStatus(true);
        }
        else{
            setcapsStatus(false);
        }
    }

    // function verifyCaps(e) {
    //     setcapsStatus(e.getModifierState("CapsLock"));
    //   }

    function verifycity(e){
        if(e.target.value == "no city"){
            setcityMsg(" Please select your city");
        }
        else{
            setcityMsg("");
        }
    }

    function handleUserchange(e){
        setUserDetails({
            userId : e.target.value,
            password :userDetails.password,
            city : userDetails.city
        })
    }

    function handlePasswordchange(e){
        setUserDetails({
            userId : userDetails.userId,
            password :e.target.value,
            city : userDetails.city
        })
    }

    function SubmitDetails(){
        alert(JSON.stringify(userDetails))
    }

  return (
  <div className="container-fluid">
      <h2>User Login</h2>
      <dl>
        <dt>User Id</dt>
        <dd>
           <input type="text" onKeyUp={VerifyUserID} onBlur={HideUserMsg} 
           onChange={handleUserchange}/>
        </dd>
        <dd className={(isUserValid == true)? "text-success" : "text-danger"}> 
            {userMsg}
        </dd>
        <dt>Password</dt>
        <dd>
            <input type="password" 
             onBlur={HidePwdMsg} onKeyUp={VerifyPassword} onKeyPress={verifyCaps}
             onChange={handlePasswordchange}/>
        </dd>
        <dd>{pwdMsg}</dd>
        <dd className={(capsStatus == true)? "d-block" : "d-none"}> 
            <span className="text-warning">
                <span className="bi bi-exclamation-triangle"></span>Caps On
            </span>
        </dd>
        <dt>Select city</dt>
        <dd>
            <select onChange={verifycity}>
                <option value="no city">Select your city</option>
                <option value="Delhi">Delhi</option>
                <option vlaue="Patna">Patna</option>
            </select>
        </dd>
        <dd className="text-danger">{cityMsg}</dd> 
      </dl>
      <button onClick={SubmitDetails}>Submit Details</button>
    </div>
  );
}
