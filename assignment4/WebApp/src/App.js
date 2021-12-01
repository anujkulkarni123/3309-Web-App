import React from 'react';
import Header from './Header'
import './App.css';
import Login from './Login'
import Table from './Table/Table';


function App() {

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

export default App;
