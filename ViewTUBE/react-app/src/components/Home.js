import React from 'react';
import "../components/home.css"
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import viewtubeImg from "../assets/viewtube.png";
import landingImg from "../assets/img4.jpg"
import Image from "../assets/img3.jpg"
import Img from "../assets/img.jpg"
import {Form} from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';




export const Home = () => {
        let navigate = useNavigate();
        return <>



           
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                                <Navbar.Brand >View <img style={{ height: '35px', width: "35px" }} src={viewtubeImg} /> Tube</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="me-auto">
                                        

                                        </Nav>
                                        <Nav>
                                                {/* <Button variant="success" size="sm"  onClick={() => navigate('/Signin')}>Sign In</Button>  */}
                                                {/* <Button variant="success" size="sm"  onClick={() => navigate('/Signup')}>Sign Up</Button>     */}
                                                <Nav.Link href="/Signin">Sign In</Nav.Link>
                                                <Nav.Link eventKey={2} href="/Signup">
                                                        Sign Up
                                                </Nav.Link>
                                        </Nav>
                                </Navbar.Collapse>
                        </Container>
                </Navbar>




                <div className='carosel mt-0'>

                        <Carousel className="d-block  w-100 h-2px d-flex " >
                                <Carousel.Item interval={3000} className="carImg">
                                        <img
                                                className="d-block  w-100 h-2px d-flex sildeImg "
                                                src={landingImg}
                                                alt="First slide"
                                        />
                                        <Carousel.Caption>
                                                <h3>Welcome</h3>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={3000} className="carImg">
                                        <img
                                                className="d-block w-100 "
                                                src={Image}
                                                alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                                <h3>Second slide label</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item  interval={3000} className="carImg">
                                        <img
                                                className="d-block w-100 "
                                                src={Img}
                                                alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                                <h3>Third slide label</h3>
                                                <p>
                                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                                </p>
                                        </Carousel.Caption>
                                </Carousel.Item>
                        </Carousel>
                </div>


                {/* <div className="card d-flex">
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                        <CardMedia
                                                component="img"
                                                height="140"
                                                image={landingImg}
                                                alt="green iguana"
                                        />
                                        <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                        Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                                        species, ranging across all continents except Antarctica
                                                </Typography>
                                        </CardContent>
                                </CardActionArea>
                        </Card> */}
                {/* </div>

               
                {/* <button onClick={() => navigate('/Signin')}>Signin</button>
                <button onClick={() => navigate('/Signup')}> Signup</button> */}
                <div className="Product-description">
                        <div className='description-heading'>
                                <h1>Product Description</h1>
                        </div>
                        <div className='description-details'>
                                <div class="detail">
                                        <h2>Most Viewed</h2>
                                        <p>Do you wonder why we use exactly 992px and 600px? They are what we call "typical breakpoints" for devices. You can read more about typical breakpoints in our Responsive Web Design Tutorial.</p>
                                </div>
                                <div class="detail">
                                        <h2>Search</h2>
                                        <p>Do you wonder why we use exactly 992px and 600px? They are what we call "typical breakpoints" for devices. You can read more about typical breakpoints in our Responsive Web Design Tutorial.</p>
                                </div>
                                <div class="detail">
                                        <h2>Favourite</h2>
                                        <p>Do you wonder why we use exactly 992px and 600px? They are what we call "typical breakpoints" for devices. You can read more about typical breakpoints in our Responsive Web Design Tutorial.</p>
                                </div>
                        </div>
                </div>
                
                {/* <div className='section2'>
                <div className='section-heading'>
                        <h1>Our Team</h1>
                </div>
                <div className="founder-detail">
                        <div className='founder1'>
                                <div className='founderImg'>
                                        <img src={landingImg} />
                                </div>
                                <div className="details">
                                <h2>Founder 1</h2>
                                <p>Do you wonder why we use exactly 992px and 600px? They are what we call "typical breakpoints" for devices. You can read more about typical breakpoints in our Responsive Web Design Tutorial.</p>
                                </div>
                                
                        </div>
                        <div className='founder1'>
                                <div className='founderImg'>
                                        <img src={landingImg} />
                                </div>
                                <div className="details">
                                <h2>Founder 1</h2>
                                <p>Do you wonder why we use exactly 992px and 600px? They are what we call "typical breakpoints" for devices. You can read more about typical breakpoints in our Responsive Web Design Tutorial.</p>
                                </div>
                                
                        </div>
                        <div className='founder1'>
                                <div className='founderImg'>
                                        <img src={landingImg} />
                                </div>
                                <div className="details">
                                <h2>Founder 1</h2>
                                <p>Do you wonder why we use exactly 992px and 600px? They are what we call "typical breakpoints" for devices. You can read more about typical breakpoints in our Responsive Web Design Tutorial.</p>
                                </div>
                                
                        </div>
                        </div>
                </div> */}
                <div style={{ width: "100%", textAlign: "center", height: "40px", marginTop: "250px", backgroundColor: "darkgrey" }}><h5 style={{ color: "white", paddingTop: "6px" }}>ViewTube &copy; 2022</h5></div>
                
        </>
}