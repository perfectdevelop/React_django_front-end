import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '../../../assets/images/avatar.png';

const Page_item = () => {
    return (
        <div>
            <div className="group-bar">
                <div className="group_topbar">
                    <div className="user-detail d-flex align-items-center">
                        {/* <img src="{{ item.avatar }}" alt="" className="rounded-circle-35 mCS_img_loaded" />
            <div className="user-name">
                <h3><Link to="{% url 'pages:view_page_detail' item.id %}">{{ item.title }}</a></h3>
            </div> */}
                        <img src={avatar} alt="" className="rounded-circle-35 mCS_img_loaded" />
                        <h3><Link to="">Title</Link></h3>
                    </div>
                    {/* {% if item.me == '1' %}            
            <button type="button" data-id="{{ item.id }}" className="btn btn-success float-right btn_invite">Invite</button>
        {% else %}
            <button type="button" data-id="{{ item.id }}" className="btn btn-primary float-right btn_page_follow">
                {{ item.followtxt }}
            </button>            
        {% endif %} */}
                    <button type="button" data-id="{{ item.id }}" className="btn btn-success float-right btn_invite">Invite</button>
                </div>
                <div className="group-status-bar">
                    <ul className="group-com">
                        {/* <li>
                <Link to="#"><i className="fas fa-users"></i> {{ item.followers }} Followers</a>
            </li>
            <li>
                <a href="#"><i className="fas fa-edit"></i> {{ item.posts }} Posts</a>
            </li>
            <li>
                <a className="btn_page_like btn_set_like" data-id="{{ item.id }}">
                    {% if item.liked == '1' %}
                        <i className="fas fa-heart"></i>
                    {% else %}
                        <i className="far fa-heart"></i>
                    {% endif %}                    
                    <span className="likes">{{ item.likes }}</span> Like
                </a>                
            </li> */}
                        <li>
                            <Link to="#"><i className="fas fa-users"></i>1 Followers</Link>
                        </li>
                        <li>
                            <a href="#"><i className="fas fa-edit"></i> 5 Posts</a>
                        </li>
                        <li>
                            <Link className="btn_page_like btn_set_like" data-id="{{ item.id }}">
                                <i className="fas fa-heart"></i>
                                <span className="likes">5</span> Like
                            </Link>
                        </li>
                    </ul>
                    {/* <a href="#"><i className="fas fa-eye"></i>Views {{ item.views }}</a> */}
                    <Link to="#"><i className="fas fa-eye"></i>Views 10</Link>
                </div>
            </div>
        </div>
    )
}

export default Page_item;