import Createuser from "./Createuser"
import Login from "./Login";


const Homebody = () => {
    return(
        <div className="home-main">
            <Login/>
            <Createuser/>
        </div>
    )


}

export default Homebody;