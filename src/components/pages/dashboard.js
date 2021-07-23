
import React from "react";
import { Link } from "react-router-dom";

import Profile_info from '../layout/profile_info';
import User_nav from '../layout/user_nav';
import Page_searchbox from '../layout/page/page_searchbox';
import User_list from '../layout/user_list';
import Editmodal from '../layout/editmodal';
import Modal_gif from '../layout/modal_gif';
import Page_item from "../layout/page/page_item";

const Dashboard = () => {
    return (
        <div>
            <main>
                <div className="main-section">
                    <div className="container">
                        <div className="main-section-data">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                    <div className="main-left-sidebar left-sidebar-fixed no-margin">
                                        <Profile_info />
                                        <User_nav />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-8 no-pd">
                                    <Page_searchbox />
                                    {/* <!--search-sec end--> */}
                                    <div className="main-ws-sec">
                                        <div className="user-tab-sec">
                                            <div className="tab-feed">
                                                <ul>
                                                    <li data-tab="group-own" className="active animated fadeIn">
                                                        <a href="#" title="">
                                                            <span>Your own Pages</span>
                                                        </a>
                                                    </li>
                                                    <li data-tab="group-follow" className="animated fadeIn">
                                                        <a href="#" title="">
                                                            <span>Pages you follow</span>
                                                        </a>
                                                    </li>
                                                    <li data-tab="group-all" className="animated fadeIn">
                                                        <a href="#" title="">
                                                            <span>All Pages </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <!-- tab-feed end--> */}
                                        </div>
                                        {/* <!--user-tab-sec end--> */}
                                        <div className="product-feed-tab current animated fadeIn" id="group-own">

                                            {/* {% if userpages %}
                                                    {% for item in userpages %}
                                                        {% include "layout/page/page_item.html" %}
                                                    {% endfor %}
                                                {% else %}
                                                    <div className="group-bar">No own pages found!</div>
                                                {% endif %} */}
                                                <Page_item />

                                        </div>
                                        {/* <!--product-feed-tab end--> */}
                                        {/* <div className="product-feed-tab animated fadeIn" id="group-follow">                    
                                                {% if followpages %}
                                                    {% for item in followpages %}
                                                        {% include "layout/page/page_item.html" %}
                                                    {% endfor %}
                                                {% else %}
                                                    <div className="group-bar">You are not following any pages yet!</div>
                                                {% endif %}
                                            </div>
                                            <!--product-feed-tab end--> */}
                                                    {/* <div className="product-feed-tab animated fadeIn" id="group-all">                    
                                                {% if allpages %}
                                                    {% for item in allpages %}
                                                        {% include "layout/page/page_item.html" %}
                                                    {% endfor %}
                                                {% else %}
                                                    <div className="group-bar">No other pages found!</div>
                                                {% endif %}
                                            </div> */}
                                            <div className="product-feed-tab animated fadeIn" id="group-follow">                    
                                                <Page_item />
                                            </div>
                                             <div className="product-feed-tab animated fadeIn" id="group-all">                    
                                                <Page_item />
                                            </div>
                                        {/* <!--product-feed-tab end--> */}
                                    </div>
                                </div>
                                <div className="col-lg-3 pd-right-none no-pd">
                                    <div className="right-sidebar">
                                        <User_list />
                                    </div>
                                    {/* <!--right-sidebar end--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Editmodal />
            <Modal_gif />
        </div>

    )
}

export default Dashboard;