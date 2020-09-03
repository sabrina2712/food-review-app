
import React from 'react';



class MyForm extends React.Component {
    constructor() {
      super();
      this.state ={
          data:{
            userId: 1,
            name: "",
            location: "",
            restaurant: "",
            },
          result : []
        }
    }
    
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state.result)

        let data = this.state.data
        this.setState(prevState => ({
            result: [...prevState.result, data]
          }))
       
    }
  
    render() {
      return (<>
        <form onSubmit={this.submitHandler}>
            <input 
            type = "text"
            className="form-control"
            name ="name"
            value={this.state.name}
            onChange={
                this.handleChange
            }
            />
            <input 
            type = "text"
            className="form-control"
            name ="location"
            value={this.state.location}
            onChange={
                this.handleChange
            }
            />
            <input 
            type = "text"
            className="form-control"
            name ="restaurant"
            value={this.state.restaurant}
            onChange={
                this.handleChange
            }
            />
            <button type ="submit" className="btn btn success">Submit</button>
            <div>Name:  {this.state.name}  </div>
            <div>Location: {this.state.location} </div>
            <div>Restaurants: {this.state.restaurant}</div>
            <div>Result:  {this.state.result}  </div>
        </form>
           
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