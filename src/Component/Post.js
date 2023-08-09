import React,{useState} from 'react';
import Data from './Data';
import './post.css';
import Navbar from './Navbar';
import Postpages from './Postpages';
import Suggest from '../Home/Suggest';
import { Link,Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';

export default function Post(props){

     const [homeColor,sethomeColor]=useState("skyblue");
     const [mypage,setPage]=useState(1);
     const [exploreColor,setExploreColor]=useState("");
     const [bookColor,setbookColor]=useState("");
     const [profileColor,setprofileColor]=useState("");
    
   const posts=[
      {
         name:"Mark Musker",
         userImage:"mark.jpg",
         username:"@Mark__M#o",
         post:" this is My Programming Setup >>",
         imageUrl:" marksetup.jpeg",
         height:"300",
         like:125,
         comment:56,
      }
      ,
      {
         name:"Kiran Ugale",
         userImage:"avtar.jpg",
         username:"@kiranugale2o",
         post:" “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
         imageUrl:" avtar.jpg",
         height:"0",
         like:25,
         comment:16,

      },
      {
         name:"Riya Singh",
         userImage:"riya.jpg",
         username:"@riya__So",
         post:" this is My favourite Progarmmer !",
         imageUrl:'fevprogrammer.jpg',
         height:"300",
         like:250,
         comment:116,
      },
    
      ,{
         name:"Roy JK",
         userImage:"roy.jpg",
         username:"@Roy_JK00o",
         post:"“I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.”",
         imageUrl:"",
         height:"0",
         like:45,
         comment:16,
      },
      {
         name:"Jonh Zucker",
         userImage:"jonh.jpg",
         username:"@Jonh_Zuck2o",
         post:"My  Best one Image !",
         imageUrl:"jonh.jpg",
         height:"300",
         like:95,
         comment:66,
      }
      ,
      {
         name:"Jolly hemp",
         userImage:"jolly.jpg",
         username:"@Jolly_Hemp22o",
      post:" Like Me !",
         imageUrl:"jolly.jpg",
         height:"300",
         like:1082,
         comment:346,
      }
   
   ];

   let post=null;
   post=posts.map((d)=>{
      return         <Postpages like={d.like} comment={d.comment} username={d.username} userImage={d.userImage} name={d.name} height={d.height} post={d.post} imageUrl={d.imageUrl}></Postpages>; 
         });

         let user=null;
         user=posts.map((u)=>{
            return <Suggest name={u.name} username={u.username} userImage={u.userImage}></Suggest>
         });
    return(

        <>
     
        <div className='navbara'>
        <Navbar></Navbar>
       
        </div>
        <div className='full-dis'>
            <div className='pages-list' style={{ boxShadow: "1px 0px 1px 1px "}} >
            <ul className="list-group" >
               <Link to="/postpage"  style={{backgroundColor:`${homeColor}`, textDecoration:"none", color:"black"}}>
  <li className="side-nav-btn  p-3"  style={{backgroundColor:`${homeColor}`}} onClick={()=>{setPage(1);sethomeColor("skyblue"); setExploreColor("");setbookColor("");setprofileColor("")}} aria-current="true">Home</li>
  </Link>
  <Link to="/reels" style={{backgroundColor:`${exploreColor}`,textDecoration:"none", color:"black"}}>
<li className="side-nav-btn p-3"  style={{backgroundColor:`${exploreColor}`}}  onClick={()=>{setPage(2);sethomeColor(""); setExploreColor("skyblue");setbookColor("");setprofileColor("")}}>Reels</li>
</Link>
<Link to="/saved" style={{backgroundColor:`${bookColor}`,textDecoration:"none", color:"black"}} >
  <li className="side-nav-btn p-3"    style={{backgroundColor:`${bookColor}`}}  onClick={()=>{setPage(3);sethomeColor(""); setExploreColor("");setbookColor("skyblue");setprofileColor("")}} >Saved</li>
  </Link>
  <Link to="/user" style={{backgroundColor:`${profileColor}`,textDecoration:"none", color:"black"}} >
  <li className="side-nav-btn p-3"    style={{backgroundColor:`${profileColor}`}}  onClick={()=>{setPage(4);sethomeColor(""); setExploreColor("");setbookColor("");setprofileColor("skyblue")}}>Profile</li>
  </Link>
  <li className="side-nav-btn p-3"  >Log Out</li>
</ul>
                 </div>
 {/*post */}
                 
                 <div className='post-part'>
                 <h2 className='mb-4' style={{width:"70%" ,margin:" 20px auto"}}>Latest Posts</h2>
                 <div className='posts'>
               {mypage===1?<>{post}</>:<></>}
               {mypage===2?<>reels</>:<></>}
               {mypage===3?<>saved</>:<></>}
               {mypage===4?<>user</>:<></>}
               {mypage===5?<>user</>:<></>}
                 </div>
                 
                 </div>
                 

 {/*searchpart */}
 <div className='search-user '>
   <input type='text' placeholder='Search Users' className='form-control ' style={{width:"90%",margin:"20px auto"}}/>
 {user}
 </div>
 

                </div>
                
        </>
    );
}