import React, {Component} from 'react';
import './header.css';


function handleClick()  {
    alert("Label Clicked")
}

class Header extends Component{
    
    render()    {
        return( 
        <div className="container">
            <div className="title" onClick={handleClick}>
                <label style={{ fontSize: 20, }}>
                    Tool Rental
                </label>
            </div>           
        </div>
    );
};

}

export default Header;
