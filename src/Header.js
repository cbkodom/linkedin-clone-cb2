import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>

            <div className='header_left'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDDwM2zyVv82gvS2NLoa5mAXJ5B9aseFfhow&usqp=CAU" alt=""/>

                <div className="header_search">
                    <SearchIcon />
                    <input type="text"/>
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <headerOption avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title="man" />
                
            </div>
            
        </div>
    )
}

export default Header;
