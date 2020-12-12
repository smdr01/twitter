

const Login = () => {
    return(
        <div className="home-component">
            <div className="login-main">
            <h1 className="login-header">Login</h1>
            <div className="login-box">
                <form>
                <div>
                    <h2 className="input-header">Username</h2>
                    <input type="text" className="input-box"></input>
                </div>
                <div >
                    <h2 className="input-header">Password</h2>
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

export default Login