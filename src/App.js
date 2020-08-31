import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFoodReview from "./components/main"


function App(){

  return (
    <div className="App">
      <MyFoodReview />
    </div>
  );

}

export default App;

/*

function App() {
          state= {
            fields: {}
          }
          

          let submitHandler=(fields)=>{
            this.setState({
              fields
            })
              console.log("app comp")
          }

          return (
            <div className="App">
              <MyFoodReview onSubmit={fields => this.submitHandler(fields)}/>
          <p>{this.state.fields}</p>
            </div>
          );
}
*/
