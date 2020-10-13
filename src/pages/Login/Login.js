import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
const validationSchema = Yup.object({
    email: Yup.string().required("Required").email(" Please enter valid email "),
    password: Yup.string().required("Required").min(6)
});

const Login = (props) => {
    let history = useHistory();

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit(values) {
            history.push("/feature-questions");
        }
    });
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                        <div class="card-header">
                            <h3 class="text-center font-weight-light my-4"><b>Login</b></h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <label class="small mb-1" for="inputEmailAddress"><b>Email</b></label>
                                    <input
                                        class="form-control py-4"
                                        id="email"
                                        type="email"
                                        formControlName="email"
                                        placeholder="Enter email address"
                                        name="email"
                                        onChange={handleChange}
                                        values={values.email}
                                    />
                                    {errors.email ?
                                        <div
                                            class="error">
                                            {errors.email}
                                        </div>
                                        : null
                                    }
                                </div>
                                <div class="form-group">
                                    <label class="small mb-1" for="inputPassword"><b>Password</b></label>
                                    <input
                                        class="form-control py-4"
                                        id="inputPassword"
                                        type="password"
                                        formControlName="password"
                                        placeholder="Enter password"
                                        name="password"
                                        onChange={handleChange}
                                        values={values.password} />
                                    {errors.password ?
                                        <div
                                            class="error">
                                            {errors.password}
                                        </div>
                                        : null
                                    }
                                </div>
                                <div
                                    class="form-group d-flex align-items-center justify-content-center mt-4 mb-0 text-center">
                                    <button class="btn btn-primary text-center" type="submit" >Login</button>
                                </div>
                            </form>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    )
}

export default Login;
