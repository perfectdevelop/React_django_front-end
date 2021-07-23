// {% load static %}
// <!DOCTYPE html>
// <html className="no-touch">

// <head>
// 	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

//    {% block head %}
//         <title></title>
//         <meta name="description" content="">
//     {% endblock head %}
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">	
//    <meta name="keywords" content="">
//    <link rel="icon" type="image/png" to="{% static 'images/fav.png' %}">
//    <!--Including css, js-->
// 	<link rel="stylesheet" type="text/css" to="{% static 'css/animate.css' %}">
// 	<link rel="stylesheet" type="text/css" to="{% static 'css/bootstrap.min.css' %}">
// 	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
// 		integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
// 	<link rel="stylesheet" type="text/css" to="{% static 'css/jquery.mCustomScrollbar.min.css' %}">
//    <link rel="stylesheet" type="text/css" to="{% static 'css/owl.carousel.css' %}">
//    <link to="{% static 'css/jquery.emojipicker.css' %}" rel="stylesheet">
//    <link to="{% static 'css/jquery.emojipicker.tw.css' %}" rel="stylesheet">
// 	<link rel="stylesheet" type="text/css" to="{% static 'css/style.css' %}">
// 	<link rel="stylesheet" type="text/css" to="{% static 'css/responsive.css' %}">
//    <link rel="stylesheet" type="text/css" to="{% static 'css/custom.css' %}">
//    <script type="text/javascript" src="{% static 'js/jquery.min.js' %}"></script>
//    <script src="{% static 'js/jquery.emojipicker.js' %}"></script>
//    <script src="{% static 'js/jquery.emojis.js' %}"></script>
// </head>

// <body>
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './pages/dashboard';


import logo from '../assets/images/logo.png';
import user from '../assets/images/user.png';
import chat from '../assets/images/chat.png';


