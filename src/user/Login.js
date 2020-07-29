import React,{useState} from 'react';
import './Login.css';
import { Link,useHistory} from 'react-router-dom';
import {auth} from '../firebase/Firebase';
const Login = () => {
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    const login_Account=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).
        then((auth)=>{
            history.push('/')
        }).catch(err=>{
            alert(err.message);
        })
    }

    const register_Account=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(auth=>{
            history.push('/')
        }).catch(err=>{
            alert(err.message);
        })
    }
    return (
        <div className="login">
            <Link to="/">
                <img src={require("../images/logo.png")} alt="logo"
                className="login__logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>

                    <button type='submit' onClick={(e)=>login_Account(e)}>Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={(e)=>register_Account(e)} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    );
};

export default Login;