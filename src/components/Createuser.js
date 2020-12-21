import React , {useState, useEffect} from "react";
import {useForm} from "react-hook-form";

const Createuser = () => {
    const [noMatchPassword, setNoMatchPassword] = useState(false);
    const [userExits, setUserExits] = useState();
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
        if(data.passowrd !== data.confirmPassword){
            setNoMatchPassword(true);
        }
        else{
            setNoMatchPassword(false);
        }
        
    }

    return(
        <div className="home-component">
            <div className="login-main">
            <h1 className="login-header">Create an account</h1>
            <div className="create-user-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2>Username</h2>
                    <input type="text" ref={register} name="username" className="input-box"></input>
                </div>
                <div >
                    <h2>Email</h2>
                    <input type="email" ref={register} name="email" className="input-box"></input>
                </div>
                <div >
                    <h2>Password</h2>
                    <input type="password" ref={register} name="password" className="input-box"></input>
                </div>
                <div >
                    <h2>Confirm Password</h2>
                    <input type="password" ref={register} name="confirmPassword" className="input-box"></input>
                </div>
                <div className="login-button-box">
                    <button className="btn-1" type="submit">Create User</button>
                </div>
                </form>
                {noMatchPassword && <h2 className="create-user-validation">Passwords do not match</h2>}
                {userExits && <h2 className="create-user-validation">username already exists</h2>}
            </div>
            </div>
        </div>
    )


}

export default Createuser