import React from 'react';
import Data from './Data';
import './post.css';
import Navbar from './Navbar';
import Postpages from './Postpages';
export default function Post(props){

   const posts=[
      {
         name:"kiran ugale",
         username:"@kiranugale2o",
         post:" this is My favourite Progarmmer !",
         imageUrl:'avtar.jpg',
         height:"300",
      },
      {
         name:"kiran ugale",
         username:"@kiranugale2o",
         post:" this is My favourite Progarmmer !",
         imageUrl:"",
         height:"0",
      }
      ,{
         name:"kiran ugale",
         username:"@kiranugale2o",
         post:" this is My favourite Progarmmer !",
         imageUrl:" avtar.jpg",
         height:"300",
      }
      ,{
         name:"kiran ugale",
         username:"@kiranugale2o",
         post:" this is My favourite Progarmmer !",
         imageUrl:" avtar.jpg",
         height:"300",
      }
      ,{
         name:"kiran ugale",
         username:"@kiranugale2o",
         post:" this is My favourite Progarmmer !",
         imageUrl:" avtar.jpg",
         height:"300",
      }
   
   ];

   let post=null;
   post=posts.map((d)=>{
      return <Postpages username={d.username} name={d.name} height={d.height} post={d.post} imageUrl={d.imageUrl}></Postpages>
   })
    return(

        <>
        <div className='navbara'>
        <Navbar></Navbar>
        </div>
        <div className='full-dis'>
            <div className='pages-list'>
            <div className='border' >
                    <p id='pagename' className='active' >Home</p>
                 </div>
                 <div className='border' >
                    <p id='pagename'  >Serach</p>
                 </div>
                 <div className='border' >
                    <p id='pagename' >Reels</p>
                 </div>
                 <div className='border' >
                    <p id='pagename'  >Saved</p>
                 </div>
                 <div className='border' >
                    <p id='pagename'  >Profile</p>
                 </div>
                 <div className='border' >
                    <p id='pagename'  >LogOut</p>
                 </div>


                 </div>
 {/*post */}

                 <div className='post-part'>
                 <h2 className='mb-4' style={{width:"70%" ,margin:" 20px auto"}}>Latest Posts</h2>
                 <div className='posts'>{post}</div>
                 
                 </div>
                 

 {/*searchpart */}
 

                </div>
        </>
    );
}