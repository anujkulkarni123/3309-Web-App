import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import Table from './Table/Table';
import TableView from './Table/TableView';


class App extends Component {
  render()  {
    return (
      <div className="App">
        <Header/>
        
        <div className="body">
            <div>
              <TableView/>
            </div>
        </div>
        
      </div>
    );
  }
}

export default App;
