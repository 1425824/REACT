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
            <div className="newEx_form">

                <h1 className="form-labels" >Registrar nou exercici</h1>
                <p className="form-labels" >
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
                        <div className="newEx_form" >

                        
                            <p >Nom de l'exercici: </p>
                            <input type="text" size="100" placeholder="" className="input-forms" name="exName" required onChange={this.handleChange} />
                        

                    
                            <p   >Descripció: </p>
                            <textarea type="text" rows="10" cols="100"  placeholder="" className="input-forms" name="exDescription" required onChange={this.handleChange} />
                        

                        
                            <p  >Temps estimat(min): </p>
                            <input type="text"  placeholder="" className="input-forms" name="exEstimatedTime" required onChange={this.handleChange} />
                        

                      
                            <p >Materials: </p>
                            <textarea type="text" rows="10" cols="100" placeholder="" className="input-forms" name="exMaterials" required onChange={this.handleChange} />
                        

                   
                            <p  >Observacions: </p>
                            <textarea type="text" rows="10" cols="100"  placeholder="" className="input-forms" name="exObservations" required onChange={this.handleChange} />
                       

                            <div style={{width:500}} >
                                <p  >Tipologia: </p>
                                <TipSelect name="exTipology" getTipology={this.getTipology}  />
                            </div>

                        <br></br>
                        </div>

                        <div className="form-labels" >
                        <button type="submit" className="btn btn-primary">Finalitza</button>
                        </div>
                        
                    </form>}
            </div>
        );
    }
}
