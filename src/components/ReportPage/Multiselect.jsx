import React, { Component } from "react";
import axios from 'axios';
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css";



export default class MultiSelect1 extends Component {
  constructor(props) {
    super(props);
    //
    this.handleChange = this.handleChange.bind(this);
    this.sendSelectedItems = this.sendSelectedItems.bind(this);
    this.state = {
      items: [],
      selectedItems: []
    };

  }


  componentDidMount(){
    axios.get('http://localhost:8000/exs')
      .then(res => {
        this.setState({ items: res.data});
      })
  }

  handleChange(selectedItems) {
    this.setState({ selectedItems });
    //console.log(selectedItems);
  }

  sendSelectedItems(){
   
    const sItems = { selectedItems : this.state.selectedItems }
    var ids = "";

    for(var i= 0; i < sItems.selectedItems.length; i++){
      ids = ids.concat( sItems.selectedItems[i].id, "_" );
    }
    console.log(ids);
  
    var path ='http://localhost:8000/selected';

      axios.get(path, {
        params:  {ids} 
       })
      .then(res => {
        console.warn(res.params);
      })
      .catch(function(response){
        console.log(response);
      });
   
  }

  
  render() {
  
    //console.log(items);
    return (
    <div>

      <div className="container">
        <h3 align="center" className="arial" >Generador d'informes</h3><br />
   
        <div className="row">
          <div className="col-md-5" align="right">
            <a  ><button onClick={this.sendSelectedItems} className="btn btn-danger arial">Genera informe PDF</button></a>
          </div>
        </div>
      </div>

      <MultiSelect wrapperClassName="arial"  items={this.state.items} withGrouping='true' selectedItems={this.state.selectedItems} onChange={this.handleChange}></MultiSelect> 



    </div>
    );
  }

 

}

