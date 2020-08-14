
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


import bird from "./images/bird-1.jpg"
import cattle from "./images/cattle-3.jpg"
import dog from "./images/dog-2.jpg"
import horse from "./images/horse-4.jpg"
import lama from "./images/lama- 6.jpg"
import lemur from "./images/lemur-7.jpg"

class MyFoodReview extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            restaurant: '',
            location: '',
            review: '',
            newUser: ""
        };
    
    }
    
    
    handleSubmit(event) {

        
     }
    
    handleName= (event)=> {
        this.setState({name: event.target.value});
    }
    
    handleRestaurant(event) {
        this.setState({restaurant: event.target.value});
    }
    
    handleLocation(event) {
        this.setState({location: event.target.value});
    }
    
    handleReview(event) {
        this.setState({review: event.target.value});
    }

    render(){

    
   
    return ( <div>
        <div>
            <label>Name</label>
            <input type="text" name="Name" placeholder="Email" value={this.state.name} onChange={this.handleName} />
            <label>Restaurant</label>
            <input type="restaurant" name="restaurant" placeholder="restaurant" value={this.state.restaurant} onChange={this.handleRestaurant} />
            <label>Location: </label>
            <input type="text" name="location" placeholder="location" value={this.state.location} onChange={this.handleLocation} />
            <label>Review </label>
            <input type="text" name="review" placeholder="review" value={this.state.review} onChange={this.handleReview} />
            <input type="submit" value="Add User" onClick={this.handleSubmit} />
        </div>
    
            <h4>Complex Gallery</h4>
       
                <div className="container">

                    <h2>{this.state.name}</h2>
                   
                    <p>Info..{this.state.restaurant}</p>
                    <div> Location...{this.state.location}</div>
                    <div> Review...{this.state.review}</div>
    <div> {this.state.newUser}</div>
            </div>
            </div>
            )
     
    }}
export  default MyFoodReview;