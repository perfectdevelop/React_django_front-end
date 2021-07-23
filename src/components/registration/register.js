import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import loginlogo from '../../assets/images/login-logo.png';

const Register = () => {
    return(
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
                                <div action="" id="form_register" method="POST">
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="exampleFormControlInput1">First name</label>
                                            <input type="text" className="form-control required" name="firstname" placeholder="Ex.Ramana" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="exampleFormControlInput1">Last name</label>
                                            <input type="text" className="form-control required" name="lastname" placeholder="Ex.Gude" />
                                        </div>
                                    </div>
                                    <div className="form-group form_warp_phone form_warp">
                                        <label for="exampleFormControlInput1">Phone</label>
                                        <input id="phone" className="form-control" name="phone" type="tel" />
                                        <button className="btn_switch_email_phone" data-type="phone" type="button">Use an email instead</button>
                                    </div>
                                    <div className="form-group form_warp_email form_warp d-none">
                                        <label for="exampleFormControlInput1">Email</label>
                                        <input id="" className="form-control" name="email" type="email" />
                                        <label for="">Don't have an email?</label>
                                        <button className="btn_switch_email_phone" data-type="email" type="button">Use phone</button>
                                    </div>
                                    <div className="form-group">
                                        <p className="alert_email alert_txt">Email already registered. Please login</p>
                                        <p className="alert_phone alert_txt">Phone number already registered. Please login</p>
                                        <p className="alert_both alert_txt">Invalid data.Please try again.</p>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="exampleFormControlInput1">Password <small>(8 or more
                                                characters)</small></label>
                                            <input type="password" className="form-control required" name="password1" placeholder="Choose your password"
                                                aria-describedby="passwordHelpBlock" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="exampleFormControlInput1">Confirm password</label>
                                            <input type="password" className="form-control required" name="password2" placeholder="Re-enter password"
                                                aria-describedby="passwordHelpBlock" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <span>You agree to the Flicker face <a href="#">terms of use</a>, <a href="#">privacy
                                            policies</a> and
                                            <a href="#">cookies policy</a>.</span>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-block font-weight-bold btn_register"> Agree & Join
                                    </button>
                                    <input type="hidden" name="which" value="phone" />
                                    <input type="hidden" name="phoneCode" value="" />
                                </div>
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
