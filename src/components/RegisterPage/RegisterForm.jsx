import React, { Component } from 'react';
import axios from 'axios';
var bcrypt = require('bcryptjs');

export default class RegisterForm extends Component {

    constructor(props) {
        super(props);

        this.state =
        {
            success: null,
            message: 'Error durant el registre',

            username: '',
            email: '',
            password: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });

        return true;
    }



    handleSubmit(event) {
        
        event.preventDefault();

        var hash = bcrypt.hashSync(this.state.password, 8);
        axios.get('http://localhost:8000/register', {
                params: {username: this.state.username,
                        password: hash,
                        email: this.state.email} })  // data a passar
        .then(res => {
            console.warn(res.params);
            this.setState({ "success" : true });
        }).catch(e=>{
            this.setState({ "message" : e.response.message });
            this.setState({ "success" : false });
        });


    }

    render() {
        return (
            <div>

                <h1>Registrar nou usuari</h1>
                <p>
                    Omple els següents camps per crear un nou compte
                </p>
                {this.state.success === false &&
                    <p className="alert alert-danger" role="alert">
                        {this.state.message}
                    </p>}
                {this.state.success === true &&
                    <p className="alert alert-success" role="alert">
                        Usuari registrat correctament
             </p>}

                {!this.state.success &&
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label>E-mail: </label>
                            <input type="text" className="form-control" placeholder="example@example.com" name="email" required onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Nom d'usuari: </label>
                            <input type="text" className="form-control" placeholder="Username" name="username" required onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Contrasenya: </label>
                            <input type="password" className="form-control" placeholder="Password" name="password" required onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>}
            </div>
        );
    }
}
