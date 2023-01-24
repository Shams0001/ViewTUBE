const express=require("express");
const axios = require('axios');
const app= express();
const port = 5000;
const apiKey = "AIzaSyC7sWeL1tIQ4ttR05-GiDKAL_OViIpN5M4";
const baseApiUrl = "https://www.googleapis.com/youtube/v3";
const cors=require('cors');

app.use(cors());

app.get("/" ,(req,res)=>{
    res.send("hello from our api");
});

app.get('/search',async(req,res,next)=>{
    
    try{
        console.log("Sasdd");
    const searchQuery = req.query.search_query;
    console.log(searchQuery);
    const url= `${baseApiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${searchQuery}`;
    const response=await axios.get(url);
    //const titles = response.data.items.map((item) => item.snippet.title);
    res.send(response.data.items);
    } catch(err){
        next(err);
    }
});



app.get('/mostpopular',async(req,res,next)=>{
    console.log("Adsadasdsad");
    try{
        const url=`${baseApiUrl}/videos?part=snippet&chart=mostPopular&regionCode=in&maxResults=12&key=${apiKey}`;
        const response=await axios.get(url);
        // const titles= response.data.items.map((item)=>item.snippet.title);
        // //res.send(response.data.items);
        res.send(response.data.items);
    }
    catch(err){
        next(err);
    }
});

app.get('/category',async(req,res,next)=>{
    try{
        const videoId=req.query.videoCategoryId;
        console.log(videoId);
        const url=`${baseApiUrl}/videos?part=snippet&regionCode=in&maxResults=10&videoCategoryId=${videoId}&chart=mostPopular&key=${apiKey}`;
        const response=await axios.get(url);
        //const titles= response.data.items.map((item)=>item.snippet.title);
        res.send(response.data.items);
        //res.send(titles);
    }
    catch(err){
        next(err);
    }
});



app.listen(port ,()=>{
    console.log("server is running on port 5000");
});
