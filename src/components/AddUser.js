import React, { Component } from 'react';
import UserService from '../services/UserService';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : '',
            location : '',
         }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }

    saveUser(){

        var data = {
            name: this.state.name,
            location: this.state.location
        };

        UserService.insertUser(data)
        .then( res =>{
            this.setState({
                name: res.data.name,
                location: res.data.location,
            });
            console.log(res.data);
        })
        .catch(
            error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            }
        )

    }

    render() { 
        return ( 
            <div>
                <div className="form-group">
                    <label htmlFor="title">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={this.state.name}
                        onChange={this.onChangeName}
                        name="name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        required
                        value={this.state.location}
                        onChange={this.onChangeLocation}
                        name="location"
                    />
                </div>

                <button onClick={this.saveUser} className="btn btn-success">
                    Submit
                </button>
            </div>
         );
    }
}
 
export default AddUser;