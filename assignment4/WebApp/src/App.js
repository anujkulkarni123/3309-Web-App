import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import Login from './Login'
import Table from './Table/Table';


class App extends Component {
  render()  {
    return (
      <div className="App">
        <Header/>
        <div className="body">
          <div className="Test">
            Hello
          </div>
        </div>

        {/*
          <Table />
          */}
      </div>
    );
  }
}

export default App;
