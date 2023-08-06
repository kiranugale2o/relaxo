import React from "react";
//import './singup.css';
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function Singin(){

    return(
        <>

        <div className="container   border border-secondary  " id="singup-form">
          <form className="form" style={{width:"100%"}}>
            <h3 className="text-center" style={{height:"50px",backgroundColor:"white"}}>Sing Up</h3>
           <div className="user-name" style={{display:"flex"
          ,width:"100%",backgroundColor:"white"}}>
            <input type="text" className="form-control" placeholder="First Name" />
            <input type="text" className="form-control"  placeholder="Last Name"/>
           </div>
           <br></br>
           <input type="text" className="form-control" placeholder="Username"/>
           <br></br>
        <input type="email" className="form-control" placeholder="Email address"/>
        <br></br>
           <input type="password" className="form-control" placeholder="Password"/>
<br></br>
           <button type="submit" style={{width:"100%",margin:"auto"}}className="btn btn-primary"  id="btn">Sing UP</button>
        <br></br>
        <br></br>
          <Link to="/login" style={{fontSize:"18px",width:"30%",margin:"auto 40px",backgroundColor:"white"}}  className="text-center" href="#" >Already  Have an account {">"}</Link>  </form>
          

        </div>

             </>
    );
}