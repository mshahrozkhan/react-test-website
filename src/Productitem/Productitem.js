import React from 'react'
import logo  from "../Asserts/logo.png"
import "./Productitem.css"
import { Button,Container,Nav,NavLink,Navbar,Form,FormControl,Col,Row,Card, } from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import Slideone from  "../Asserts/slider.jpg"
import Slidetwo from  "../Asserts/slideshow_image.jpg"
import Slidethree from  "../Asserts/bannar.jpg"
import Productitem1 from '../Asserts/cat-bn-01.jpg';
import Productitem2 from '../Asserts/cat-bn-02.jpg';
import Productitem3 from '../Asserts/cat-bn-03.jpg';
import Productitem4 from '../Asserts/cat-bn-04.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import InfiniteCarousel from 'react-leaf-carousel';
// import Cat10 from "../Asserts/cat10.png"





function Productitem() {




    
    return (
        <div className="Boxicon d-flex justify-content-around  pt-5 mt-5" >

<Container>
  

<InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >


    <div className="Card">
      
    
  <Card.Img variant="top" src={Productitem1} />
  <Card.Body className="text-center">
    

  <p class="card-text">Vestel Venus V7
              Gece Mavisi</p>
              <h5 class="card-title">1.678 TL </h5>
              <p>
          <span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star"><StarIcon/></span>
<span className="fa fa-star"><StarIcon/></span>
        </p>

    <Button variant="btn btn-danger">Sepete Ekle</Button>
  </Card.Body>

    </div>



    <div className="Card">
      
    
  <Card.Img variant="top" src={Productitem2} />
  <Card.Body className="text-center">
    

  <p class="card-text">Vestel Venus V7
              Gece Mavisi</p>
              <h5 class="card-title">1.678 TL </h5>
              <p>
          <span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star"><StarIcon/></span>
<span className="fa fa-star"><StarIcon/></span>
        </p>

    <Button variant="btn btn-danger">Sepete Ekle</Button>
  </Card.Body>

    </div>





















    <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem3} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>














        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem4} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>

















        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem1} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>














        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem2} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>
















        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem3} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>











        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem4} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>
















        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem1} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>






        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem2} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>







        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem3} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>









        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem4} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>















    
        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem1} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>


    
        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem2} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>

        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem3} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>

        <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem4} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>

    <div className="Card">
      
    
  <Card.Img variant="top" src={Productitem1} />
  <Card.Body className="text-center">
    

  <p class="card-text">Vestel Venus V7
              Gece Mavisi</p>
              <h5 class="card-title">1.678 TL </h5>
              <p>
          <span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star"><StarIcon/></span>
<span className="fa fa-star"><StarIcon/></span>
        </p>

    <Button variant="btn btn-danger">Sepete Ekle</Button>
  </Card.Body>

    </div>

   <div className="Card">
      
    
  <Card.Img variant="top" src={Productitem2} />
  <Card.Body className="text-center">
    

  <p class="card-text">Vestel Venus V7
              Gece Mavisi</p>
              <h5 class="card-title">1.678 TL </h5>
              <p>
          <span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star"><StarIcon/></span>
<span className="fa fa-star"><StarIcon/></span>
        </p>

    <Button variant="btn btn-danger">Sepete Ekle</Button>
  </Card.Body>

    </div>
    <div className="Card">
      
    
  <Card.Img variant="top" src={Productitem3} />
  <Card.Body className="text-center">
    

  <p class="card-text">Vestel Venus V7
              Gece Mavisi</p>
              <h5 class="card-title">1.678 TL </h5>
              <p>
          <span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star checked"><StarIcon/></span>
<span className="fa fa-star"><StarIcon/></span>
<span className="fa fa-star"><StarIcon/></span>
        </p>

    <Button variant="btn btn-danger">Sepete Ekle</Button>
  </Card.Body>

    </div>
    <div className="Card">
      
    
      <Card.Img variant="top" src={Productitem3} />
      <Card.Body className="text-center">
        
    
      <p class="card-text">Vestel Venus V7
                  Gece Mavisi</p>
                  <h5 class="card-title">1.678 TL </h5>
                  <p>
              <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star checked"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
    <span className="fa fa-star"><StarIcon/></span>
            </p>
    
        <Button variant="btn btn-danger">Sepete Ekle</Button>
      </Card.Body>
    
        </div>
  </InfiniteCarousel>






</Container>


        </div>
    )
}

export default Productitem
