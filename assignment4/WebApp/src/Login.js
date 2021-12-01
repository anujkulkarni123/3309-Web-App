import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render()  {
    return (
      <div class="login-container">
        
          <div class="login">

            <label style={{ fontSize: 40, fontWeight: 700, }}>Login As Current User</label>

            <div class="input-box">
              <div class="inputs">
                <label style={{ fontSize: 14, }}>
                  Enter Your Username: 
                </label>
                <input type="text" placeholder="username" style={{ marginLeft: 20}}></input>
              </div>

              <div class="inputs">
                <label style={{ fontSize: 14, }}>
                    Enter Your Password: 
                </label>
                <input type="text" placeholder="*********" style={{ marginLeft: 24}}></input>
              </div>
              
            </div>
          <button style={{marginTop:136}}>Submit</button>

          </div>

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
}

export default Login;
