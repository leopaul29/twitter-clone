import React from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <from>
                <div className="tweetBox__input">
                    <Avatar src=""/>
                    <input placeholder="what's happening?"/>
                </div>
                <input
                        className="tweetBox__imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                    />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </from>
        </div>
    )
}

export default TweetBox
