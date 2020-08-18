import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar,
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Leo{" "}
                            <span className="post__headerSpecial ">
                                <VerifiedUserIcon className="post__badge" />{" "}
                                @Leopaul
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to do a twitter clone</p>
                    </div>
                </div>
                <img
                    src="https://media0.giphy.com/media/fqytq2HbHHEbPmNpvz/giphy.gif?cid=ecf05e470c5d3163a371ee3cfd26bec53af23154186e54b0&rid=giphy.gif"
                    alt="gif"
                />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
