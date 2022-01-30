import React, { useState, useEffect } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [username, setUsername] = useState("");
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    useEffect(() => {
        let username = prompt("Please enter your name");
        console.log(username);
        if (username == "") username = "Unknown";
        setUsername(username);
      }, []);

    const sendTweet = (e) => {
        e.preventDefault();

        if(tweetMessage === "") return;

        var today = new Date();

        db.collection("posts").add({
            displayName: username,
            username: username,
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://eu.ui-avatars.com/api/?name="+username+"&background=50b7f5&color=fff",
            date: today
        });
        
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <div className="tweetBox__avatar">
                <Avatar src="" />
            </div>
            <form className="tweetBox__form">
                <div className="tweetBox__input">
                    <textarea
                        className="tweetBox__textarea"
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                    />
                </div>
                <div className="tweetBox__bottom">
                    <input
                        value={tweetImage}
                        onChange={(e) => setTweetImage(e.target.value)}
                        className="tweetBox__imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                        />
                    <Button onClick={sendTweet} className="tweetBox__tweetButton">
                        Tweet
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default TweetBox;
