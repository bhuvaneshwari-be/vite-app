import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    age: Yup.string().max(18, "Age must be 18+").required("Age is required"),
    phone: Yup.string().min(10, "Invalid Phone Number").required("Phone number is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required")
})

export default function FormikYupForms() {
    return(
        <div className="mb-4">
            <h2 className="text-center mb-4">
                Formik and Yup Forms
            </h2>
        <Formik
            initialValues={
                {
                    name: "",
                    email: "",
                    age: "",
                    phone: "",
                    password: ""
                }
            }

            validationSchema = {schema}

            onSubmit = {(values) => {
                alert("Form Submitted Successfully!")
                console.log(values)
            }}
            >
                <Form>
                    <div>
                        <Field name="name" placeholder="Name" className="form-control"/>
                        <ErrorMessage name="name" component="div" className="text-danger"/>
                    </div>

                    <div>
                        <Field type="email" name="email" placeholder="Email" className="form-control my-2"/>
                        <ErrorMessage name="email" component="div" className="text-danger"/>
                    </div>

                    <div>
                        <Field type="number" name="age" placeholder="Age" className="form-control my-2"/>
                        <ErrorMessage name="age" component="div" className="text-danger"/>
                    </div>

                    <div>
                        <Field type="tel" name="phone" placeholder="Phone" className="form-control my-2"/>
                        <ErrorMessage name="phone" component="div" className="text-danger"/>
                    </div>

                    <div>
                        <Field type="password" name="password" placeholder="Password" className="form-control my-2"/>
                        <ErrorMessage name="password" component="div" className="text-danger"/>
                    </div>

                    <button type="submit" className="btn btn-primary form-control">Submit</button>
                </Form>
            </Formik>
            </div>
    ) 
}