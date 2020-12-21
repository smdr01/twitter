const Tweet = () => {

    return(
        <div className="tweet-box">
            <div className="profile-box">
                <img src="profile.svg"></img>
            </div>
            <div className="tweet-main">
                <div className="tweet-header">
                    TWEET SOMETHING
                </div>
                <form>
                <div className="tweet-body">
                    
                        <input type="text"></input>
                   
                </div>
                <div className="tweet-footer">
                    HELPME
                </div>
                </form>
                
                
            </div>

        </div>
    )
}
export default Tweet;