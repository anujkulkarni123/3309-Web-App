import React from 'react';
import Header from './Header'
import './App.css';

function App() {

      return (
      <div className="App">
        <Header/>

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
                  <input type="text" placeholder="*********" style={{ marginLeft: 20}}></input>

                </div>
                
              </div>
            <button style={{marginTop:122}}>Submit</button>

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
                  <label style={{ fontSize: 14, }}>
                      Enter Your Password: 
                  </label>
                  <input type="text" placeholder="*********" style={{ marginLeft: 20}}></input>

                </div>
                <div class="inputs">
                  <label style={{ fontSize: 14, }}>
                      Enter Your CreditCardNo.: 
                  </label>
                  <input type="text" placeholder="*********" style={{ marginLeft: 20}}></input>

                </div>
                <div class="inputs">
                  <label style={{ fontSize: 14, }}>
                      Enter Your Address: 
                  </label>
                  <input type="text" placeholder="address" style={{ marginLeft: 20}}></input>

                </div>
              </div>
            <button>Submit</button>

            </div>
          
        </div>
        

      </div>
    );
}

export default App;
