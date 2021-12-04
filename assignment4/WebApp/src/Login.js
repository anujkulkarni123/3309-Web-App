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

  let username = React.createRef();
  let password = React.createRef();
  
  let navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');

  const SubmitForm = (e) => {
    e.preventDefault();
  
    axios.get(`http://localhost:5000/login?username=${username.value}&password=${password.value}`)
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
      <div class="login-container">
        

          <form className="login" action="auth" onSubmit={SubmitForm}>
            <label style={{ fontSize: 40, fontWeight: 700, }}>Login As Current User</label>

            <div class="input-box">
              <div class="inputs">
                <label style={{ fontSize: 14, }}>
                  Enter Your Username: 
                </label>
                <input type="text" name="username" ref={usr => (username = usr)} placeholder="username" style={{ marginLeft: 20}}></input>
              </div>

              <div class="inputs">
                <label style={{ fontSize: 14, }}>
                    Enter Your Password: 
                </label>
                <input type="text"  name="password" ref={passwrd => (password = passwrd)} placeholder="*********" style={{ marginLeft: 24}}></input>
              </div>
              
            </div>
          <button style={{marginTop:136}}>Submit</button>
          { errMsg ? <div className="err-msg">{errMsg}</div> : undefined } 
          </form>
          

          <div class="login">

            <label style={{ fontSize: 40, fontWeight: 700, }}>Register As New User</label>

            <div class="input-box">
              <div class="inputs">
                <label style={{ fontSize: 14, }}>
                  Enter Your Username: 
                </label>
                <input type="text" placeholder="username" style={{ marginLeft: 20}}></input>
              </div>
                
              <div class="inputs">
                <label style={{ fontSize: 14}}>
                    Enter Your Password: 
                </label>
                <input type="text" placeholder="*********" style={{ marginLeft: 25}}></input>
              </div>

              <div class="inputs">
                <label style={{ fontSize: 14, marginLeft: 35}}>
                    CreditCardNo.: 
                </label>
                <input type="text" placeholder="creditcardNo." style={{ marginLeft: 27}}></input>
              </div>

              <div class="inputs">
                <label style={{ fontSize: 14, marginLeft: 10 }}>
                    Enter Your Address: 
                </label>
                <input type="text" placeholder="address" style={{ marginLeft: 24}}></input>
              </div>
            </div>

          <button style={{marginTop:50}}>Submit</button>

          </div>          
      </div>
    );
}

export default Login;
