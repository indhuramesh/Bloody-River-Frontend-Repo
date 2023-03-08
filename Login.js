import React from 'react'
import './Login.css'


function App() {
  return (
    
    <div className='body'>
      <h1 className="h1">Bloody River</h1>
      <h1 className="head">Login</h1><br></br>
      <div className="card1">
        <form>
          <label for="username">Hospital Id</label><br></br><br></br>
          <input type="text" className="username1" placeholder='Enter hospital id'
           required>
            
          </input><br></br>
          <br></br><br></br>
          <label for="password">Password</label><br></br><br></br>
          <input type="password" className="username1" placeholder='Enter password' 
         required>
            
          </input><br></br><br></br><br></br>
          <div className='center'>
           
          <button className="btn">Login</button>
          </div>
          <span class="psw">Didn't register yet?<a href='http://localhost:3000/Signup'>Register here!!</a></span>
        </form>
      
      </div>
    </div>
    
    
  );
}

export default App;