const Base = () => (
   <div>
      <div className="wrapper">
         <header>
            <div className="container">
               <div className="header-data">
                  <div className="logo">
                     <Link to="/" title="">
                        <img src={logo} alt="" />
                     </Link>
                  </div>
                  {/* <!--logo end--> */}
                  <div className="search-bar">
                     <form>
                        <input type="text" name="search" placeholder="Search..." />
                        <button type="submit"><i className="fa fa-search"></i></button>
                     </form>
                  </div>
                  {/* <!--search-bar end--> */}
                  <nav className="">
                     <ul>
                        <li className="sub_menu_item sub_menu_item_job m-show">
                           <Link to='job/dashboard' title="">
                              <span><i className="fas fa-briefcase"></i></span>
                              Jobs
                           </Link>
                        </li>
                        <li className="sub_menu_item sub_menu_item_trending m-show">
                           <Link to= '/trending' title="">
                              <span><i className="fas fa-fire"></i></span>
                              Trending
                           </Link>
                        </li>
                        <li className="sub_menu_item sub_menu_item_ideas m-show">
                           <Link to="ideas/dashboard" title="">
                              <span><i className="fas fa-lightbulb"></i></span>
                              Ideas
                           </Link>
                        </li>
                        <li className="sub_menu_item sub_menu_item_clips m-show">
                           <Link to="clips/dashboard" title="">
                              <span><i className="fas fa-film"></i></span>
                              Clips
                           </Link>
                        </li>
                        <li className="sub_menu_item sub_menu_item_trolls m-show">
                           <Link to="trolls/dashboard" title="">
                              <span><i className="far fa-smile-beam"></i></span>
                              Trolls
                           </Link>
                        </li>
                        <li className="sub_menu_item sub_menu_item_funny m-show">
                           <Link to="funny/dashboard" title="">
                              <span><i className="far fa-surprise"></i></span>
                              Funny
                           </Link>
                        </li>
                        <li className="sub_menu_item sub_menu_item_inspired m-show">
                           <Link to="inspired/dashboard" title="">
                              <span><i className="fas fa-theater-masks"></i></span>
                              Inspired
                           </Link>
                        </li>
                        <li className="sub_menu_item sub_menu_item_group m-show">
                           <Link to="group/dashboard" title="">
                              <span><i className="fas fa-users"></i></span>
                              Groups
                           </Link>
                        </li>
                        <li className="sub_menu_item sub_menu_item_page m-show">
                           <Link to="page/dashboard" title="">
                              <span><i className="far fa-file"></i></span>
                              Pages
                           </Link>
                        </li>
                        <li className="sub_menu_item sub_menu_item_virus m-show">
                           <Link to="#" title="">
                              <span>
                                 <svg style={{width:"14px", height:"14px"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="virus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-virus fa-w-16 fa-3x"><path fill="currentColor" d="M483.55,227.55H462c-50.68,0-76.07-61.27-40.23-97.11L437,115.19A28.44,28.44,0,0,0,396.8,75L381.56,90.22c-35.84,35.83-97.11,10.45-97.11-40.23V28.44a28.45,28.45,0,0,0-56.9,0V50c0,50.68-61.27,76.06-97.11,40.23L115.2,75A28.44,28.44,0,0,0,75,115.19l15.25,15.25c35.84,35.84,10.45,97.11-40.23,97.11H28.45a28.45,28.45,0,1,0,0,56.89H50c50.68,0,76.07,61.28,40.23,97.12L75,396.8A28.45,28.45,0,0,0,115.2,437l15.24-15.25c35.84-35.84,97.11-10.45,97.11,40.23v21.54a28.45,28.45,0,0,0,56.9,0V462c0-50.68,61.27-76.07,97.11-40.23L396.8,437A28.45,28.45,0,0,0,437,396.8l-15.25-15.24c-35.84-35.84-10.45-97.12,40.23-97.12h21.54a28.45,28.45,0,1,0,0-56.89ZM224,272a48,48,0,1,1,48-48A48,48,0,0,1,224,272Zm80,56a24,24,0,1,1,24-24A24,24,0,0,1,304,328Z" className=""></path></svg>
                              </span>
                              Covid-19 guide Sytem
                           </Link>
                        </li>
                        <li className="sub_menu_item sub_menu_item_messages">
                           <Link to="#" title="" className="not-box-openm pos_rel">
                              <span className="badge badge-danger badge-counter cnt_msg"></span>
                              <span><i className="fas fa-envelope"></i></span>
                              Messages
                           </Link>
                           <div className="notification-box msg" id="message">
                              <div className="nt-title">
                                 <h4>Setting</h4>
                                 <Link title="" className="btn_clear_message_alert">Clear all</Link>
                              </div>
                              <div className="nott-list">
                                 <div className="nott-inner new_message_list new_message_list_nav">

                                 </div>
                                 <div className="view-all-nots">
                                    <Link to="/messages" title="">View
                                       All Messsages</Link>
                                 </div>
                              </div>
                              {/* <!--nott-list end--> */}
                           </div>
                           {/* <!--notification-box end--> */}
                        </li>
                        <li className="sub_menu_item sub_menu_item_notifications">
                           <Link to="#" title="" className="not-box-open pos_rel">
                              <span className="badge badge-info badge-counter cnt_notification"></span>
                              <span><i className="fas fa-bell"></i></span>
                              Notification
                           </Link>
                           <div className="notification-box noti" id="notification">
                              <div className="nt-title">
                                 <h4>Setting</h4>
                                 <Link className="btn_clear_noti_alert">Clear
                                    all</Link>
                              </div>
                              <div className="nott-list notification_list_wrap">
                                 <div className="nott-inner notification_list notification_unread notification_unread_nav custom_scroll">

                                 </div>
                                 <div className="view-all-nots">
                                    <Link to="/notifications" title="">
                                       View All Notification
                                    </Link>
                                 </div>
                              </div>
                              {/* <!--nott-list end--> */}
                           </div>
                           {/* <!--notification-box end--> */}
                        </li>
                     </ul>
                  </nav>
                  {/* <!--nav end--> */}
                  <div className="menu-btn">
                     <Link to="#" title=""><i className="fa fa-bars"></i></Link>
                  </div>
                  {/* <!--menu-btn end--> */}
                  <div className="user-account">
                     <div className="user-info">

                        {/* {% if user.avatar == '' %}  */}
                           <img className="cur_user_avatar_url" src={user} alt="" />
                        {/* {% else %}
                           <img className="cur_user_avatar_url" src="{{ user.avatar.url }}">
                        {% endif %}
                         */}
							{/* <Link to="#" title="" className="user_full_name">{{ user.first_name }}</Link> */}
                     <Link to="#" title="" className="user_full_name">Strong</Link>
							<i className="fa fa-sort-down"></i>
                     </div>
                     <div className="user-account-settingss" id="users" style={{display: "none"}}>
                        <h3>Setting</h3>
                        <ul className="us-links">
                           <li><Link to="#" title="">My Account</Link></li>
                           <li><Link to="/userposts" title="">My Posts</Link></li>
                           <li><Link to="job/userjobs" title="">My Jobs</Link></li>
                        </ul>
                        <h3>Learn</h3>
                        <ul className="us-links">
                           <li><Link to="/company_profile" title="">Company Profile</Link></li>
                           <li><Link to="/faq" title="">Faq</Link></li>
                           <li><Link to="/terms" title="">Terms</Link></li>
                           <li><Link to="/privacy" title="">Privacy</Link></li>
                        </ul>
                        <h3 className="tc">
                           <Link className="dropdown-item" to="javascript:{document.getElementById('logout').submit()}">
                              <span>
                                 <svg aria-hidden="true" style={{width: "15px", height:"15px;"}} focusable="false" data-prefix="fal" data-icon="sign-out" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-sign-out fa-w-16 fa-3x"><path fill="currentColor" d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z" className=""></path></svg>
                              </span>
                              Logout
                           </Link>
                           <form method="post" action="{% url 'account:logout' %}" id="logout">
                              <input type="hidden" />
                           </form>
                        </h3>
                     </div>
                     {/* <!--user-account-settingss end--> */}
                  </div>
               </div>
               {/* <!--header-data end--> */}
            </div>
         </header>
         {/* <!--header end--> */}
         <Dashboard />

         <div className="chatbox-list contact_list_global">
            <div className="chatbox">
               <div className="chat-mg bx">
                  <Link to="#" title=""><img src={chat} alt="" /></Link>
                  <span>2</span>
               </div>
               <div className="conversation-box">
                  <div className="con-title">
                     <h3>Messages</h3>
                     <Link to="#" title="" className="close-chat"><i className="fa fa-minus-square"></i></Link>
                  </div>
                  <div className="chat-list contact_list">

                  </div>
                  {/* <!--chat-list end--> */}
               </div>
               {/* <!--conversation-box end--> */}
            </div>
         </div>
         <div className="chat_box_area">

         </div>

      </div>
      {/* <!--theme-layout end--> */}

      {/* <!-- Post Media Modal Popup --> */}
      <button type="button" className="btn btn-primary btn-post-media-modal d-none" data-toggle="modal"
         data-target="#postMediaModal">Custom
         post media</button>

      <div className="modal fade" id="postMediaModal" tabindex="-1" role="dialog" aria-hidden="true">
         <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content bg-transparent border-0">
               <div className="modal-body">
                  <div className="embed-responsive embed-responsive-16by9">
                     <img id="post-image-media" className="embed-responsive-item" src="" alt="" style={{display: "none"}} />
                     <video id="post-video-media" className="embed-responsive-item" controls style={{display: "none"}}></video>
                  </div>
               </div>
               <div className="modal-footer bg-dark border-0">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
               </div>
            </div>
         </div>
      </div>
      <div>
         <input type="hidden" id="page_where" value="global" />
         <input type="hidden" id="room_id_global" value="" />
      </div>
      <div className="process-comm" id="loading">
         <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
         </div>
      </div>
      <form action="" className="d-none" id="meta_csrf" method="post">
      </form>
      <div>
         {/* <form action="{% url 'account:messages' %}" id="go_message" method="get">

         </form> */}
      </div>
   </div>
);

export default Base;
{/* <script type="text/javascript" src="{% static 'js/popper.min.js' %}"></script>
	<script type="text/javascript" src="{% static 'js/bootstrap.min.js' %}"></script>
	<script type="text/javascript" src="{% static 'js/jquery.mousewheel.min.js' %}"></script>
   <script type="text/javascript" src="{% static 'js/jquery.mCustomScrollbar.js' %}"></script>
   <script type="text/javascript" src="{% static 'js/jquery.cookie.js' %}"></script>
   <script type="text/javascript" src="{% static 'js/owl.carousel.js' %}"></script>
   <script type="text/javascript" src="{% static 'js/sweetalert2.js' %}"></script>   
   <script type="text/javascript" src="{% static 'js/autosize.js' %}"></script>   
	<script type="text/javascript" src="{% static 'js/script.js' %}"></script>
	<script type="text/javascript" src="{% static 'js/custom.js' %}"></script> */}

{/* <script>
      var page_where = false;
      var cur_user_avatar_url = '';
      function get_new_message_global()
      {
         $.ajax({
             url: "{% url 'chat:get_new_message_global' %}",
             method: 'GET', 
             type: 'json',                  
             success: function (response) {
                
               data = response.messages;
               
               $(".new_message_list").html("");
               var cnt_msg=0;
               for(var i=0;i<data.length;i++)
               {
                  var html=`
                     <div className="notfication-details new_message_item" data-rid="${data[i].room_id}" data-username="${data[i].full_name}">
                        <div className="noty-user-img">
                           <img src="`;
                              if(data[i].user_avatar=="")
                              {
                              html+='/static/images/avatar.png'
                              }
                              else
                              {
                              html+= data[i].user_avatar
                              }
                           html +=
                           `" alt="">
                        </div>
                        <div className="notification-info text-truncate">
                           <h3><Link to="#" title="">${data[i].full_name}</Link> </h3>
                           <p>${data[i].message}</p>
                           <span>${data[i].created_at} ago</span>
                        </div>												
                     </div>
                  `;

                  $(".new_message_list").append(html);
                  cnt_msg += parseInt(data[i].cnt_message);                     
               }
               
               if(cnt_msg > 0)
               {
                  $('.cnt_msg').html(cnt_msg);
               }
               else
               {
                  $('.cnt_msg').html('');
               }
             }
         });
      }

      function get_stored_message_nav()
      {
         $.ajax({
            url: "{% url 'chat:get_stored_message_nav' %}",
            method: 'GET', 
            type: 'json',                      
            success: function (response) {
               var data = response.messages;
               for(var i=0;i<data.length;i++)
               {
                  var html=`
                     <div className="notfication-details new_message_item" data-rid="${data[i].room_id}" data-username="${data[i].full_name}">
                        <div className="noty-user-img">
                           <img src="`;
                              if(data[i].user_avatar=="")
                              {
                              html+='/static/images/avatar.png'
                              }
                              else
                              {
                              html+= data[i].user_avatar
                              }
                           html +=
                           `" alt="">
                        </div>
                        <div className="notification-info text-truncate">
                           <h3><Link to="#" title="">${data[i].full_name}</Link> </h3>
                           <p>${data[i].message}</p>
                           <span>${data[i].created_at} ago</span>
                        </div>												
                     </div>
                  `;

                  $(".new_message_list_nav").append(html);
                  cnt_msg += parseInt(data[i].cnt_message);                     
               }     
            }
         })
      }


      function get_all_room()
      {
         $.ajax({
            url: "{% url 'chat:get_all_room' %}",
            method: 'GET', 
            type: 'json',   
            data: {searchword:$(".searchword").val()},                      
            success: function (response) {
               var rooms = response.rooms;
              
               if(rooms.length > 0)
               {                     
                  $(".contact_list").html("");
                  for(var i=0;i<rooms.length;i++)
                  {  
                     var html="";
                     if(page_where)
                     {
                        html +=`
                           <li className="conv-list btn_room_item" data-rid="${rooms[i].room_id}" data-accepted="${rooms[i].accepted}"  data-status="${rooms[i].status}" data-username="${rooms[i].full_name}">
                              <div className="usr-msg-details">
                                 <div className="usr-ms-img">`;
                                    
                                 if(rooms[i].avatar=="")
                                 {  
                                    html += '<span className="user_no_avatar_40 capital">'+(rooms[i].full_name).charAt(0)+'</span>';
                                 }
                                 else
                                 {
                                    html +=`<img src="${rooms[i].avatar}" alt="" className="mCS_img_loaded">`; 
                                 }
                                    
                           html += `<span className="msg-status"></span>
                                 </div>
                                 <div className="usr-mg-info">
                                    <h3>${rooms[i].full_name}</h3>
                                    <p>${rooms[i].message}</p>
                                 </div> <span className="posted_time">${rooms[i].created_at} ago</span>`;
                                 if(rooms[i].cnt_message !="")
                                 {
                                    html +=`<span className="msg-notifc msg-numbers">${rooms[i].cnt_message}</span>`;
                                 } 
                           html  += `
                              </div>
                           </li>
                        `;
                     }
                     else
                     {
                        html +=`<div className="conv-list btn_room_item" data-rid="${rooms[i].room_id}" data-accepted="${rooms[i].accepted}"  data-status="${rooms[i].status}" data-username="${rooms[i].full_name}">`;
                        html +=`<div className="user-pic">`;
                        if(rooms[i].avatar=="")
                        {  
                        
                           html += '<span className="user_no_avatar capital">'+(rooms[i].full_name).charAt(0)+'</span>';
                        }
                        else
                        {
                           html +=`<img src="${rooms[i].avatar}" alt="" className="mCS_img_loaded">`;                        
                        }
                        
                        html +=`<span className="active-status activee"></span>`;
                        html +=`</div>`;
                        html +=`<div className="user-info-contact">`;
                        html +=`<h3>${rooms[i].full_name}</h3>`;
                        html +=`<div className="ct-time">`;
                        html +=`<span>${rooms[i].created_at}</span>`;
                        html +=`</div>`;
                        html +=`</div>`;
                        if(rooms[i].cnt_message !="")
                        {
                           html +=`<span className="msg-numbers">${rooms[i].cnt_message}</span>`;
                        } 
                        html +=`</div>`;
                     }
                     
                     if(rooms[i].status == '1')
                     {
                        $(".contact_list").append(html);
                     }
                     else
                     {
                        $(".history_list").append(html);
                     }
                  }        
               }
            }
         })
      }
      
      function send_message_global()
      {
         var dt = new Date();
         var room_id = $("#room_id_global").val();
                 
         var time = dt.getHours() + ":" + dt.getMinutes();
         if(page_where)
         {
            var message = $(".send_message_global_message").val();
         }
         else
         {
            var message = $(".send_message_global_"+room_id).val();
         }
         
         if(message == "")
         {
            return false;
         }
         if(room_id == "")
         {
            return false;
         }
         var html = "";         
         

         if(page_where)
         {
            
            html +=`
               <div className="main-message-box ta-right" data-mid="">
                  <div className="message-dt">
                     <div className="message-inner-dt">
                        <p>
                           ${message}
                        </p>
                     </div>
                     <span>${time}</span>
                  </div>
                  <div className="messg-usr-img">
                     <img src="${cur_user_avatar_url}" alt="" className="mCS_img_loaded">
                  </div>
               </div>
            `;


            $('.chat_item_content_message').append(html);
            $(".send_message_global_message").val("");
            $('.chat_item_view_body_message').scrollTop($('.chat_item_view_body_message')[0].scrollHeight);
         }
         else
         {         
            html += '<li><div className="message_item align-items-center osahan-post-header"><div className="mr-1 text-right"><p className="msg_sent" title=""><span className="msg_created mr-1">'+time+'</span>'+message+'</p></div></div></li>';

            $('.chat_item_content_'+room_id).append(html);
            $(".send_message_global_"+room_id).val("");
            
            $('.chat_item_view_body_'+room_id).scrollTop($('.chat_item_view_body_'+room_id)[0].scrollHeight);
         }         
         $.ajax({
            url: "{% url 'chat:store_message' %}",
            method: 'GET', 
            type: 'json',    
            data: {room_id:room_id,message:message},                       
            success: function (response) {                  
               if(!response.results)
               {
                  $.cookie('room_id', '');
                  $.cookie('username', '');                    
                  location.reload();
               }
            }
         });
      }
      
      function get_new_message()
      {
         if($("#room_id_global").val() == "")
         {
            return false;
         }
         else
         {            
            $.ajax({
               url: "{% url 'chat:get_new_message' %}",
               method: 'GET', 
               type: 'json',    
               data: {room_id:$("#room_id_global").val()},                       
               success: function (response) {
                  var messages = response.messages;
                  for(var j=0;j<messages.length;j++)
                  {
                        var checked = true;
                        $(".message_item").each(function(){
                           if(messages[j].message_id == $(this).data('mid'))
                           {
                              checked = false;
                           }
                        });
                        if(checked)
                        {
                           
                           var html = "";
                           if(messages[j].me=="0")
                           {
                              if(page_where)
                              {
                                 html +=`
                                 <div className="main-message-box st3" data-mid="${messages[j].message_id}">
                                    <div className="message-dt st3">
                                       <div className="message-inner-dt">
                                          <p title="${messages[j].created_at} ago">
                                             ${messages[j].message}
                                          </p>
                                       </div>
                                       <span>${messages[j].time}</span>
                                    </div>
                                    <div className="messg-usr-img">`;
                                    if(messages[j].avatar=="")
                                    {                                    
                                       html +=`<img src="/static/images/user.png" alt="" className="mCS_img_loaded">`;
                                    }
                                    else
                                    {                                    
                                       html +=`<img src="${messages[j].avatar}" alt="" className="mCS_img_loaded">`;
                                    }   
                                       
                              html +=`</div>
                                 </div>
                              `;
                              }
                              else
                              {
                                 html += '<li><div data-mid="'+messages[j].message_id+'" className="d-flex message_item align-items-center osahan-post-header"><div className="message_item_avatar"><img src="';
                                 if(messages[j].avatar=="")
                                 {
                                       html += "/static/images/user.png";
                                 }
                                 else
                                 {
                                       html += messages[j].avatar;
                                 }
                                 html +='" alt=""></div><div className="mr-1"><p className="msg_received" title="'+messages[j].created_at+' ago">'+messages[j].message+'</p></div></div></li>';
                                 $('.chat_item_content_'+messages[j].room_id).append(html);  
                                 $('.chat_item_view_body_'+messages[j].room_id).scrollTop($('.chat_item_view_body_'+messages[j].room_id)[0].scrollHeight); 
                              }
                              
                             
                           }
                           else
                           {
                              if(page_where)
                              {
                                 html +=`
                                    <div className="main-message-box ta-right" data-mid="${messages[j].message_id}">
                                       <div className="message-dt">
                                          <div className="message-inner-dt">
                                             <p title="${messages[j].created_at} ago">
                                                ${messages[j].message}
                                             </p>
                                          </div>
                                          <span>${messages[j].time}</span>
                                       </div>
                                       <div className="messg-usr-img">
                                          <img src="`;
                                          if(messages[j].avatar=="")
                                          {
                                             html += "/static/images/user.png";
                                          }
                                          else
                                          {
                                             html += messages[j].avatar;
                                          }
                                 html += `" alt="" className="mCS_img_loaded">
                                       </div>
                                    </div>
                                 `;
                              }
                              else
                              {
                                 html += '<li><div data-mid="'+messages[j].message_id+'" className="message_item align-items-center osahan-post-header"><div className="mr-1 text-right"><p className="msg_sent" title="'+messages[j].created_at+' ago">'+messages[j].message+'</p></div></div></li>';
                              }
                              
                           }
                        }
                                          
                  }                 
               }
            })
         }
     }

      function get_new_notification()
      {
         $.ajax({
            url: "{% url 'account:get_new_notification' %}",
            method: 'GET', 
            type: 'json',             
            success: function (response) {                  
               var data = response.results;               
               if(data.length > 0)
               {                 

                  $(".cnt_notification").html(data.length);
                  for(var j=0;j<data.length;j++)
                  {
                     var checked = true;
                     $(".notification_unread_item").each(function(){
                        if(data[j].id == $(this).data('id'))
                        {
                           checked = false;
                        }
                     });
                     if(checked)
                     {
                        var html=``;
                        html +=`
                           <div className="notfication-details notification_set_read notification_unread_item notification_${data[j].id}" data-id="${data[j].id}">
                              <div className="noty-user-img">
                                 <img src="${data[j].avatar}" className="" alt="">
                              </div>
                              <div className="notification-info">
                                 <h3>
                                       <Link to="#" title="">${data[j].subject}</Link> 
                                       ${data[j].body}
                                 </h3>
                                 <span>${data[j].created_at} ago</span>
                                 <button className="btn btn-danger btn-sm btn_delete_noti" data-id="${data[j].id}"><i className="fa fa-times"></i></button>
                              </div>
                           </div>
                        `;

                        $(".notification_unread").prepend(html);
                     }
                                             
                  }    
               }
                            
            }
         })
      }
      function get_notification()
      {
      $.ajax({
             url: "{% url 'account:get_notification' %}",
             method: 'GET', 
             type: 'json',             
             success: function (response) {                  
                  var data = response.results;
                  
                  if(data.length > 0)
                  {                        
                     var cnt_notification=0;
                     for(var j=0;j<data.length;j++)
                     {
                                               
                        var html=``;
                        
                        html +=`
                           <div className="notfication-details notification_set_read notification_unread_item notification_${data[j].id}" data-id="${data[j].id}">
                              <div className="noty-user-img">
                                 <img src="${data[j].avatar}" className="" alt="">
                              </div>
                              <div className="notification-info">
                                 <h3>
                                       <Link to="#" title="">${data[j].subject}</Link> 
                                       ${data[j].body}
                                 </h3>
                                 <span>${data[j].created_at} ago</span>
                                 <button className="btn btn-danger btn-sm btn_delete_noti" data-id="${data[j].id}"><i className="fa fa-times"></i></button>
                              </div>
                           </div>
                        `;

                        if(data[j].read=='0')
                        {
                           $(".notification_unread").append(html);
                           cnt_notification+=1;
                        }
                        else if(data[j].read=='1')
                        {
                           $(".notification_read").append(html);
                        }                            
                     
                     }  
                     $(".cnt_notification").html(cnt_notification);  
                     if(cnt_notification < 1)
                     {
                        for(var j=0;j<data.length;j++)
                        {
                                                
                           var html=``;
                           
                           html +=`
                              <div className="notfication-details notification_set_read notification_unread_item notification_${data[j].id}" data-id="${data[j].id}">
                                 <div className="noty-user-img">
                                    <img src="${data[j].avatar}" className="" alt="">
                                 </div>
                                 <div className="notification-info">
                                    <h3>
                                          <Link to="#" title="">${data[j].subject}</Link> 
                                          ${data[j].body}
                                    </h3>
                                    <span>${data[j].created_at} ago</span>
                                    <button className="btn btn-danger btn-sm btn_delete_noti" data-id="${data[j].id}"><i className="fa fa-times"></i></button>
                                 </div>
                              </div>
                           `;
                           if(j < 4)
                           {
                              $(".notification_unread_nav").append(html);
                           }
                           
                        }  
                     }
                 }
                 else
                 {

                 }
                             
             }
         });
      }

      function get_stored_message()
      {
         $('#loading').css('display','block');
         var rid = $("#room_id_global").val();
         $.ajax({
             url: "{% url 'chat:get_stored_message' %}",
             method: 'GET', 
             type: 'json',    
             data: {room_id:rid},                       
             success: function (response) {
                  var messages = response.messages;    
                  $('#loading').css('display','none');                         
                  $('.chat_item_content_'+rid).html(""); 
                  if($("#page_where").val()=="message")
                  {
                     $('.chat_item_content_message').html("");                        
                  }       
                 var iswhen = '';
                 for(var j=0;j<messages.length;j++)
                 {
                     var html = "";
                     if(iswhen == messages[j].date)
                     {

                     }
                     else
                     {
                        iswhen = messages[j].date;
                        if(page_where)
                        {
                           html +=`
                              <div className="text-center mt-2 mb-2">
                                 <span className="d-block">
                                    ${messages[j].date}
                                 </span>
                              </div>
                           `;
                        }
                        else
                        {
                           html +=`
                              <li>
                                 <div className="text-center mt-15 mb-15">
                                    <label className="msg_date">
                                       ${messages[j].date}
                                    </label>
                                 </div>
                              </li>
                           `;
                        }
                        
                     }
                     if(messages[j].me=="0")
                     {
                        if(page_where)
                        {
                           html +=`
                              <div className="main-message-box st3" data-mid="${messages[j].message_id}">
                                 <div className="message-dt st3">
                                    <div className="message-inner-dt">
                                       <p title="${messages[j].created_at} ago">
                                          ${messages[j].message}
                                       </p>
                                    </div>
                                    <span>${messages[j].time}</span>
                                 </div>
                                 <div className="messg-usr-img">`;
                                 if(messages[j].avatar=="")
                                 {                                    
                                    html +=`<img src="/static/images/user.png" alt="" className="mCS_img_loaded">`;
                                 }
                                 else
                                 {                                    
                                    html +=`<img src="${messages[j].avatar}" alt="" className="mCS_img_loaded">`;
                                 }   
                                    
                           html +=`</div>
                              </div>
                           `;
                        }
                        else
                        {
                           html += `
                           <li>
                              <div data-mid="${messages[j].message_id}" className="d-flex message_item align-items-center osahan-post-header">
                                 <div className="message_item_avatar">
                                    <img className="" src="`;
                                    if(messages[j].avatar=="")
                                    {
                                       html += "/static/images/user.png";
                                    }
                                    else
                                    {
                                       html += messages[j].avatar;
                                    }
                           html +=`" alt="">
                                 </div>
                                 <div className="mr-1">
                                    <p className="msg_received" title="${messages[j].created_at} ago">${messages[j].message}
                                       <span className="ml-1 msg_created">${messages[j].time}</span>
                                    </p>
                                 </div>
                              </div>
                           </li>`;
                        }
                         
                     }
                     else
                     {
                        if(page_where)
                        {
                           html +=`
                              <div className="main-message-box ta-right" data-mid="${messages[j].message_id}">
                                 <div className="message-dt">
                                    <div className="message-inner-dt">
                                       <p title="${messages[j].created_at} ago">
                                          ${messages[j].message}
                                       </p>
                                    </div>
                                    <span>${messages[j].time}</span>
                                 </div>
                                 <div className="messg-usr-img">
                                    <img src="`;
                                    if(messages[j].avatar=="")
                                    {
                                       html += "/static/images/user.png";
                                    }
                                    else
                                    {
                                       html += messages[j].avatar;
                                    }
                           html += `" alt="" className="mCS_img_loaded">
                                 </div>
                              </div>
                           `;
                        }
                        else
                        {
                           html += `
                              <li>
                                 <div data-mid="${messages[j].message_id}" className="message_item align-items-center osahan-post-header">
                                    <div className="mr-1 text-right">
                                       <p className="msg_sent" title="${messages[j].created_at} ago">
                                          <span className="msg_created mr-1">${messages[j].time}</span>
                                          ${messages[j].message}
                                       </p>
                                    </div>
                                 </div>
                              </li>
                           `;
                        }
                         
                     }  

                     if($("#page_where").val()=="message")
                     {                          
                        $('.chat_item_content_message').append(html);
                     }                  
                     else
                     {
                        $('.chat_item_content_'+rid).append(html);
                     }
                         
                                         
                 }   
                 if(page_where)
                 {
                     $('.chat_box_username_message').html($.cookie('username')); 
                     $('.chat_item_view_body_message').scrollTop($('.chat_item_view_body_message')[0].scrollHeight);  
                                            
                 }
                 else
                 {                  
                    $('.chat_item_view_body_'+rid).scrollTop($('.chat_item_view_body_'+rid)[0].scrollHeight);  
                 }
                            
             }
         })
     }
     
      

      function page_init()
      {
         cur_user_avatar_url = $('.cur_user_avatar_url').prop('src');
         if($("#page_where").val()=="message")
         {                          
            page_where = true;
            $(".chat_box_area").remove();
         }                  
         else
         {
            page_where = false;
         }
         
         get_all_room();
         get_new_message_global();            
         get_notification()
         get_stored_message_nav();
         if($.cookie('chatlistextends'))
         {
            if($.cookie('chatlistextends')=='1')
            {
               $(".contact_body").css("display","block");
            }
            else{
               $(".contact_body").css("display","none");
            }
         }
         else
         {
            $.cookie('chatlistextends','0');
            $(".contact_body").css("display","none");
         }
         if(page_where)
         {
            if($.cookie('room_id'))
            {               
               var room_id =  $.cookie('room_id');                  
               $("#room_id_global").val(room_id);                  
               get_stored_message();
            
            }
         }
         
      }
      $(document).ready(function(){
         page_init();
         get_new_notification();
         setInterval(function(){                 
            // get_new_message_global();               
            // get_new_message();
            // get_all_room();
            // get_new_notification();
            
         }, 2000);
         $('.send_message_global').keypress(function(event){
             var keycode = (event.keyCode ? event.keyCode : event.which);
             if(keycode == '13'){
               send_message_global()
             }                
         });
         
         $(document).on('click','.btn_send',function(){               
            send_message_global();
         });
         
         $(document).on('click','.btn_close_chat_box',function(){   
            var rid = $(this).data('rid');            
            $(".chat_item_view_"+rid).remove();
            
         });
         $(document).on('click','.btn_room_item',function(){               
            var rid = $(this).data('rid');
            var username = $(this).data('username');  
            var status = $(this).data('status');
            
            $(".btn_room_item").removeclassName('active');
            $(this).addclassName("active");
            $("#room_id_global").val(rid);
                          
            $.cookie('room_id', rid);
            $.cookie('username', username); 
            
            if(!page_where)
            {     
               var chat_item_html = '';
               chat_item_html = `
                  <div className="chat_item_view chat_item_view_${rid}" data-rid="${rid}" data-username="${username}">
                     <div className="chat_item_view_header pos_rel">
                        <span className="chat_box_username chat_box_username_${rid}"></span>
                        <button className="btn_close_chat_box" data-rid="${rid}">
                           <i className="fas fa-times"></i>
                        </button>
                     </div>
                     <div className="chat_item_view_body_${rid} custom_scroll common_body_chat_contact">
                        <ul className="chat_item_content chat_item_content_${rid}">
                              
                        </ul>
                     </div>
                     <div className="chat_item_type_message">
                        <div className="pos_rel">               
                           <textarea type="text" className="send_message_global send_message_global_${rid}" placeholder="Type a message"></textarea>
                           <button type="button" className="btn_global_chat btn_send">
                              <i className="fas fa-paper-plane"></i>
                           </button>
                           <input type="hidden" className="cur_room_id" value="${rid}">
                        </div>            
                     </div>
                  </div>
               `;
               if($(".chat_box_area").find(".chat_item_view_"+rid))
               {                  
                  $(".chat_item_view_"+rid).remove();
               }
               $(".chat_box_area").prepend(chat_item_html);
                              
               
            }

            if(page_where)
            {
               $(".chat_box_username_message").html(username);
            }
            else
            {
               $(".chat_box_username_"+rid).html(username);
            }
            
            
            get_stored_message();
            
         });
         $(document).on('click','.send_message_global',function(){
             $.ajax({
                 url: "{% url 'chat:set_read' %}",
                 method: 'GET', 
                 type: 'json',    
                 data: {room_id:$("#room_id_global").val()},                       
                 success: function (response) {
                     if(!response)
                     {
                         location.reload();
                     }
                 }
             });
         });
         
         
         $(document).on('click','.contact_list_global_header',function(){               
            $(".contact_body").slideToggle();
            if($.cookie('chatlistextends')=="1")
            {
               $.cookie('chatlistextends','0');
            }
            else
            {
               $.cookie('chatlistextends','1');
            }
            
         });
         
         $(document).on('click','.new_message_item',function(){               
            var rid = $(this).data('rid');               
            var username = $(this).data('username');               
            $.cookie('room_id', rid);
            $.cookie('username',username)
            $("#go_message").submit();
         });

         $(document).on('click','.btn_top_menu_search',function(){               
            var search_word = $(".search_word").val();
            if(search_word == "")
            {
               return false;
            }
            $.ajax({
               url: "{% url 'account:get_searchresult' %}",
               method: 'GET',
               type: 'json',
               data: {search_word:search_word},
               success: function(response) 
               {
                  var html = '';   
                  
                  var data = response.results;
                  $(".result_list").html("");
                  if(data.length>0)
                  {
                     for(var i=0;i<data.length;i++)
                     {
                        html+=`
                           <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                              <div className="dropdown-list-image mr-3">
                                 <img className="rounded-circle" src="${data[i].avatar}">
                              </div>
                              <div className="font-weight-bold mr-2">
                                 <div className="text-truncate"><Link className="text-blue" to="/user/${data[i].username}">${data[i].firstname}&nbsp;${data[i].lastname}</Link></div>
                                 <div className="small text-gray-500">
                                 </div>
                              </div>                                 
                           </div>
                        `;
                     }
                  }
                  else
                  {
                     html+=`
                        <p>
                           There is no data to match.
                        </p>
                     `;
                  }
                  $(".result_list").append(html);
                  $('.search_result_view').removeclassName('display_none');
               }
            });               
         });
         
         $(document).on('click','.btn_close_search_result',function(){               
            $('.search_result_view').addclassName('display_none');              
         });
         $(document).on('click','.chat_item_view',function(){               
            var rid = $(this).data('rid');
            var username = $(this).data('username');
            $("#room_id_global").val(rid);
            $.cookie('room_id', rid);  
            $.cookie('username', username);
         });            

         $(document).on('click','.btn_clear_message_alert',function(){
            $(".cnt_msg").html("");
            $(".new_message_list").html("");
            $.ajax({
             url: "{% url 'chat:clear_message_alert' %}",
             method: 'GET', 
             type: 'json',             
             success: function (response) {  

             }
            });
         });
         $(document).on('click','.btn_clear_noti_alert',function(){
            $(".cnt_notification").html("");
            $(".notification_unread").html("");
            $.ajax({
             url: "{% url 'chat:clear_noti_alert' %}",
             method: 'GET', 
             type: 'json',             
             success: function (response) {  
               if(!response.results)
               {
                  location.reload();
               }
             }
            });
         });
      });
      
   </script> */}
