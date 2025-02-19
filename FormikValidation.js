import { useFormik } from "formik";

export default function FormikValidation(){

    function VerifyUSerDetails(userDetails){
        const errors = {};

        if(userDetails.UserName == ""){
            errors.UserName = "UserName Required"
        }
        else if(userDetails.UserName.length <= 4){
            errors.UserName = "UserName too short..."
        }
        else if(userDetails.UserName.length >= 10){
            errors.UserName = "UserName too long..."
        }

        if(userDetails.Age == ""){
            errors.Age = "Age Required"
        }
        else if(isNaN(userDetails.Age)){
            errors.Age = "Age must be a number."
        }
        else if(userDetails.Age == 0){
            errors.Age = "Age can't be 0."
        }

        if(userDetails.Email == ""){
            errors.Email = "Email Required"
        }
        else if(userDetails.Email.indexOf("@")<= 2){
            errors.Email = "Invalid Email."
        }
        
        if(userDetails.MobileNo == ""){
            errors.MobileNo = "Mobile Number Required."
        }
        else if(userDetails.MobileNo.match(/\+91\d{10}/)){
            errors.MobileNo= "Invalid Mobile Number."
        }

        return errors;
    }

    const formik = useFormik({
        initialValues : {
            UserName : "",
            Age : 0,
            Email : "",
            MobileNo:""
        },
        validate : VerifyUSerDetails,
        onSubmit : function(values){
            alert(JSON.stringify(values));
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>User Details</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd>
                        <input type="text" name="UserName" onChange={formik.handleChange}/>
                    </dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>

                    <dt>Age</dt>
                    <dd>
                        <input type="text" name="Age" onChange={formik.handleChange}/>
                    </dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>

                    <dt>Email</dt>
                    <dd>
                        <input type="text" name="Email" onChange={formik.handleChange}/>
                    </dd>

                    <dd className="text-danger">{formik.errors.Email}</dd>

                    <dt>MobileNo</dt>
                    <dd>
                        <input type="text" name="MobileNo" onChange={formik.handleChange}/>
                    </dd>
                    <dd className="text-danger">{formik.errors.MobileNo}</dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
} 