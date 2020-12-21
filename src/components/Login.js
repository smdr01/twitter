import React , {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import { signIn, signOut, useSession } from 'next-auth/client'


const Login = (props) => {
    props=1;
    const {register, handleSubmit} = useForm()
    const [incorrectCredential, setIncorrectCredential] = useState(false);
    const onSubmit = data => console.log(data);
    return(
        <div className="home-component">
            <div className="login-main">
            <h1 className="login-header">Login</h1>
            <div className="login-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2 className="input-header">Username</h2>
                    <input type="text" ref={register} name="username" className="input-box"></input>
                </div>
                <div >
                    <h2 className="input-header">Password</h2>
                    <input type="password" ref={register} name="password" className="input-box"></input>
                </div>
                <div className="login-button-box">
                    <button className="btn-1" type="submit">Login</button>
                </div>
                </form>
                {incorrectCredential && <h2 className="create-user-validation">Incorrect Cred</h2>}

            </div>
            </div>
        </div>
    )


}

export default Login