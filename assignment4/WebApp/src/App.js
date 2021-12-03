import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import TableView from './Table/TableView';
import Login from './Login';
import PopUsersTable from './popRenters/PopUsersTable';


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
