import React from 'react';
import { Link } from "react-router-dom";

import avatar from '../../assets/images/avatar.png';

const User_list = () => {
    return (
        <div>
            <div className="widget suggestions full-width">
                <div className="sd-title">
                    <h3>People you may interested in</h3>
                </div>
                {/* <!--sd-title end--> */}
                <div className="suggestions-list">
                    <div className="suggestions-inner">
                        {/* {% if users %}
                                {% for item in users %}
                                    <div className="suggestion-usd">
                                        <img src="{{ item.avatar }}" alt="">
                                        <div className="sgt-text">
                                            
                                            <div className="text-truncate">
                                                <a className="text-blue" href="{% url 'account:view_user_profile' item.username %}">{{ item.firstname }} {{ item.lastname }}</a>
                                            </div>
                                        </div>
                                                                
                                        <span data-id="{{ item.id }}" className="btn btn-transparent btn_connection"><i className="fa fa-plus"></i></span>
                                    
                                    </div> 
                                {% endfor %}
                            {% else %}
                                <div className="text-center">
                                    <p>There are no people registered.</p>
                                </div>
                            {% endif %} */}
                            <div className="suggestion-usd">
                                        <img src={avatar} alt="" />
                                        <div className="sgt-text">
                                            
                                            <div className="text-truncate">
                                                <Link className="text-blue" to="#">Strong Pheonix</Link>
                                            </div>
                                        </div>
                                                                
                                        <span data-id="{{ item.id }}" className="btn btn-transparent btn_connection"><i className="fa fa-plus"></i></span>
                                    
                                    </div> 
                    </div>
                    <div className="view-more">
                        <Link to="#" title="">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User_list;