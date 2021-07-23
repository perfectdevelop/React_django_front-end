import React from "react";
import { Link } from 'react-router-dom';

import useravatar from '../../assets/images/avatar.png'

const Profile_info = () => {
    return (
        <div>
            <div className="user-data full-width">
                <div className="user-profile">
                    <div className="username-dt">
                        <div className="usr-pic">
                            {/* <img src="{{ curuser.avatar }}" alt=""> */}
                            <img src={useravatar} alt=""></img>
                        </div>
                    </div>
                    {/* <!--username-dt end--> */}
                    <div className="user-specs">
                        {/* <h3>{{ curuser.firstname }} {{ curuser.lastname }}</h3> */}
                        {/* <span>{{ curuser.location }}</span> */}
                        <h3>Strong Pheonix</h3>
                        <span>location</span>
                    </div>
                </div>
                {/* <!--user-profile end--> */}
                <ul className="user-fw-status">
                    <li>
                        {/* {% if curuser.me == '1' %}
                                <a href="{% url 'account:viewconnections' 'following' %}" className="profile_user_avatar_new_follow_item"><h4>Following</h4></a>
                            {% else %}
                                <a href="#" className="profile_user_avatar_new_follow_item"><h4>Following</h4></a>
                            {% endif %} */}
                                <Link to="view/connections/following" className="profile_user_avatar_new_follow_item"><h4>Following</h4></Link>
                        <span>
                            {/* {% if curuser.following %}
                                    {{ curuser.following }}
                                {% else %}
                                    0
                                {% endif %} */}
                                0
                        </span>
                    </li>
                    <li>
                        {/* {% if curuser.me == '1' %}
                                <a href="{% url 'account:viewconnections' 'followers' %}" className="profile_user_avatar_new_follow_item"><h4>Followers</h4></a>
                            {% else %}
                                <a href="#" className="profile_user_avatar_new_follow_item"><h4>Followers</h4></a>
                            {% endif %} */}
                                <Link to="view/connections/followers" className="profile_user_avatar_new_follow_item"><h4>Followers</h4></Link>
                            <span>
                                {/* {% if curuser.followers %}
                                    {{ curuser.followers }}
                                {% else %}
                                    0
                                {% endif %} */}
                                0
                            </span>
                    </li>
                    <li>
                        <Link to="#" title="">View Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile_info