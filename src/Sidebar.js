import React, { Component } from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {/* Twitter icon */}
                <TwitterIcon className='sidebar__twitterIcon'/>

                {/* SidebarOption */}
                <SidebarOption active Icon={HomeIcon} text="Home"/>
                <SidebarOption Icon={SearchIcon} text="Explorer"/>
                <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
                <SidebarOption Icon={MailOutlineIcon} text="Message"/>
                <SidebarOption Icon={BookmarkBorderIcon} text="Signet"/>
                <SidebarOption Icon={ListAltIcon} text="List"/>
                <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
                <SidebarOption Icon={MoreHorizIcon} text="Plus"/>

                {/* Button tweet */}
                <Button variant='outline' className='sidebar__tweet' fullWidth>Tweet</Button>
            </div>
        )
    }
}
