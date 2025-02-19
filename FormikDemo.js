import { Formik, useFormik } from "formik"

export default function FormikDemo(){

    const formik = useFormik({
        initialValues :{
            userName : "",
            password :"",
            city :""
        },
        onSubmit : function(values){
            alert(JSON.stringify(values));

        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>User Registration</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd>
                        <input type="text" name="userName" onChange={formik.handleChange} value={formik.values.userName}/>
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password}/>
                    </dd>
                    <dt> Select your city</dt>
                    <select name="city" value={formik.values.city} onChange={formik.handleChange}>
                        <option>Select your city</option>
                        <option>Delhi</option>
                        <option>Bihar</option>
                    </select>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}