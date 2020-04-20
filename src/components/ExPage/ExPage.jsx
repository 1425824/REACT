import React, { Component } from 'react';
import Header from '../GeneralComponents/Header';
import Footer from '../GeneralComponents/Footer';
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

export default class ExPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: [],
            descriptions: [],
            materials: [],
            observacions: [],
            duracio: [],
            imgs: ["init"],

            tempTrigger: [],
            tempDes: [],
            tempMats: [],
            tempObs: [],
            tempImgs: [],
            tempDur: [],
        };

        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        axios.get('http://localhost:8000/exs')
            .then(res => {
                this.setState({ trigger: res.data.map((item) => item.label),
                                tempTrigger: res.data.map((item) => item.label)});
                //console.warn(res.data);
            })

        axios.get('http://localhost:8000/exlist')
            .then(res => {

                this.setState({
                    descriptions: res.data.map((item) => item.exDescription),
                    materials: res.data.map((item) => item.exMaterials),
                    observacions: res.data.map((item) => item.exObservations),
                    duracio: res.data.map((item) => item.exEstimatedTime),
                    imgs: res.data.map((item) => item.exImage),

                    tempDes: res.data.map((item) => item.exDescription),
                    tempMats: res.data.map((item) => item.exMaterials),
                    tempObs: res.data.map((item) => item.exObservations),
                    tempDur: res.data.map((item) => item.exEstimatedTime),
                    tempImgs: res.data.map((item) => item.exImage),
                });
            })
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });

        var filteredExs = [];
        var des = [];
        var mat = [];
        var obs = [];
        var dur = [];
        var img = [];

        for (var i = 0; i < this.state.trigger.length; i++) {
            if (this.state.trigger[i].toLowerCase().includes(value.toLowerCase())){
                filteredExs.push(this.state.trigger[i]);
                des.push(this.state.descriptions[i]);
                mat.push(this.state.materials[i]);
                obs.push(this.state.observacions[i]);
                dur.push(this.state.duracio[i]);
                img.push(this.state.imgs[i]);
            }
        
        }
        console.warn(value);
        if( name.length != 0){
            this.setState({ tempTrigger : filteredExs,
                            tempDes : des,
                            tempMats : mat,
                            tempObs : obs,
                            tempImgs : img,
                            tempDur : dur
                        });
        }
            else   
                this.setState({ tempTrigger : this.state.trigger,
                        tempDes : this.state.descriptions,
                        tempMats : this.state.materials,
                        tempObs : this.state.observacions,
                        tempImgs : this.state.imgs,
                        tempDur : this.state.duracio
            });

    }




    render() {
        return (
            <div>
                <Header />
                <div className="search">
                    <input className="searchTerm" type="text" size="100" name="search" placeholder="" onChange={this.handleChange} ></input>
                    <button type="submit" className="searchButton" >
                        <SearchIcon ></SearchIcon>
                    </button>
                </div>

                <div className="lista">
                {this.state.tempTrigger.map((item, index) => {
                    return (
                        <Collapsible trigger={this.state.trigger.length > 0 ? item : ""} className="collap" openedClassName="collap-body">
                            <div className="div1" >
                                <div className="divimg"> 
                                    <img src={this.state.imgs[index]} alt="collap-img" className="collap-img"  /> 
                                </div>

                                <div  className="divcontent">
                                    <p className="collap-content"><b>Duració:</b> {this.state.duracio.length > 0 ? this.state.duracio[index] : ""}min.</p>
                                    <p className="collap-content"><b>Descripció:</b> {this.state.descriptions.length > 0 ? this.state.descriptions[index] : ""}</p>
                                    <p className="collap-content"><b>Material:</b> {this.state.materials.length > 0 ? this.state.materials[index] : ""}</p>
                                    <p className="collap-content"><b>Observacions:</b> {this.state.observacions.length > 0 ? this.state.observacions[index] : ""}</p>
                                </div>
                            </div>
                        </Collapsible>
                    )
                })}
                </div>

                <a className="green-btn">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/exercises/new">Nou Exercici</Link>
                </a>

                <Footer />
            </div>
        );
    }
}
