

const Createuser = () => {
    return(
        <div className="home-component">
            <div className="login-main">
            <h1 className="login-header">Create an account</h1>
            <div className="create-user-box">
                <form>
                <div>
                    <h2>Name</h2>
                    <input type="text" className="input-box"></input>
                </div>
                <div >
                    <h2>Date of birth</h2>
                    <input type="date" className="input-box"></input>
                </div>
                <div >
                    <h2>Password</h2>
                    <input type="text" className="input-box"></input>
                </div>
                <div >
                    <h2>Confirm Password</h2>
                    <input type="text" className="input-box"></input>
                </div>
                <div className="login-button-box">
                    <button type="submit">Login</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    )


}

export default Createuser