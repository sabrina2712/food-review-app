
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


import bird from "./images/bird-1.jpg"
import cattle from "./images/cattle-3.jpg"
import dog from "./images/dog-2.jpg"
import horse from "./images/horse-4.jpg"
import lama from "./images/lama- 6.jpg"
import lemur from "./images/lemur-7.jpg"




        let people= []

class MyFoodReview extends React.Component{
          state = {
            people: [],
            person:{
              firstName: '',
              lastName: "",
              restaurant : " ",
              review: ""
          },
            showName: false,
          }
  
     
      
          handleInput(e, element) {

              console.log(element)
              const {person}=   this.state

              person[element]= e.target.value

              console.log(person)
              this.setState({person: person})
          }


          handleSubmit(e) {
            e.preventDefault();
            const {people, person} = this.state
           this.setState({
             people: people.push(person)
           })
          }
         
       
          render() {

           
            const { firstName, lastName, restaurant, review } = this.state.person;
            return (   
              <div>
                <h2>Add Someone</h2>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" value={firstName} onChange={e => this.handleInput(e, 'firstName')} placeholder="firstName" />
                  <input type="text" value={lastName} onChange={e => this.handleInput(e, 'lastName')} placeholder="lastName" />
                  <input type="text" value={restaurant} onChange={e => this.handleInput(e, 'restaurant')} placeholder="restaurant" />
                  <input type="text" value={review} onChange={e => this.handleInput(e, 'review')} placeholder="review" />
                  <button type="submit">Submit</button>
                </form>
                <h2>Exsiting contacts:</h2>
               
              </div>
            ) 
          }
       
          
}
export  default MyFoodReview;

          /*  
          <ul>Name: {people.map((e)=>{
              return <ol>{e}</ol>
          })}</ul>*/

          /*  
          <ul>
          {people.map((contact) => 
           <li>{`firstName: ${contact.firstName} LastName: ${contact.lastName} Restaurant: ${contact.restaurant} Review: ${contact.review}`}</li>
          )}
        </ul>

        */