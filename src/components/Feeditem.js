import React , {useState, useEffect} from "react";

const FeedItem = (props)=>{

    const [userName, setUserName] = useState("SmithinWesson");
    const [tweet, setTweet] = useState("Skywatchers are enjoying a once-in-a-lifetime look at a close alignment of Jupiter and Saturn! Today, with Google,we explained what were seeing from Earth and shared some perspectives from around the solar system");


    

    return(
    <div className="view-tweet-box">
        <div className="profile-box">
            <div className="avatar-wrapper-tweet">
	            <img className="profile-pic" src="/goat.jpg" />
            </div>
        </div>
        <div className="view-tweet-main">
            <div className="view-tweet-header">
                <h2 className="view-tweet-header-text">@{userName}</h2>
            </div>
            <div className="view-tweet-body">
                <h2 className="view-tweet-body-text">{tweet}</h2>
            </div>
            
            
        </div>
        <div className="profile-box"></div>
        
    </div>
    )
}

export default FeedItem;