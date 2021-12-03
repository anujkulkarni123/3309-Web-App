import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import TableView from './Table/TableView';
import PopUsersTable from './popRenters/popUsersTable';
import Login from './Login';


class App extends Component {
  render()  {
    return (
      <div className="App">
        <Header/>
        
        <div className="app-body">
            <div className="table-View">
              <TableView/>
            </div>
            
            <div className="pop-users-view">
              <PopUsersTable/>
            </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;
