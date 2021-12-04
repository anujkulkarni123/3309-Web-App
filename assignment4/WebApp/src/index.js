import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Login from './Login';
//import InsertTools from './insertTools/InsertTool';
import TableView from './Table/TableView';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/App" element={<App />}></Route>
        <Route path="/" element={<Login />}></Route>
        {/*<Route path='/InsertTool' element={<InsertTools />}></Route>*/}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

