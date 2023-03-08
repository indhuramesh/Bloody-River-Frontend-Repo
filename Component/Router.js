import "./Router.css";
import Navbar from "./Navbar.js";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from './Home.js'

import Signup from './Signup.js'
import Blood from './Blood.js'
import Update from './Update.js'
import Delete from './Delete.js'

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/Signup" element={< Signup/>} />
            <Route path="/Blood" element={<Blood />} />
            <Route path="/Update" element={<Update/>}/>
            <Route path="/Delete" element={<Delete/>}/>
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;