
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
        this.state= {

                name: " ",
                Restaurant: "",
                Location: "",
                Review:"" 
              }
}
  

      changeHandler=(evt)=>{
          let name = this.state.name
          this.setState({
                name:  evt.target.value
          })
      }
  
    render(){

    const {name,Restaurant,Location, Review}= this.state
        return <>
            <label>{name}</label>
            <input className="name"  onChange={(e)=>{this.changeHandler(e) }} />
            <label>{Restaurant}</label>
            <input type ="text" name="restaurant" placeholder="restaurant" 
                        className="restaurant"  onChange={(e)=>{this.changeHandler(e)}}/>
            <label>{Location}</label>
            <input type ="text" name="location" placeholder="location" className="location"/>
            <label>{Review}</label>
            <input type ="text" name="review" placeholder="review" className="review"/>
            <button className="add-container"><span>Add Image</span></button>
        
        <div class="active-cyan-4 mb-4">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </div>

        <div class= "container-fluid">
            <h4>Complex Gallery</h4>
        <div class= "row d-inline-flex">
         
        <div class ="col-12 col-sm-6 col-md-4 p-2">
            <div class="d-flex flex-column text-center border height100">
                <div className="logo"></div>
                    <h2>{this.state.name}</h2>
                    <div>
                        <img src={horse} width={"500px"} height={"400px"}/>
                    </div>
                    <p>Info..about Horse</p>
                    <div> Location...</div>
            </div>
        </div>
          
        <div class ="col-12 col-sm-6 col-md-4 p-2">
            <div class="d-flex flex-column text-center border height100">
                <div className="logo"></div>
                    <h2>Bird</h2>
                    <div>
                        <img src={bird} width={"500px"} height={"400px"}/>
                    </div>
                    <p>Info..about Horse</p>
                    <div> Location...</div>
            </div>
        </div>
       
        <div class ="col-12 col-sm-6 col-md-4 p-2">
            <div class="d-flex flex-column text-center border height100">
                    <h2>cattle</h2>
                    <div>
                        <img src={cattle}  width={"500px"} height={"400px"}/>
                    </div>
                    <p>Info..about Horse</p>
                    <div> Location...</div>
            </div>
        </div>
         
        <div class ="col-12 col-sm-6 col-md-4 p-2">
            <div class="d-flex flex-column text-center border height100">
                <div className="logo"></div>
                    <h2>Lama</h2>
                    <div>
                        <img src={lama}  width={"500px"} height={"400px"}/>
                    </div>
                    <p>Info..about Horse</p>
                    <div> Location...</div>
            </div>
        </div>
           
        <div class ="col-12 col-sm-6 col-md-4 p-2">
            <div class="d-flex flex-column text-center border height100">
                <div className="logo"></div>
                    <h2>Lemur</h2>
                <div>
                    <img src={lemur}  width={"500px"} height={"400px"}/>
                </div>
                <p>Info..about Horse</p>
                <div> Location...</div>
            </div>
        </div>
            <div class ="col-12 col-sm-6 col-md-4 p-2">
                <div class="d-flex flex-column text-center border height100">
                    <div className="logo"><span>Dog</span></div>
                <div>
                    <img src={dog}  width={"500px"} height={"400px"}/>
                </div>
                <p>Info..about Horse</p>
                <div> Location...</div>
               </div>
            </div>
         </div>
      </div>
  
    </>
        
    }
}
export  default MyFoodReview;