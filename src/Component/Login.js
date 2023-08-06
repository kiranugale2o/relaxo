import React from "react";
import './singup.css';
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function Login(){

    return(
<>
<div className="container   border border-secondary" id="singup-form">
          <form className="form" style={{width:"100%"}}>
            <h3 className="text-center" style={{height:"50px",backgroundColor:"white"}}>Login</h3>
          
           <br></br>
           
        <input type="email" className="form-control" placeholder="Email address"/>
        <br></br>
           <input type="password" className="form-control" placeholder="Password"/>
<br></br>
           <button type="submit" style={{width:"100%",margin:"auto"}} id="btn" className="btn btn-primary">Login</button>
        <br></br>
       <br></br>
          <Link to="/singup" style={{fontSize:"18px",width:"30%",margin:"auto 40px",backgroundColor:"white"}}  className="text-center"  >Create New Account{">"}</Link>
         <hr></hr>
         <button type="button" style={{width:"100%",margin:"auto"}} id="btn" className="btn btn-primary">Login as Guest</button>
         <br></br>
         <br></br>
          <button type="button" style={{width:"100%",margin:"auto"}} id="btn" className="btn btn-primary">Login as Google</button>
       
          </form>
          
        </div>

</>
    );
}