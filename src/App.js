import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <h2>Let's get this Louisiana Husky Rescue Chat going!</h2>
      <Sidebar />
      <Chat />      
    </div>
  );
}

export default App;
