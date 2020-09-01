
import React from 'react';

class MyForm extends React.Component {
    constructor() {
      super();
      this.state ={
          inputParsers : [],
          data: {
              name: "",
              age :""
          }
        }
    }
  
    onInputchange=(event)=> {
        let data = this.state.data
        this.setState({
          data: event.target.value
        });
    }
    handleSubmit=(event)=> {
        event.preventDefault();
            let data = this.state.data
            console.log(data);
            let inputParsers = this.state.inputParsers
        this.setState({
            data: Object.assign({},{data}), 
            inputParsers: inputParsers.push(data)
        });
    }
  
    render() {
      return (<>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter username</label>
            <input  name="name"
                onChange={(event)=>this.onInputchange(event)}/>
            <label htmlFor="age">Enter your age</label>
            <input name="age" 
                onChange={(event)=>this.onInputchange(event)} />
            <button>Send data!</button>
        </form>
            <div>{this.state.inputParsers}</div>
         </>
        );
    }
  }

  export  default MyForm;

  /*    const {data } = this.state;
       console.log(event)
            this.setState(prevState => {
                let data = Object.assign({}, prevState.data); 
                data.name = 'someothername';    
                data.age = 50;                
                return { data };                            
                })
            console.log( this.state.inputParsers.push(data))
            */