import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState([]);
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Leo",
            username: "leo",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://img.icons8.com/officel/16/000000/circled-user-male-skin-type-6.png",
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="what's happening?"
                        type="text"
                    />
                </div>
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
            </form>
        </div>
    );
}

export default TweetBox;
