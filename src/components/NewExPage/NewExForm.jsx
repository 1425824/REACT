import React, { Component } from 'react';
import axios from 'axios';
import TipSelect from './TipSelect';

export default class NewExForm extends Component {

    constructor(props) {
        super(props);

        this.state =
        { 
            success: null,
            message: 'Error durant el registre',

            exName: '',
            exDescription: '',
            exEstimatedTime: '',
            exMaterials: '',
            exObservations: '',
            exTipology: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTipology = this.getTipology.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });

        return true;
    }
    getTipology(value){
        this.setState({exTipology: value})
    }


    handleSubmit(event) {
        
        event.preventDefault();

        axios.get('http://localhost:8000/newEx', {
                params: {exName: this.state.exName,
                        exDescription: this.state.exDescription,
                        exEstimatedTime: this.state.exEstimatedTime,
                        exMaterials: this.state.exMaterials,
                        exObservations: this.state.exObservations,
                        exTipology: this.state.exTipology } })  // dades a passar
        .then(res => {
            console.warn(res.data);
            this.setState({ "success" : true });
        }).catch(e=>{
            this.setState({ "message" : e.response.message });
            this.setState({ "success" : false });
        });


    }

    render() {
        return (
            <div>

                <h1>Registrar nou exercici</h1>
                <p>
                    Omple els següents camps per afegir un nou exercici al repositori
                </p>
                {this.state.success === false &&
                    <p className="alert alert-danger" role="alert">
                        {this.state.message}
                    </p>}
                {this.state.success === true &&
                    <p className="alert alert-success" role="alert">
                        Exercici registrat correctament
             </p>}

                {!this.state.success &&
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label>Nom de l'exercici: </label>
                            <input type="text" className="form-control" placeholder="" name="exName" required onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Descripció: </label>
                            <input type="text" className="form-control" placeholder="" name="exDescription" required onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Temps estimat(min): </label>
                            <input type="text" className="form-control" placeholder="" name="exEstimatedTime" required onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Materials: </label>
                            <input type="text" className="form-control" placeholder="" name="exMaterials" required onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Observacions: </label>
                            <input type="text" className="form-control" placeholder="" name="exObservations" required onChange={this.handleChange} />
                        </div>

                        <div className="form-group" >
                            <label>Tipologia: </label>
                            <TipSelect name="exTipology" getTipology={this.getTipology}  />
                        </div>
                        

                        <button type="submit" className="btn btn-primary">Finalitza</button>
                    </form>}
            </div>
        );
    }
}
