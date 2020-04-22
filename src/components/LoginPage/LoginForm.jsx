import React, { Component } from 'react';
import axios from 'axios';
var bcrypt = require('bcryptjs');

export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state =
        {
            success: null,
            message: '',

            username: '',
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
        axios.get('http://localhost:8000/login', {
                params: {username: this.state.username,
                        password: hash } })  // data a passar
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

                <h2>Login Usuari</h2>
                <p className="form-labels" >
                    Omple els següents camps per accedir al teu compte:
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

                        <p className="form-labels" >
                            <label for="username" className="floatLabel" >Nom d'usuari </label>
                            <input size="50" type="text" className="form-control"  name="username" required onChange={this.handleChange} />
                        </p>

                        <p className="form-labels" >
                            <label for="password" className="floatLabel" >Contrasenya</label>
                            <input size="50" type="password" className="form-control" name="password" required onChange={this.handleChange} />
                        </p>
                        <p className="form-labels" >
                        <button type="submit" className="btn btn-primary">Entrar</button>
                        </p>

                    </form>}
            </div>
        );
    }
}
