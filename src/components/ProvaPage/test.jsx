import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';

export default class TestForm extends Component {

    constructor(props) {
        super(props);

        this.state =
        {
            finish: false,
            fase: 0,
            tecnica: new Array(20).fill(0),
            control:new Array(20).fill(0),
            total: new Array(20).fill(0) ,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.finishTest = this.finishTest.bind(this);
    }

    handleChange(event, i ) {
        
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        //console.warn(value);

        var arrayTecnica = this.state.tecnica;
        arrayTecnica[i]= parseInt(value);
        this.setState({ tecnica: arrayTecnica });

        var arrayTotal2 = this.state.total;
        arrayTotal2[i] = this.suma(this.state.tecnica[i], this.state.control[i]);
        this.setState({total: arrayTotal2 })

        console.warn("tecnica:", this.state.tecnica);
        //console.warn("total:" , this.state.total);
        return true;
    }

    handleSelect(event, i) {
        //console.warn(event);
        var arrayControl = this.state.control;
        arrayControl[i] = event.value;

        this.setState({ control: arrayControl });

        var arrayTotal1 = this.state.total;
        arrayTotal1[i] = this.suma(this.state.tecnica[i], this.state.control[i]);
        this.setState({total: arrayTotal1 })


        console.warn("control:", this.state.control);
        return true;
    }

    handleNext(){
        this.setState({fase: this.state.fase+1});
    }
    handleBack(){
        this.setState({fase: this.state.fase-1});
    }

    finishTest(){
        this.setState({finish: true});
    }

    suma(a,b){

        return a+b;
    }


    render() {
        return (
            <div>

                <h2>Prova de nivell 1 (FET)</h2>
                <p className="test_exp">
                    La prova consisteix en executar un seguit de cops dirigits a diferents zones de la pista. A excepció del servei, la pilota la posarà en joc l'examinador / tècnic. 
                    Es realitzaran 4 repeticions de cada cop. Cada encert afegirà 1pt a la nota tècnica (1-10) basada en la apreciació del tècnic.
                </p>


                { this.state.fase === 0 &&
                <Table responsive  className="test_table" >
                    <thead>
                        <tr>
                            <th colspan="3">Moviment</th>
                            <th>Tècnica</th>
                            <th>Control</th>
                            <th>Sub-Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="4" className="moviment1" >SERVEI    </td>
                                <td rowspan="2" className="moviment2" >Esquerre   </td>
                                    <td>1er servei</td>
                                    <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 0)}  /></td>
                                    <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[0] < 0 ? "nº encerts":this.state.control[0] } onChange={ (e)=>this.handleSelect(e, 0) }  /> </td>
                                    <td>{this.state.total[0] }</td>
                        </tr>
                                <tr>
                                    <td>2on servei</td>
                                    <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 1)}  /></td>
                                    <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[1] < 0 ? "nº encerts":this.state.control[1] } onChange={ (e)=>this.handleSelect(e, 1) }   /> </td>
                                    <td>{this.state.total[1] }</td>
                                </tr>
                                <tr>
                                    <td rowspan="2" className="moviment2" >Dreta   </td>
                                        <td>1er servei</td>
                                        <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 2)}  /></td>
                                        <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[2] < 0 ? "nº encerts":this.state.control[2] } onChange={ (e)=>this.handleSelect(e, 2) }  /> </td>
                                        <td>{this.state.total[2] } </td>
                                </tr>
                                    <tr>
                                        <td>2on servei</td>
                                        <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 3)}  /></td>
                                        <td><Dropdown options={[0,1,2,3,4]}  placeholder={this.state.control[3] < 0 ? "nº encerts":this.state.control[3] } onChange={ (e)=>this.handleSelect(e, 3) } /> </td>
                                        <td> {this.state.total[3] } </td>
                                    </tr>

                                    <br/>
                                    <tr>
                            <td rowspan="4" className="moviment1" >DRETA   </td>
                                <td rowspan="2" className="moviment2" >Creuada   </td>
                                    <td>Llarga</td>
                                    <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 4)} /></td>
                                    <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[4] < 0 ? "nº encerts":this.state.control[4] } onChange={ (e)=>this.handleSelect(e, 4) }  /> </td>
                                    <td>{this.state.total[4] }</td>
                        </tr>
                                <tr>
                                    <td>Curta</td>
                                    <td><input size="2" type="number"  required onChange= {(e) => this.handleChange(e, 5)}  /></td>
                                    <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[5] < 0 ? "nº encerts":this.state.control[5] } onChange={ (e)=>this.handleSelect(e, 5) }   /> </td>
                                    <td>{this.state.total[5] }</td>
                                </tr>
                                <tr>
                                    <td rowspan="2" className="moviment2" >Paral·lela   </td>
                                        <td>Llarga</td>
                                        <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 6)}  /></td>
                                        <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[6] < 0 ? "nº encerts":this.state.control[6] } onChange={ (e)=>this.handleSelect(e, 6) }  /> </td>
                                        <td>{this.state.total[6] } </td>
                                </tr>
                                    <tr>
                                        <td>Curta</td>
                                        <td><input size="2" type="number"  required onChange= {(e) => this.handleChange(e, 7)}  /></td>
                                        <td><Dropdown options={[0,1,2,3,4]}  placeholder={this.state.control[7] < 0 ? "nº encerts":this.state.control[7] } onChange={ (e)=>this.handleSelect(e, 7) } /> </td>
                                        <td> {this.state.total[7] } </td>
                                    </tr>
                            </tbody> 
                        </Table>
                        }

                { this.state.fase === 1 &&
                <Table responsive className="test_table" >
                    <thead>
                        <tr>
                            <th colspan="3">Moviment</th>
                            <th>Tècnica</th>
                            <th>Control</th>
                            <th>Sub-Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="4" className="moviment1" >REVÉS    </td>
                                <td rowspan="2" className="moviment2" >Creuat  </td>
                                    <td>LLarg</td>
                                    <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 8)}  /></td>
                                    <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[8] < 0 ? "nº encerts":this.state.control[8] } onChange={ (e)=>this.handleSelect(e, 8) }  /> </td>
                                    <td>{this.state.total[8] }</td>
                        </tr>
                                <tr>
                                    <td>Curt</td>
                                    <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 9)}  /></td>
                                    <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[9] < 0 ? "nº encerts":this.state.control[9] } onChange={ (e)=>this.handleSelect(e, 9) }   /> </td>
                                    <td>{this.state.total[9] }</td>
                                </tr>
                                <tr>
                                    <td rowspan="2" className="moviment2" >Paral·lel   </td>
                                        <td>Llarg</td>
                                        <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 10)}  /></td>
                                        <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[10] < 0 ? "nº encerts":this.state.control[10] } onChange={ (e)=>this.handleSelect(e, 10) }  /> </td>
                                        <td>{this.state.total[10] } </td>
                                </tr>
                                    <tr>
                                        <td>Curt</td>
                                        <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 11)}  /></td>
                                        <td><Dropdown options={[0,1,2,3,4]}  placeholder={this.state.control[11] < 0 ? "nº encerts":this.state.control[11] } onChange={ (e)=>this.handleSelect(e, 11) } /> </td>
                                        <td> {this.state.total[11] } </td>
                                    </tr>

                                    <br/>
                                    <tr>
                            <td rowspan="4" className="moviment1" >VOLEES  </td>
                                <td rowspan="2" className="moviment2" >Dreta   </td>
                                    <td>Llarga</td>
                                    <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 12)} /></td>
                                    <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[12] < 0 ? "nº encerts":this.state.control[12] } onChange={ (e)=>this.handleSelect(e, 12) }  /> </td>
                                    <td>{this.state.total[12] }</td>
                        </tr>
                                <tr>
                                    <td>Curta</td>
                                    <td><input size="2" type="number"  required onChange= {(e) => this.handleChange(e, 13)}  /></td>
                                    <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[13] < 0 ? "nº encerts":this.state.control[13] } onChange={ (e)=>this.handleSelect(e, 13) }   /> </td>
                                    <td>{this.state.total[13] }</td>
                                </tr>
                                <tr>
                                    <td rowspan="2" className="moviment2" >Revés   </td>
                                        <td>Llarga</td>
                                        <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 14)}  /></td>
                                        <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[14] < 0 ? "nº encerts":this.state.control[14] } onChange={ (e)=>this.handleSelect(e, 14) }  /> </td>
                                        <td>{this.state.total[14] } </td>
                                </tr>
                                    <tr>
                                        <td>Curta</td>
                                        <td><input size="2" type="number"  required onChange= {(e) => this.handleChange(e, 15)}  /></td>
                                        <td><Dropdown options={[0,1,2,3,4]}  placeholder={this.state.control[7] < 0 ? "nº encerts":this.state.control[15] } onChange={ (e)=>this.handleSelect(e, 15) } /> </td>
                                        <td> {this.state.total[15] } </td>
                                    </tr>
                            </tbody> 
                        </Table>
                        }

                { this.state.fase === 2 &&
                <Table responsive className="test_table" >
                    <thead>
                        <tr>
                            <th colspan="3">Moviment</th>
                            <th>Tècnica</th>
                            <th>Control</th>
                            <th>Sub-Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="4" className="moviment1" >ESMAIXADA   </td>
                                <td rowspan="2" className="moviment2" >Amb bot  </td>
                                    <td>LLarga</td>
                                    <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 16)}  /></td>
                                    <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[16] < 0 ? "nº encerts":this.state.control[16] } onChange={ (e)=>this.handleSelect(e, 16) }  /> </td>
                                    <td>{this.state.total[16] }</td>
                        </tr>
                                <tr>
                                    <td>Curta</td>
                                    <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 17)}  /></td>
                                    <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[17] < 0 ? "nº encerts":this.state.control[17] } onChange={ (e)=>this.handleSelect(e, 17) }   /> </td>
                                    <td>{this.state.total[17] }</td>
                                </tr>
                                <tr>
                                    <td rowspan="2" className="moviment2">Sense bot   </td>
                                        <td>Llarga</td>
                                        <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 18)}  /></td>
                                        <td><Dropdown options={[0,1,2,3,4]} placeholder={this.state.control[18] < 0 ? "nº encerts":this.state.control[18] } onChange={ (e)=>this.handleSelect(e, 18) }  /> </td>
                                        <td>{this.state.total[18] } </td>
                                </tr>
                                    <tr>
                                        <td>Curta</td>
                                        <td><input size="2" type="number" required onChange= {(e) => this.handleChange(e, 19)}  /></td>
                                        <td><Dropdown options={[0,1,2,3,4]}  placeholder={this.state.control[19] < 0 ? "nº encerts":this.state.control[19] } onChange={ (e)=>this.handleSelect(e, 19) } /> </td>
                                        <td> {this.state.total[19] } </td>
                                    </tr>
                                   
                            </tbody> 
                        </Table>
                        }           


                        <div className="msg_div">
                        { this.state.total < 0 ? 0:this.state.total &&
                        <p><strong >Total: {this.state.total.reduce(function(a,b) {return a+b;}) } /240 </strong> </p>
                        }

                        {this.state.finish === true && this.state.total.reduce(function(a,b) {return a+b;}) >= 120 &&
                        <p className="succes_msg" ><strong>ENHORABONA!</strong> Prova de nivell superada.</p>
                        }

                        {this.state.finish === true && this.state.total.reduce(function(a,b) {return a+b;}) < 120 &&
                        <p className="fail_msg" > Prova de nivell <strong>NO</strong> superada. Treballa els cops febles i torna-ho a intentar. </p>
                        }
                        </div>

                        { this.state.fase === 0 &&
                        <MobileStepper className="stepper" variant="dots" steps={3} position="relative" activeStep={this.state.fase} nextButton={<Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === 2 } >Següent</Button>} 
                                                                     backButton={<Button disabled={this.state.fase == 0 } size="small" onClick={this.handleBack} >Anterior</Button>}/>
                        }
                        { this.state.fase === 1 &&
                        <MobileStepper className="stepper" variant="dots" steps={3} position="relative" activeStep={this.state.fase}  nextButton={<Button size="small" onClick={this.handleNext}  >Següent</Button>} 
                                                                     backButton={<Button size="small" onClick={this.handleBack} >Anterior</Button>}/>
                        }
                        { this.state.fase === 2 &&
                        <MobileStepper className="stepper" variant="dots" steps={3} position="relative" activeStep={this.state.fase}  nextButton={<Button size="small" onClick={this.finishTest} >Finalitza</Button>} 
                                                                     backButton={<Button  size="small" onClick={this.handleBack} >Anterior</Button>}/>
                        }


               
            </div>
        );
    }
}
