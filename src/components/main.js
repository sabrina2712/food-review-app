
import React from 'react';

class MyFoodReview extends React.Component{
    constructor(props) {
        super(props);
    
    
    }

    render(){
        return <>
            <div><span>Add</span><span>Create</span><span>A</span></div>
            <div class="active-cyan-4 mb-4">
            <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </div>
            <div className="image-container">
            <div className="image1"></div>
            <div className="image2"></div>
            <div className="image3"></div>
            </div>
         </>
        
    }
}
export  default MyFoodReview;