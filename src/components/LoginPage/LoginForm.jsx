import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
var crypto = require('crypto');

export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state =
        {
            success: null,
            message: "Nom d'usuari o contrasenya incorrectes" ,

            username: '',
            password: '',
            redirect: false,

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
        var hash = crypto.createHash('sha256').update(this.state.password).digest('hex');

        axios.get('http://localhost:8000/login', {
                params: {username: this.state.username,
                        password: hash } })  // data a passar
        .then(res => {
            console.warn(res.data); 
            if(res.data === 1){
                //redireccion a (/)
                this.setState({ redirect: true });
            }
            else 
                //console.warn(this.state.success);
                this.setState({ success: false }); 
                //console.warn(res.data); 
        }).catch(e=>{

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

                    <p className="fail_msg" > {this.state.message} </p>
                }

                {this.state.redirect &&
                <Redirect to="/dashboard" ></Redirect>
                }

                {!this.state.success &&
                    <form onSubmit={this.handleSubmit}>

                        <p className="form-labels" >
                            <label for="username" className="floatLabel" >Nom d'usuari </label>
                            <input size="50" type="text" className="form-control input-forms"  name="username" required onChange={this.handleChange} />
                        </p>

                        <p className="form-labels" >
                            <label for="password" className="floatLabel" >Contrasenya</label>
                            <input size="50" type="password" className="form-control input-forms" name="password" required onChange={this.handleChange} />
                        </p>
                        <p className="form-labels" >
                        <button type="submit" className="btn btn-primary">Entrar</button>
                        </p>

                    </form>}
            </div>
        );
    }
}
