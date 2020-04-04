import React, { Component } from "react";
import axios from 'axios';
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css";
import PDFBuilder from "./PDFBuilder";
import { PDFDownloadLink } from "@react-pdf/renderer";


export default class MultiSelect1 extends Component {
  constructor(props) {
    super(props);
    //Es buena practica pero no es necesario
    this.handleChange = this.handleChange.bind(this);
    this.sendSelectedItems = this.sendSelectedItems.bind(this);
    this.state = {
      items: [],
      exsToPdf:[],
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

  sendSelectedItems(e){
    e.preventDefault();
    const sItems = { selectedItems : this.state.selectedItems }
    var ids = [];

    for(var i= 0; i < sItems.selectedItems.length; i++){
      ids.push( sItems.selectedItems[i].id);
    }
    console.log(ids);
  
    var path =["http://localhost:8000/selected?choices="];
    var allData=[];
    ids.forEach((item) => {

      axios.get([path,item].join("") ) // id

      .then(res => {
        console.warn(res.data);
        allData.push(res.data[0]);
        this.setState({ exsToPdf: allData});
      })
      .catch(function(response){
        console.log(response);
      })

    });
   //console.log(allData);
   
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


      {true &&<PDFDownloadLink
        document={<PDFBuilder props={this.state.exsToPdf} />}
        fileName="report.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Pdf"
        }
      </PDFDownloadLink>}


    </div>
    );
  }

 

}

