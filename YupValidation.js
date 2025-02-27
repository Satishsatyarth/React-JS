import { useFormik } from "formik";
import * as yup from 'yup';


export default function YupValidation() {

    const formik = useFormik({
        initialValues :{
        userName : "",
        Age : 0,
        Email : "",
        },
        validationSchema : yup.object({
            userName : yup.string()
                           .required("UserName required")
                           .min(4, 'Name too short')
                           .max(10, 'Name too long'),

            Age : yup.number()
                     .required("Age required"),
            
            Email: yup.string()
                       .required("Eamil required")
                       .email("Invalid email")
                     
        }),
        onSubmit    : values => {
            alert(JSON.stringify(values));
        } 
    })

  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <h2>User Details</h2>
        <dl>
          <dt>userName</dt>
          <dd>
            <input type="text" {...formik.getFieldProps("userName")}/>
          </dd>
          <dd className="text-danger">{formik.errors.userName}</dd>

          <dt>Age</dt>
          <dd>
            <input type="text" {...formik.getFieldProps("Age")}/>
          </dd>
          <dd className="text-danger">{formik.errors.Age}</dd>

          <dt>Email</dt>
          <dd>
            <input type="text"{...formik.getFieldProps("Email")}/>
          </dd>
          <dd className="text-danger">{formik.errors.Email}</dd>
        </dl>
        <button >Submit</button>
      </form>
    </div>
  );
}
