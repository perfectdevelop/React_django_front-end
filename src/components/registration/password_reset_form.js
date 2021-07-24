import React, { useState, useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import AuthService from "../../services/auth.service";
import CheckButton from "react-validation/build/button";

import loginlogo from '../../assets/images/login-logo.png';

const required = (value) => {
    if (!value) {
        return (
            <p className="alert_both alert_txt" style={{ display: "block" }}>Invalid data.Please try again.</p>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <p className="alert_both alert_txt" style={{ display: "block" }}>Invalid data.Please try again.</p>
        );
    }
};

const Password_reset_form = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.resetpassword(email).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };
    
    return (
        <div>
            <div className="login-bg">
                <div className="login-bg-inner">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg d-none d-md-block">
                            <div className="content-detail d-flex flex-column align-items-center justify-content-center">
                                <img className="img-fluid" src={loginlogo} alt="" aria-hidden="true" />
                                <h1 className="title text-center font-weight-bold text-white mt-4">Stay tuned with world</h1>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            {/* {% block content %}
                            {% endblock %} */}
                            <div className="forgot-sidebar bg-white d-flex flex-column justify-content-between">
                                <h2 className="font-weight-bold mb-4 text-center text-md-left">Forgot Password</h2>
                                <Form onSubmit={handleResetPassword} ref={form}>
                                    {/* {% csrf_token %} */}
                                    <div className="form-group" style={{height:"80px"}}>
                                        <label htmlFor="exampleFormControlInput1">Email</label>
                                        <Input type="email" name="email" className="form-control" autoComplete="email" maxLength="254" required="" placeholder="Enter registered email" id="id_email" type="email" value={email} onChange={onChangeEmail} validations={[required, validEmail]}/>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block font-weight-bold">Submit</button>
                                    </div>
                                    {message && (
                                        <div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                </Form>
                                <div className="text-center text-md-left">
                                    <span>Go back to <Link to="/login">Sign in</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="process-comm" id="loading">
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
    )
}

export default Password_reset_form;
