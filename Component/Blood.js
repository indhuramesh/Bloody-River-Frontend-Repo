import React, {Component} from 'react'
import './Blood.css'
import axios from 'axios';

class Blood extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/showDetails').then(response=>{this.setState({data:response.data});
    })
    .catch(error=>{console.log(error);
    });
    }
    render(){
        return(
        <div className="body2">
            <h1 className="head4">Bloody River</h1><br></br>
            <h1 className="head2">Check for the available blood samples</h1><br></br>
            <div className="center1">
        <table border={6}>
            <thead>
                <tr className="col">
                    <th>Bank Id</th>
                    <th>Bank Name</th>
                    <th>Bank Email</th>
                    <th>Blood Group</th>
                    <th>Availability</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map(user=>(
                    <tr key={user.bankId}>
                        <td>{user.bankId}</td>
                        <td>{user.bankName}</td>
                        <td>{user.bankEmail}</td>
                        <td>{user.bloodGroup}</td>
                        <td>{user.availability}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </div>
        );
        
        
    }
    }

export default Blood;
  
  