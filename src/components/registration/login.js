import React from "react";
import { Link } from "react-router-dom";

import loginlogo from '../../assets/images/login-logo.png';

const login = () => {
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
                            <div className="login-sidebar bg-white">
                                <h2 className="font-weight-bold mb-4 text-center text-md-left">Welcome Back</h2>
                                <form id="form_login" method="POST">
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Email or Phone</label>
                                        <input type="text" name="email" className="form-control required" placeholder="Enter registered email or phone" />
                                        <p className="alert_both alert_txt">Invalid data. Please try again.</p>
                                        <p className="alert_phone alert_txt">Invalid data. Please try again.</p>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Password</label>
                                        <input type="password" name="password" className="form-control required input_login" placeholder="Enter your password"
                                            aria-describedby="passwordHelpBlock" />
                                        <p className="alert_passmatch alert_txt">The password dont match.</p>
                                    </div>
                                    <div className="form-group d-flex justify-content-between">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" for="customCheck1">Remember me</label>
                                        </div>
                                        <a href="/password_reset">Forgot password?</a>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-block btn_login font-weight-bold">Sign
                                        in</button>
                                    <input type="hidden" value="" name="which" />
                                </form>
                                <div className="text-center text-md-left mt-3">
                                    <span>Don't have an account? <Link to="/register">Join now</Link></span>
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

export default login

    // <script>
    //     function isEmail(email) {
    //         var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //         return regex.test(email);
    //     }
    //     function isNumber(phone) {
    //         var regex = /^([0-9])/;
    //         return regex.test(phone);
    //     }
    //     function login()
    //     {
    //         $('input[name="which"]').val('');            
    //         var checkvalid = true;       
    //         $(".required").each(function(){
    //             if($(this).val() == "")
    //             {                        
    //                 $(this).addclassName('alertborder');
    //                 checkvalid = false;
    //             }
    //         });

    //         var is_email = isEmail($('input[name="email"]').val());
    //         var is_phone = isNumber($('input[name="email"]').val());

    //         if(is_phone)
    //         {
    //             $('input[name="which"]').val('phone');
    //         }
    //         else if(is_email)
    //         {
    //             $('input[name="which"]').val('email');
    //         }
    //         else
    //         {                    
    //             $(".alert_both").css('display','block');
    //             return false;
    //         }
    //         var password = $('input[name="password"]').val();                 

    //         if(password =="")
    //         {                                       
    //             return false;
    //         }
    //         else{
    //             if(password.length < 8 ){
    //                 alert("The password must be 8 or more characters.");
    //                 return false;
    //             }
    //         }


    //         if(checkvalid)
    //         {                    
    //             $("#loading").css("display",'flex');
    //             var data = $('#form_login').serialize();
    //             $.ajax({
    //                 url: "{% url 'account:check_login' %}",
    //                 method: 'POST', 
    //                 type: 'json',
    //                 data: data,           
    //                 success: function (response) 
    //                 {  
    //                     $("#loading").css("display",'none');
    //                     var data = response.results;         
    //                     console.log(data);                  
    //                     if(data.is_phone == '1' || data.is_email == '1')
    //                     {           
    //                         if(data.is_pass == '0')
    //                         {
    //                             $(".alert_passmatch").css('display','block');
    //                         }   
    //                         else if(data.is_active == '0')
    //                         {
    //                             swal({
    //                                 title: "Your account has been closed!",         
    //                                 type: "error"
    //                             }).then(function() {

    //                             });
    //                         }
    //                         else
    //                         {
    //                             var cur_url = window.location.href.replace('login/', 'dashboard');                       
    //                             window.location.replace(cur_url);    
    //                         }                  

    //                     }
    //                     else
    //                     {                                
    //                         $(".alert_phone").css('display','block'); 
    //                     }
    //                 }
    //             });
    //         }
    //         else
    //         {
    //             return false;
    //         }
    //     }
    //     $(document).ready(function(){
    //         $(document).on('click','.alertborder',function(){                
    //             $(this).removeclassName('alertborder');
    //         });
    //         $(document).on('click','input[name="email"]',function(){
    //             $(".alert_txt").css("display","none");
    //         });
    //         $(document).on('click','.btn_login',function()
    //         {                     
    //             login();
    //         });

    //         $(document).on('keyup','.input_login',function(e){
    //             if(e.which == 13) {
    //                 login();
    //             }                
    //         });
    //         $(document).on('keyup','.alertborder',function(){
    //             $(this).removeclassName('alertborder');
    //         });
    //         $(document).on('keyup','.required',function(){
    //             $(this).parent().parent().find('p').css('display','none');
    //         });

    //     });
    // </script>