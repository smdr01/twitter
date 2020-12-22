import {useForm} from "react-hook-form";
const Tweet = () => {
    const {register, handleSubmit} = useForm()
    const submitTweet = (event) =>{

        console.log(event)
    } 
    return(
        <div className="tweet-box">
            <div className="tweet-main">
                <div className="tweet-header">
                </div>
                <div className="tweet-body">
                   <form className="tweet-form" onSubmit={handleSubmit(submitTweet)}>
                       <input ref={register} className="tweet-input form__field" type="text"
                       placeholder="What's happening" maxLength="230" name="tweet" autoComplete="off" required 
                       />
                       <button className="btn-tweet" type="submit">Tweet</button>
                   </form>
                </div>
                
                
            </div>

        </div>
    )
}
export default Tweet;