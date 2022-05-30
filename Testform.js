import React, { Component } from 'react';

import Button from '@mui/material/Button';


export default class Testform extends Component {
    constructor(props) {
        super(props)
      
        this.state = {         
            input: "",
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        
        handleChange(event) {
            this.setState({
            input: event.target.value
            });
        }

        handleSubmit(event) {
            event.preventDefault();
            this.setState({
                input: this.state.input,
                items: [...this.state.items, this.state.input]
            });
        }
        

  render() {
      
    return (
        <div>
            <h1 className='hello'>Hello World</h1>
            <Button variant="outlined" color="error">
  Error
</Button>



        <form onSubmit={this.handleSubmit}>
            <input value={this.state.input} onChange={this.handleChange}/>                        
            <button type="submit" style={{
                borderRadius: '10px',
                color: "green",
                padding: '10px',
                webkitTransition: '175ms ease-in-out',
                transition: '175ms ease-in-out'
            }}            
            >Submit</button>
        </form>  

        <ul>
        {this.state.items.map((item,index) => (
            <li key={index}>{item}</li>
        ))}

        </ul>
        
        </div>
 
        
    )
    }
}
