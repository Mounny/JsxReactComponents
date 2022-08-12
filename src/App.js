import React from 'react';
import './App.css';
import Profile from './Profile/Profile';


function App() {
  return (
    <div className="App">
     <Profile bio="The best Web developer!" profession="Fullstack Javascript">
      <img src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' alt='profilePic' />
     </Profile>
    </div>
  );
}

export default App;
