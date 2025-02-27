import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

export default function YupValidationComponent() {
  return (
    <div className="container-fluid">

      <h2>User Details</h2>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          Age: "",
          city: "",
        }}
        
        validationSchema={yup.object({
          userName: yup 
            .string()
            .required("Name required")
            .min(5, "Name too short...")
            .max(15, "Name too long"),
          email: yup
            .string()
            .required("Email required")
            .email("Invalid Email"),
          Age: yup
            .number()
            .required("Age required")
            .typeError("Age must be a number"),
          city: yup.string().required("City is required"),
        })}

        onSubmit ={ values => {
          alert(JSON.stringify(values));
        }}>
        {
          feilds => 
            <Form>
            <div>
              <dl>
                <dt>Name</dt>
                <dd>
                  <Field name="userName" type="text" />
                </dd>
                <dd className="text-danger">
                    <ErrorMessage name="userName" />
                  </dd>

                <dt>Email</dt>
                <dd>
                  <Field name="email" type="text" />
                </dd>
                <dd className="text-danger">
                    <ErrorMessage name="email" />
                  </dd>

                <dt>Age</dt>
                <dd>
                  <Field name="Age" type="text" />
                </dd>
                <dd className="text-danger">
                    <ErrorMessage name="Age" />
                  </dd>

                <dt>City</dt>
                <dd>
                  <Field as="select" name="city">
                    <option value="">Select a city</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Patna">Patna</option>
                  </Field>
                </dd>
                <dd className="text-danger">
                    <ErrorMessage name="city" />
                  </dd>
              </dl>
              <button disabled={(feilds.isValid)? false : true}>Register</button>
            </div>
          </Form>
        } 
      </Formik>
    </div>
  );
}
