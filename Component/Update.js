import React, {Component} from 'react'
import './Update.css'
import axios from 'axios'

class Update extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      bankId:"",
      bankName:"",
      bankEmail:"",
      bloodGroup:"",
      availability:"",
      password:"",
      
    };
  }
  handleIdChange=(event)=>{
    this.setState({bankId:event.target.value});
  };
  handleNameChange=(event)=>{
    this.setState({bankName:event.target.value});
  };
  handleEmailChange=(event)=>{
    this.setState({bankEmail:event.target.value});
  };
  handleBloodChange=(event)=>{
    this.setState({bloodGroup:event.target.value});
  };
  handleAvailabilityChange=(event)=>{
    this.setState({availability:event.target.value});
  };
  handlePasswordChange=(event)=>{
    this.setState({password:event.target.value});
  };
  

  handleSubmit=(event)=>{event.preventDefault();
  const data={
    bankId:this.state.bankId,
    bankName:this.state.bankName,
    bankEmail:this.state.bankEmail,
    bloodGroup:this.state.bloodGroup,
    availability:this.state.availability,
    password:this.state.password,
  };
  axios.put('http://127.0.0.1:8080/updateDetails',data)
};

render()
{
  return(
    <div className='body1'>
      <h1 className="h1">Bloody River</h1><br></br>
      <h1 className="head">Update the record</h1><br></br>
     
      <div className="card3">
    <form onSubmit={this.handleSubmit}>
      <label for="id">Bank Id</label><br></br>
      <input className="username" type="text" value={this.state.bankId} onChange={this.handleIdChange} required/><br></br><br></br>
      <label for="name">BankName</label><br></br>
      <input className="username" type="text" value={this.state.bankName} onChange={this.handleNameChange} required/><br></br><br></br>
      <label for="email">BankEmail</label><br></br>
      <input className="username" type="email" value={this.state.bankEmail} onChange={this.handleEmailChange} required/><br></br><br></br>
      <label for="blood">BloodGroup</label><br></br>
      <input className="username" type="text" value={this.state.bankGroup} onChange={this.handleBloodChange} required/><br></br><br></br>
      <label for="availability">Availability</label><br></br>
      <input className="username" type="text" value={this.state.availability} onChange={this.handleAvailabilityChange} required/><br></br><br></br>
      <label for="password">Password</label><br></br>
      <input className="username" type="password" value={this.state.password} onChange={this.handlePasswordChange} required/><br></br><br></br>
      <div className="center">
      <button className="btn" >Update</button></div>
      
    </form>
    </div>
    </div>
  );
}

}
export default Update;