import React from "react";

export default function Suggest(props){
    return(
        <>
        <div className="card" style={{width:"100%",margin:"auto", height:"80px"}}>
  <div className="list-group list-group-flush">
    <div className="list-group-item" style={{display:"flex"}}>
        <img src={props.userImage}  style={{width:"20%",margin:"0px",height:"50px",borderRadius:"50%"}}/>
          <div  style={{margin:"0px 10px",width:"60%",display:"block",background:"none"}}>
            <h7 style={{width:"100%",background:"none"}}>{props.name}</h7>
            <p style={{background:"none"}}>{props.username}</p>
          </div>
          <button type="button" className="btn btn-primary" style={{margin:"10px auto",width:"40%",height:"40px"}} >Follow</button>
    </div>

  </div>
</div>

        </>
    );
}