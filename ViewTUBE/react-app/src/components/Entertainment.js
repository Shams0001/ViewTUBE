import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./landing.css";
import NavbarTop from './NavbarTop';
import SideBar from './sidebar';
import axios  from "axios";
import Card from './Card';
const Entertainment=()=>{
    const [videos,setVideo]=useState([]);
    useEffect(()=>{
      
        async function data(){
          try {
          
            let response = await axios.get('http://localhost:5000/category',
            { 
              params:{videoCategoryId:24}}
            );
           
          console.log(response.data)
          setVideo(response.data)
          }
           catch (error) {
            console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
          }
    
        }
        data();
      
     },[]);

    return (
        <>
    <NavbarTop />
    <div className="landing">
      <SideBar />

       <div className="video-grid">
       
      {
        videos.map(video => {
          return (
          <Card  videoId={video.id} 
          title={video.snippet.localized.title} 
          channelName={video.snippet.channelTitle}/> 
          )
        })
        
      }
      </div> 

      {/* <Card videoId="lhu6hXf5bpQ"  /> */}
  </div>
    </>
    )
}
export default Entertainment;