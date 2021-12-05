import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import axios from 'axios';



function InsertTools() {

  const [isSaleChecked, setIsSaleChecked] = useState(false);

  const [isRentChecked, setIsRentChecked] = useState(false);

  const handleSaleOnChange = () => {
    setIsSaleChecked(!isSaleChecked);
  };

  const handleRentOnChange = () => {
    setIsRentChecked(!isRentChecked);
  };

    // inserting new tool refs
    let toolnameReg = React.createRef();
    let toolpriceReg = React.createRef();
    let tooltypeReg = React.createRef();

    let navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const insertTool = () => {
        const data = {
            toolname: toolnameReg.value,
            toolprice: toolpriceReg.value,
            tooltype: tooltypeReg.value,
            sale: isSaleChecked,
            rent: isRentChecked
        }

        console.log(data);

        axios.post(`http://localhost:5000/insertTool`, data)
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

          <div className="login">

            <label style={{ fontSize: 40, fontWeight: 700, }}>Insert a New Tool</label>

            <div className="input-box">
              <div className="inputs">
                <label style={{ fontSize: 14, }}>
                  Tool Name:
                </label>
                <input type="text" placeholder="toolname" ref={tn => (toolnameReg = tn)} style={{ marginLeft: 20}}></input>
              </div>

              <div className="inputs">
                <label style={{ fontSize: 14}}>
                    Tool Price:
                </label>
                <input type="text" placeholder="toolprice" ref={tp => (toolpriceReg = tp)} style={{ marginLeft: 25}}></input>
              </div>

              <div className="inputs">
                <label style={{ fontSize: 14}}>
                    Tool Type:
                </label>
                <input type="text" placeholder="tooltype" ref={tt => (tooltypeReg = tt)} style={{ marginLeft: 25}}></input>
              </div>

              <div className="forsale">
                <input
                  type="checkbox"
                  id="forsale"
                  name="forsale"
                  value="ForSale"
                  checked={isSaleChecked}
                  onChange={handleSaleOnChange}
                />
                For Sale
              </div>

              <div className="forrent">
                <input
                  type="checkbox"
                  id="forrent"
                  name="forrent"
                  value="ForRent"
                  checked={isRentChecked}
                  onChange={handleRentOnChange}
                />
                For Rent
              </div>

            </div>

          <button style={{marginTop:50}} onClick={insertTool}>Submit</button>
          </div>
        </div>
    );
}

export default InsertTools;
