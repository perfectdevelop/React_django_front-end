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

