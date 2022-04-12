import {useState} from 'react';
import './App.css';
import Post from './components/Post/Post';
import Dashboard from './containers/dashboard/Dashboard';
import Posts from './containers/Posts/Posts';

function App() {




  return (
    <div className="App">
        <h1> Welcome WAA </h1>
        <Dashboard />
      
    </div>
  );
}

export default App;
