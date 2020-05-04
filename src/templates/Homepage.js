import React from 'react';
import "../App.css";
import {
 
    Link
  } from "react-router-dom";

function Home(){
    return(
        <div className="Nav">
            <Link to='/list'> 
                List
            </Link>
        
        </div>
       
    );
}

export default Home;