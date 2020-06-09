import React, { Component } from 'react';
import Header from '../GeneralComponents/Header';
import Footer from '../GeneralComponents/Footer';
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import Dropdown from 'react-dropdown';

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
            tipos:[],
            selected:'',
            tempTrigger: [],
            tempDes: [],
            tempMats: [],
            tempObs: [],
            tempImgs: [],
            tempDur: [],
            tipologies:[],
        };

        this.handleChange = this.handleChange.bind(this);
        this.selectip = this.selectip.bind();
    }


    componentDidMount() {
        var apiTime = new Date();

        axios.get('https://itennisapi.com/exs')
            .then(res => {
                this.setState({ trigger: res.data.map((item) => item.label),
                                tempTrigger: res.data.map((item) => item.label),
                                tipos: res.data.map((item) => item.group)});
                //console.warn(res.data);
            })

        axios.get('https://itennisapi.com/tipologies')
        .then(res => {
            var list = res.data.map((item) => item);
            //console.warn(list);
            
            this.setState({ tipologies: ['Totes'].concat(list) });
        })

        axios.get('https://itennisapi.com/exlist')
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

            //console.warn( Math.abs(apiTime - new Date()) )
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

    selectip = (event) => {
        var filteredExs = [],des = [], mat = [], obs = [], dur = [], img = [];
        if (event.value == 'Totes'){
            
                filteredExs =  this.state.trigger;
                des = this.state.descriptions;
                mat = this.state.materials;
                obs = this.state.observacions;
                img = this.state.imgs;
                dur = this.state.duracio;
            
        }
        //console.warn(event)
        for (var i = 0; i < this.state.trigger.length; i++) {
            if (event.value == this.state.tipos[i]){
                filteredExs.push(this.state.trigger[i]);
                des.push(this.state.descriptions[i]);
                mat.push(this.state.materials[i]);
                obs.push(this.state.observacions[i]);
                dur.push(this.state.duracio[i]);
                img.push(this.state.imgs[i]);
            }
        
        }
        this.setState({ selected: event.value,
            tempTrigger : filteredExs,
            tempDes : des,
            tempMats : mat,
            tempObs : obs,
            tempImgs : img,
            tempDur : dur
        });
    }


    render() {
        const defaultOption = this.state.selected;
        return (
            <div>
                <Header />
                <div className="search" style={{flexDirection:'row'}} >
                    <input className="searchTerm" type="text" size="100" name="search" placeholder="" onChange={this.handleChange} ></input>
                    <button type="submit" className="searchButton" >
                        <SearchIcon ></SearchIcon>
                    </button>
                    
                </div>
                <div style={{flexDirection:'row', display:'flex', marginLeft:'5%' }}>
                    <p>Tipologia: </p> 
                    <Dropdown  style={{marginLeft: '5%', top: '-5%' }} className="tipDrop" 
                    options={this.state.tipologies}
                    onChange={this.selectip}
                    value={defaultOption}
                    placeholder="Selecciona tipologia.."
                    > </Dropdown>
                </div>
                {this.state.tempTrigger.length === 0 &&
                <div style={{height:'400px'}}>
                    <p style={{marginLeft:'10%', top: '10%', color: 'lightgrey'}} >No hi ha exercicis registrats per aquesta tipologia.</p>
                </div>

                }

                <div className="lista">
                {this.state.tempTrigger.map((item, index) => {
                    return (
                        <Collapsible trigger={this.state.trigger.length > 0 ? item : ""} className="collap" openedClassName="collap-body">
                            <div className="div1" >
                                <div className="divimg"> 
                                    <img src={this.state.tempImgs[index]} alt="collap-img" className="collap-img"  /> 
                                </div>

                                <div  className="divcontent">
                                    <p className="collap-content"><b>Duració:</b> {this.state.duracio.length > 0 ? this.state.tempDur[index] : ""}min.</p>
                                    <p className="collap-content"><b>Descripció:</b> {this.state.descriptions.length > 0 ? this.state.tempDes[index] : ""}</p>
                                    <p className="collap-content"><b>Material:</b> {this.state.materials.length > 0 ? this.state.tempMats[index] : ""}</p>
                                    <p className="collap-content"><b>Observacions:</b> {this.state.observacions.length > 0 ? this.state.tempObs[index] : ""}</p>
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
