import React, { Component } from "react";
import axios from 'axios';
import MultiSelect from "@kenshooui/react-multi-select";
import "@kenshooui/react-multi-select/dist/style.css";
import Pdf from 'react-to-pdf';
import ReactHtmlParser from 'react-html-parser';
const pdf = require('html-pdf');


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


  render() {

    //console.log(items);
    return (
      <div>

        <div className="container">
          <h3 align="center" className="arial" >Generador d'informes</h3><br />

          <div className="row">
            <div className="col-md-5" align="right">
              <a target="_blank"  ><button onClick={this.sendSelectedItems} className="btn btn-danger arial">Genera informe PDF</button></a>
            </div>
          </div>
        </div>

        <MultiSelect wrapperClassName="arial" items={this.state.items} withGrouping='true' selectedItems={this.state.selectedItems} onChange={this.handleChange}></MultiSelect>


        <Pdf targetRef={ref} filename="report.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf}>Generate pdf</button>
          )}
        </Pdf>
        <div ref={ref} style={{width:'21cm', height:'29.7cm' }} >
          {ReactHtmlParser(this.state.output)}
        </div>
      </div>
    );
  }



}

