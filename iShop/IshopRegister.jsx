import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";

export default function IshopRegister(){

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            user_id: "",
            userName: "",
            password:"",
            age: 0,
            mobile : "",
            email : ""
        },
        onSubmit: values => {
            axios.post ("http://localhost:4000/registerusers" , values)
            alert("Register Successfully");
            navigate("/loging");
        }
    });

    return(
        <div>
            <h1>Register New User</h1>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd>
                        <input
                            type="text"
                            value={formik.values.user_id}
                            onChange={formik.handleChange}
                            name="user_id"
                            // onKeyUp={verifyUserId}
                        />
                    </dd>

                    <dt>User Name</dt>
                    <dd>
                        <input
                            type="text"
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            name="userName"
                        />
                    </dd>

                    <dt>Password</dt>
                    <dd>
                        <input
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            name="password"
                        />
                    </dd>

                    <dt>Age</dt>
                    <dd>
                        <input
                            type="number"
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            name="age"
                        />
                    </dd>

                    <dt>Mobile</dt>
                    <dd>
                        <input
                            type="text"
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            name="mobile"
                        />
                    </dd>

                    <dt>Email</dt>
                    <dd>
                        <input
                            type="text"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                        />
                    </dd>
                </dl>
                <button type="submit" className="btn btn-primary">Register</button>
                <br/>
                <Link to="/loging">Already have Account?</Link>
            </form>   
        </div>
    )
}