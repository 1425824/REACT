import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';


export default class TipSelect extends Component {

    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

        this.state =
        {
            options: [],
            selectedOption: null,
        };

    }
    componentDidMount() {
        axios.get('https://itennisapi.com/tipologies')
          .then(res => {

            const entries = res.data.map((value) => {
                return {value:value,label:value}
              });
            this.setState({ options: entries });
          })
      }

      handleChange(selectedOption) {

        //console.warn(selectedOption.value);
        this.setState( {selectedOption: selectedOption.value } );
        this.props.getTipology(selectedOption.value);
    }


    render() {
        return( <div>
                    <Select options={this.state.options} onChange={(value)=> this.handleChange(value) }  />
                </div>
        );
    }
}