import React, { Component } from 'react';
import Fcomponent from './Fcomponent';
// import Fncomponent from './Fncomponent';

import "./stylesNew.css";

export default class Ccomponent extends Component {
    constructor(props) {
      super(props);    
      this.state = {         
         name: 'Button not pressed'
      };

      this.updateData = this.updateData.bind(this);

    }

    updateData = (value) => {
        this.setState({
            name: value
        })

    }

    render() {
       
            return (
                <div>
                    <h3>State: {this.state.name}</h3>

                    <Fcomponent updateData={this.updateData}/>
                    {/* <Fncomponent input={this.state.inputValue}/> */}
                </div>
              )
        }
    
  }
