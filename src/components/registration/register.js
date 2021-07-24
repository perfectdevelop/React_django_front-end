import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../services/auth.service";


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

const vphone = (value) => {
    if (value.typeOf() != 'number') {
        return (
            <p className="alert_both alert_txt" style={{ display: "block" }}>Invalid data.Please try again.</p>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 8 || value.length > 40) {
        return (
            <p className="alert_both alert_txt" style={{ display: "block" }}>Invalid data. 8 or more characters.</p>
        );
    }
};

const vconfirmpassword = (value) => {
    console.log(value)
    if (value="ss") {
        return (
            <p className="alert_both alert_txt" style={{ display: "block" }}>Confirm password istn't match</p>
        );
    }
};

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [switchetop, setSwitchetop] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(firstname, lastname, email, phone, password).then(
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
                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
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
                            <div className="register-sidebar bg-white d-flex flex-column justify-content-between">
                                <h2 className="font-weight-bold mb-4 text-center text-md-left">Join Today</h2>
                                <Form onSubmit={handleRegister} ref={form}>
                                    {!successful && (
                                        <div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6" style={{ height: "70px" }}>
                                                    <label htmlFor="exampleFormControlInput1">First name</label>
                                                    <Input type="text" className="form-control required" name="firstname" placeholder="Ex.Ramana" value={firstname} onChange={(e) => setFirstname(e.target.value)} validations={[required]} />
                                                </div>
                                                <div className="form-group col-md-6" style={{ height: "70px" }}>
                                                    <label htmlFor="exampleFormControlInput1">Last name</label>
                                                    <Input type="text" className="form-control required" name="lastname" placeholder="Ex.Gude" value={lastname} onChange={(e) => setLastname(e.target.value)} validations={[required]} />
                                                </div>
                                            </div>
                                            {switchetop && (
                                                <div className="form-group form_warp_phone form_warp">
                                                    <label htmlFor="exampleFormControlInput1">Phone</label>
                                                    <input id="phone" className="form-control" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} validations={[required, vphone]} />
                                                    <button className="btn_switch_email_phone" data-type="phone" type="button" onClick={() => setSwitchetop(false)} style={{ marginTop: "6px" }}>Use an email instead</button>
                                                </div>
                                            )}
                                            {!switchetop && (
                                                <div className="form-group form_warp_email form_warp">
                                                    <label htmlFor="exampleFormControlInput1">Email</label>
                                                    <input id="" className="form-control" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} validations={[required, validEmail]} />
                                                    <label htmlFor="" style={{ marginTop: "6px" }}>Don't have an email?</label>
                                                    <button className="btn_switch_email_phone" data-type="email" type="button" onClick={() => setSwitchetop(true)}>Use phone</button>
                                                </div>
                                            )}
                                            <div className="form-group">
                                                <p className="alert_email alert_txt">Email already registered. Please login</p>
                                                <p className="alert_phone alert_txt">Phone number already registered. Please login</p>
                                            </div>
                                            <div className="form-row" style={{ height: "97px" }}>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="exampleFormControlInput1">Password <small>(8 or more
                                                        characters)</small></label>
                                                    <Input type="password" className="form-control required" name="password1" placeholder="Choose your password"
                                                        aria-describedby="passwordHelpBlock" value={password} onChange={(e) => setPassword(e.target.value)} validations={[required, vpassword]} />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="exampleFormControlInput1">Confirm password</label>
                                                    <Input type="password" className="form-control required" name="password2" placeholder="Re-enter password"
                                                        aria-describedby="passwordHelpBlock" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} validations={[required, vconfirmpassword]} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <span>You agree to the Flicker face <a href="#">terms of use</a>, <a href="#">privacy
                                                    policies</a> and
                                                    <a href="#">cookies policy</a>.</span>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block font-weight-bold btn_register"> Agree & Join
                                            </button>
                                        </div>
                                    )} 
                                    {message && (
                                        <div className="form-group">
                                            <div
                                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                                role="alert"
                                            >
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                </Form>
                                <div className="text-center text-md-left mt-3">
                                    <span>Already on have an account? <Link to="/login">Sign in</Link></span>
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

export default Register;
