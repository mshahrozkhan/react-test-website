import React from 'react'
import logo  from "../Asserts/logo.png"
import "./Bannar.css"
import { Button,Container,Nav,NavLink,Navbar,Form,FormControl,Col,Row,Carousel } from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Slideone from  "../Asserts/slider.jpg"
import Slidetwo from  "../Asserts/slideshow_image.jpg"
import Slidethree from  "../Asserts/bannar.jpg"


function Bannar() {


  

    
    return (
        <div className="bannar pt-4 mt-5" >
  

<Container>

<Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={Slideone}
      alt="First slide"
    />
    <Carousel.Caption>
    <Container>
  <Row >
    <Col md={6} className="pt-5 mt-5">
    <div className=" pt-5 mt-5 ">

               
<h1 className="text-left pt-5 mt-5" >Çeyiz ve
  Düğün Setlerini
  Kaçırma</h1>

<p className="text-left ">Yeni ev kurmak hiç bu kadar kolay olmamıştı.
En kaliteli Türk markalarının çeyiz setleri
Turkish E-Market’la tek tıkla kapınızda</p>

<div className="text-left">


<button type="button" className="btn btn-light btn-lg px-5" >Keşfet</button>

</div>
</div>

    </Col>
    <Col>2 of 2</Col>
  </Row>
  
</Container>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={Slidetwo}
      alt="Second slide"
    />
    <Carousel.Caption>
        <div className=" font-weight-bold red pt-5 mt-5">

        <h1> 
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</h1>
      </div>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={Slidethree}
      alt="Third slide"
    />
    <Carousel.Caption>

    <div className=" font-weight-bold  red pt-5 mt-5">

        <h1> 
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</h1>
</div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>






        </div>
    )
}

export default Bannar
