import React, { useState } from 'react';
import './Login.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import axios from 'axios';



function Login() {

    // login refs
    let username = React.createRef();
    let password = React.createRef();

    // register refs
    let usernameReg = React.createRef();
    let passwordReg = React.createRef();
    let cardNoReg = React.createRef();
    let addressReg = React.createRef();

    let navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const SubmitForm = (e) => {
        e.preventDefault();

      const data = {
        username: username.value,
        password: password.value
      }

        axios.post(`http://localhost:5000/login`, data)
          .then(({ data }) => {
            if (data.success) {
              console.log('redirecting...');
              setErrMsg('');
              navigate('/App');
            } else {
              setErrMsg(data.message);
            }
          })
      .catch((err) => { throw err })
    }

    const registerUser = () => {
        const data = {
            username: usernameReg.value,
            password: passwordReg.value,
            cardNo: cardNoReg.value,
            address: addressReg.value
        }

        console.log(data);

        axios.post(`http://localhost:5000/register`, data)
          .then(({ data }) => {
            console.log(data);
            if (data.success) {
              console.log('redirecting...');
              setErrMsg('');
              navigate('/App');
            } else {
              setErrMsg(data.message);
            }
          })
          .catch((err) => { throw err })
    }

    return (
        <div className="login-container">
          <form className="login" action="auth" onSubmit={SubmitForm}>
            <label style={{ fontSize: 40, fontWeight: 700, }}>Login As Current User</label>

            <div className="input-box">
              <div className="inputs">
                <label style={{ fontSize: 14, }}>
                  Enter Your Username:
                </label>
                <input type="text" name="username" ref={usr => (username = usr)} placeholder="username" style={{ marginLeft: 20}}></input>
              </div>

              <div className="inputs">
                <label style={{ fontSize: 14, }}>
                    Enter Your Password:
                </label>
                <input type="text"  name="password" ref={passwrd => (password = passwrd)} placeholder="*********" style={{ marginLeft: 24}}></input>
              </div>

            </div>
          <button style={{marginTop:136}}>Submit</button>
          { errMsg ? <div className="err-msg">{errMsg}</div> : undefined }
          </form>


          <div className="login">

            <label style={{ fontSize: 40, fontWeight: 700, }}>Register As New User</label>

            <div className="input-box">
              <div className="inputs">
                <label style={{ fontSize: 14, }}>
                  Enter Your Username:
                </label>
        <input type="text" placeholder="username" ref={usr => (usernameReg = usr)} style={{ marginLeft: 20}}></input>
              </div>

              <div className="inputs">
                <label style={{ fontSize: 14}}>
                    Enter Your Password:
                </label>
        <input type="text" placeholder="*********" ref={pwd => (passwordReg = pwd)} style={{ marginLeft: 25}}></input>
              </div>

              <div className="inputs">
                <label style={{ fontSize: 14, marginLeft: 35}}>
                    CreditCardNo.:
                </label>
        <input type="text" placeholder="creditcardNo." ref={no => cardNoReg = no} style={{ marginLeft: 27}}></input>
              </div>

              <div className="inputs">
                <label style={{ fontSize: 14, marginLeft: 10 }}>
                    Enter Your Address:
                </label>
        <input type="text" placeholder="address" ref={addr => addressReg = addr} style={{ marginLeft: 24}}></input>
              </div>
            </div>

          <button style={{marginTop:50}} onClick={registerUser}>Submit</button>
          </div>
        </div>
    );
}

export default Login;
