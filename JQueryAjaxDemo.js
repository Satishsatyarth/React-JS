import { useState, useEffect } from "react";
import $ from "jquery";
import { useFormik } from "formik";

export default function JQueryAjaxDemo() {
    
    const [users, setUsers] = useState([]);
    const[userError, setUserError] = useState("");

    const formik = useFormik({
        initialValues: {
            user_id: "",
            userName: "",
            age: 0,
            mobile : "",
            email : ""
        },
        onSubmit: (values) => {
           $.ajax({
            method : "POST",
            url : "http://localhost:4000/registerusers",
            data : values
           })
           alert("Registered Successfully...")
        },
    });

    useEffect(() => {
        $.ajax({
            method : "GET",
            url : "http://localhost:4000/getusers",
            success : function(response){
                setUsers(response);
            }
        })
    }, []);

    function verifyUserId(e){
        for (const user of users) {
           if(user.user_id == e.target.value){
            setUserError("UserId taken - Try another");
            break;
           }
           else{
            setUserError("UserId Available");
           }
        }
    }

    return (
        <div className="container-fluid">
            <h2>User Details</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd>
                        <input
                            type="text"
                            value={formik.values.user_id}
                            onChange={formik.handleChange}
                            name="user_id"
                            onKeyUp={verifyUserId}
                        />
                    </dd>
                    <dd className="text-danger">{userError}</dd>

                    <dt>User Name</dt>
                    <dd>
                        <input
                            type="text"
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            name="userName"
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
                            value={formik.values.emailmail}
                            onChange={formik.handleChange}
                            name="email"
                        />
                    </dd>
                </dl>
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    );
}
