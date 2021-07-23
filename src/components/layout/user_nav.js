import React from 'react';
import { Link } from "react-router-dom";

import jobs from '../../assets/images/jobs.png';
import trending from '../../assets/images/trending.png';
import idea from '../../assets/images/idea.png';
import clip from '../../assets/images/clip.png';
import troll from '../../assets/images/troll.png';
import funny from '../../assets/images/funny.png';
import inspired from '../../assets/images/inspired.png';
import group from '../../assets/images/group.png';
import pages from '../../assets/images/pages.png';
import coronavirus from '../../assets/images/coronavirus.png';

const User_nav = () => {
    return (
        <div>
 {/* <!--user-data end--> */}
<ul className="sidebar-menu m-hidden">
    <li className="sub_menu_item sub_menu_item_job">
        <Link to="job/dashboard" title="">
            <img src={jobs} alt=""/>
            Jobs
        </Link>
    </li>
    <li className="sub_menu_item sub_menu_item_trending">
        <Link to="/trending" title="">
            <img src={trending} alt=""/>
            Trending
        </Link>
    </li>
    <li className="sub_menu_item sub_menu_item_ideas">
        <Link to="ideas/dashboard" title="">
            <img src={idea} alt=""/>
            Ideas
        </Link>
    </li>
    <li className="sub_menu_item sub_menu_item_clips">
        <Link to="clips/dashboard" title="">
            <img src={clip} alt=""/>
            Clips
        </Link>
    </li>
    <li className="sub_menu_item sub_menu_item_trolls">
        <Link to="trolls/dashboard" title="">
            <img src={troll} alt=""/>
            Trolls
        </Link>
    </li>
    <li className="sub_menu_item sub_menu_item_funny">
        <Link to="funny/dashboard" title="">
            <img src={funny} alt=""/>
            Funny
        </Link>
    </li>
    <li className="sub_menu_item sub_menu_item_inspired">
        <Link to="inspire/ddashboard" title="">
            <img src={inspired} alt=""/>
            Inspired
        </Link>
    </li>
    <li className="sub_menu_item sub_menu_item_group">
        <Link to="group/dashboard" title="">
            <img src={group} alt=""/>
            Groups
        </Link>
    </li>
    <li className="sub_menu_item sub_menu_item_page">
        <Link to="page/dashboard" title="">
            <img src={pages} alt=""/>
            Pages
        </Link>
    </li>
    <li className="sub_menu_item sub_menu_item_virus">
        <Link to="#" title="">
            <img src={coronavirus} alt=""/>
            Covid-19 guide Sytem
        </Link>
    </li>
</ul>
</div>
)
}

export default User_nav;