import React from 'react'
import logo  from "../Asserts/logo.png"
import "./Boxicon.css"
import { Button,Container,Nav,NavLink,Navbar,Form,FormControl,Col,Row,Carousel } from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Slideone from  "../Asserts/slider.jpg"
import Slidetwo from  "../Asserts/slideshow_image.jpg"
import Slidethree from  "../Asserts/bannar.jpg"
import Cat1 from "../Asserts/cat1.png"
import Cat2 from "../Asserts/cat2.png"
import Cat3 from "../Asserts/cat3.png"
import Cat4 from "../Asserts/cat4.png"
import Cat5 from "../Asserts/cat5.png"
import Cat6 from "../Asserts/cat6.png"
import Cat7 from "../Asserts/cat7.png"
import Cat8 from "../Asserts/cat8.png"
import Cat9 from "../Asserts/cat9.png"
import fadeInDown from 'react-animations/lib/fadeInDown'
import Radium, {StyleRoot} from 'radium';

// import Cat10 from "../Asserts/cat10.png"


function Boxicon() {

  const styles = {
    fadeInDown: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
  }
   




    
    return (

      <StyleRoot>

   
        <div className="Boxicon d-flex justify-content-around   pt-5 mt-5"style={styles.fadeInDown} >

<Container>
  




<div className="row d-flex justify-content-center d-flex justify-content-between">


<div>

  <div className="boximg px-2">

    <img className="imgcircle" src={Cat1} width="100px" height="100px"/>
    
  </div>
  <span>Kaçırma </span>
</div>












<div>

  <div className="boximg px-2 px-2 mx-1">

    
  <img className="imgcircle" src={Cat2} width="100px" height="100px"/>
  </div>
  <span>Hemen Al </span>
</div>

<div>
  <div className="boximg px-2">

    
  <img className="imgcircle" src={Cat3} width="100px" height="100px"/>
  </div>
  <span>Yaza Hazırlan</span>
</div>
<div>
  <div className="boximg px-2">

    
  <img className="imgcircle" src={Cat4} width="100px" height="100px"/>
  </div>
  <span>Yeni Gelenler </span>
</div>
<div>
  <div className="boximg px-2">

  <img className="imgcircle" src={Cat5} width="100px" height="100px"/>
  </div>
  <span>Okumadan  </span>
</div>
<div>
  <div className="boximg px-2">

  <img className="imgcircle" src={Cat6} width="100px" height="100px"/>
  </div>
  <span>Karaca Home </span>
</div>
<div>
  <div className="boximg px-2">

    
  <img className="imgcircle" src={Cat7} width="100px" height="100px"/>
  </div>
  <span>Paşabahçe </span>
</div>
<div>
  <div className="boximg px-2">

  <img className="imgcircle" src={Cat8} width="100px" height="100px"/>
  </div>
  <span>Veste </span>
</div>
<div>
  <div className="boximg  ">

  <img className="imgcircle" src={Cat9} width="100px" height="100px"/>
  </div>
  <span>Arçelik </span>
</div>
<div>
  <div className="boximg ">

    
  <img className="imgcircle" src={Cat9} width="100px" height="100px"/>
  </div>
  <span>Beko </span>
</div>



  </div>










</Container>


        </div>
        </StyleRoot>
    )
}

export default Boxicon
