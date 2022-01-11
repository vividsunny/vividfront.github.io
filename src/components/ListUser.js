import React, { Component } from "react";
import UserService from '../services/UserService';

class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users : []
         }
    }
    
    componentDidMount() {
        // GET request using axios with error handling
        UserService.getUsers().then(response => this.setState({ users: response.data }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }
    
    render() { 
        return (
            <div>
                <h2 className="text-center">User List</h2>
               {/*  <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                </div>
                <br></br> */}
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> ID</th>
                                <th> Name</th>
                                <th> Location</th>
                                {/* <th> Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.id} </td>
                                            <td> {user.name}</td>
                                            <td> {user.location}</td>
                                            {/* <td>
                                                <button onClick={() => this.editEmployee(user.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(user.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(user.id)} className="btn btn-info">View </button>
                                            </td> */}
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        );
    }
}
 
export default ListUser;