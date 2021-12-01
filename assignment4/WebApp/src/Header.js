import React, {Component} from 'react';
import { FaSearch } from 'react-icons/fa';
import Expand from 'react-expand-animated'
import './header.css';



function handleClick()  {
    alert("Label Clicked")
}

class Header extends Component{
    
    state = { open: false };

    toggle = () => {
        this.setState(prevState => ({ open: !prevState.open }));
      };

    render()    {
        return( 
            <div className="container">
                <div className="icon-div">
                    <label className="icon" onClick={this.toggle}>
                        <FaSearch/>
                    </label>
                    <form>
                        <input className="input" placeholder="search"></input>
                    </form>
                </div>

                <div className="title" onClick={handleClick}>
                    <label style={{ fontSize: 30, }}>
                        RENTRABBIT
                    </label>
                </div>         
            </div>
        );
    };
}

export default Header;
