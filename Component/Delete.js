import React from 'react'
import axios from "axios";
import {useState}from "react";
import './Delete.css'
function Delete() {
    const [search,setSearch]=useState("");
    const [bloodData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/delete/'+search)
            .then( document.getElementById("dels").innerHTML = "Deleted")
            .catch(err=>console.log(err))
        }
    }
  return (
    
    <div className="body">

        
        
           
                <h2 className="head">Deleting the records</h2><br></br>
           <br></br><br></br>
           
            <div className="card6">
                <div className="username2" ><br></br>
                    <label for="delete">Enter the id wanted to be delete</label><br></br><br></br>
                    <input type="text" className="username" placeholder="enter the id"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                   
                    
                </div>
                
                 
            </div>
        </div>
      
        
  )
}

export default Delete