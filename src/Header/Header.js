import React from 'react'
import logo  from "../Asserts/logo.png"
import "./Header.css"
import { Button,Container,Nav,NavLink,Navbar,Form,FormControl,Col,Row } from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header" >
           
      <Navbar bg="white" expand="lg" className= "d-flex justify-content-between" >
        <div className="container">

      
  <Navbar.Brand href="#home">
    <img src={logo} width="150" height="100"/>
  </Navbar.Brand> 
  <div className="pt-2  d-flex h-input bg-light" >
 
  
  <Form.Control type="text" placeholder="Tost Makinesi" className=" bb bg-light"   />
  <SearchIcon className="red"/>


    </div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <div className="ml-5">
    <Nav className="ml-5">
      <Nav.Link href="#home"><h5><span className="red"> TR</span>  DIL </h5></Nav.Link>
      <Nav.Link href="#link"> <h5> <FavoriteIcon className="red"/>  Favorilerim </h5> </Nav.Link>
      <Nav.Link href="#link"><h5>  <PersonIcon className="red"/>           Hesabım</h5></Nav.Link>
      <Nav.Link href="#link"><h5> <ShoppingCartIcon className="red"/> Sepetim</h5></Nav.Link>
      
    </Nav>
    </div>
  </Navbar.Collapse>
  
  </div>
</Navbar>


   



<div className="header-two pt-3">


  <Navbar bg="light" expand="lg">
  <Container>
  <Row>
    <Col md={12}>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
  <Nav className="text-center">
      
      <Nav.Link href="#home"><span className="font-weight-bold text-dark">    Elektronik </span></Nav.Link>
      <Nav.Link href="#home"><span className="font-weight-bold text-dark">    Ev & Yaşam &
Kırtasiye & Ofis </span></Nav.Link>
      <Nav.Link href="#home"><span className="font-weight-bold text-dark">    Süpermarket &
Petshop </span></Nav.Link>
      <Nav.Link href="#home"><span className="font-weight-bold text-dark">    Moda </span></Nav.Link>
      <Nav.Link href="#home"><span className="font-weight-bold text-dark">    Kitap & Hobi </span></Nav.Link>
      <Nav.Link href="#home"><span className="font-weight-bold text-dark">    Kişisel Bakım &
Kozmetik </span></Nav.Link>
      <Nav.Link href="#home"><span className="font-weight-bold text-dark">    Dış Mekan
Bahçe & Oto </span></Nav.Link>
      <Nav.Link href="#home"><span className="font-weight-bold text-dark">    Spor & Doğa </span></Nav.Link>
      <Nav.Link href="#home"><span className="font-weight-bold text-dark">    Anne & Bebek
& Oyuncak </span></Nav.Link>
      <Nav.Link href="#home"><span className="font-weight-bold text-dark">    Takı & Aksesuar </span></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>

  </Col>
  </Row>
  </Container>
</Navbar>



</div>



  
        </div>
    )
}

export default Header
