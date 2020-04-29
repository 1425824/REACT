import React, { Component } from "react";
import axios from 'axios';
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css";
import Pdf from 'react-to-pdf';
import ReactHtmlParser from 'react-html-parser';


const ref = React.createRef();
export default class MultiSelect1 extends Component {

  constructor(props) {
    super(props);
    //
    this.handleChange = this.handleChange.bind(this);
    this.sendSelectedItems = this.sendSelectedItems.bind(this);
    this.state = {
      items: [],
      selectedItems: [],
      output: ''
    };

  }


  componentDidMount() {
    axios.get('http://localhost:8000/exs')
      .then(res => {
        this.setState({ items: res.data });
      })
  }

  handleChange(selectedItems) {
    this.setState({ selectedItems });
    //console.log(selectedItems);
  }

  sendSelectedItems(topdf) {

    const sItems = { selectedItems: this.state.selectedItems }
    var ids = "";

    for (var i = 0; i < sItems.selectedItems.length; i++) {
      ids = ids.concat(sItems.selectedItems[i].id, "_");
    }
    console.log(ids);

    var path = 'http://localhost:8000/selected';

    axios.get(path, {
      params: { ids }
    })
      .then(res => {
        console.warn(res.params);
        //console.warn(res.data);
        this.setState({ output: res.data });
        //topdf();
      })
      .catch(function (response) {
        console.log(response);
      });

  }
  async generatePDF(pdf){
    await window.scrollTo(0, 0);
    await this.sendSelectedItems();
    setTimeout(() => pdf(), 100);
    //await pdf();
  }


  render() {

    //console.log(items);
    return (
      <div style={{width: window.innerWidth, height: window.innerHeight }} >

        <div style={{width: window.innerWidth, height: window.innerHeight , top:0, overflow:'hidden', position:'absolute' , zIndex:-1}} >
          <div ref={ref} style={{width:'21cm', height:'29.7cm' , position:'absolute', top:'0px', zIndex: -1 }} >
            {ReactHtmlParser(this.state.output)}
          </div>
        </div>

        <div style={{width:window.innerWidth, height:window.innerHeight , position:'absolute', top:'0px', zIndex: -1 , backgroundColor: '#fff' }} > </div>

        <div className="container" style={{backgroundColor: '#fff'}}>
          <h3 align="center" className="arial" >Generador d'informes</h3><br />
        </div>

        <MultiSelect wrapperClassName="arial" items={this.state.items} withGrouping='true' selectedItems={this.state.selectedItems} onChange={this.handleChange}></MultiSelect>

        <Pdf targetRef={ref} filename="report.pdf">
          {({ toPdf }) => (
            <button className="newtest_btn" style={{marginTop:'10px', zIndex:99 }} onClick={() => this.generatePDF(toPdf)} >Genera informe PDF</button>
          )}
        </Pdf>
       
      </div>
    );
  }



}

