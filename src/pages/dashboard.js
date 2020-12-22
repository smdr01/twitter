import Tweet from '../components/tweet'
import FeedItems from '../components/FeedItems'

const Dashboard = () =>{

    return(
        <div className="dashboard">
            <div className="dashboard-section dashboard-first"></div>
            <div className="dashboard-section dashboard-center">
                <div className="header-box"> 
                    <h2 className="header-text">Home</h2>
                </div>
                <div className="user-box">
                    <Tweet/>
                </div>
                <div className="filler-box"/>
                <FeedItems/>
            </div>
            <div className="dashboard-section dashboard-last"></div>
        </div>
        
    )
}

export default Dashboard;