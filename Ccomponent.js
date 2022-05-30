import React, { Component } from 'react'

export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {         
         count: 0
      };

      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
    }

    increment(){
        this.setState(state =>({
            count: state.count+1
        }
        ))
    }

    decrement(){
        this.setState(state =>({
            count: state.count-1
        }
        ))
    }


    reset(){
        this.setState(state =>({
            count: 0
        }
        ))
    }

    render() {
       
            return (
                <div>
                    <h1>Текущее значение {this.state.count}</h1>
                    <button onClick={this.increment}>Увеличить</button>
                    <button onClick={this.decrement}>Уменьшить</button>          
                    <button onClick={this.reset}>Сбросить</button>                    
                </div>
              )
        }
    
  }

Ccomponent.defaultProps={name:"Alexey"}