import React from "react";
import './home.css';
import Singin from "./Singin";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Home(){

   
    return(
       
            <>

 <div className="container " id="box" >
    <div className="image-part">
        <img src="logo.png" className="social-image" alt="image" />
      
    </div>
    <div className="join-part  ">
        <div className="title">
            <h1>Relaxo</h1>
        </div>
        <p className=" text-center" id="slogan"  >GREAT THINKING <br/> ARE COMING !</p>
      <br></br>
     <Link to="/singup"><button class="btn btn-primary" id="btn" type="button" >Join Now</button>
      
      </Link>
      
<div className="login-part" >
    <p className="text-center" id="login-text" >Already have an account ?</p>
<Link to="/login" >Log In</Link>
</div>
    </div>
 </div>
 

</>

    );
}
