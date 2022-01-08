import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {

    const recentItem = (topic) => (
        <div className = "sidebar__recentItem">
            <span className = "sidebar__hash"></span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://cdn.pixabay.com/photo/2017/01/13/18/04/blue-1977898_960_720.jpg" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Robert Anthony</h2>
                <h4>robertanthony@gmail.com</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">4,614</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">4,549</p>
                    
                </div>

                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem("Reactjs")}
                    {recentItem("Programming")}
                    {recentItem("Software Engineering")}
                    {recentItem("Web Developer")}
                    {recentItem("Graphic Design")}
                </div>
            </div>
            
        </div>
    );
}

export default Sidebar;
