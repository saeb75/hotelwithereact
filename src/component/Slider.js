import React, { Component } from "react";
import Slider from "react-slick";
import {RoomContext} from "./../Content Api/RoomProvider"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default class SimpleSlider extends Component {
  
  static contextType =RoomContext
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrow:true,
      dots:false,
      autoplay:true,
      autoplaySpeed: 6000
      
    };
    let {rooms,id} = this.context
    return (
        <div className='slider'>
      <Slider   {...settings}>
       {
           rooms.map(item =>{
            
            return(
              <div key={id} className="card">
              <div  className='item'>
                
                <img src={item.image[0]} alt={id} />
                <section className="slideinfo">
                 <h2 className="name">{item.name}</h2>
                 <h4 className="descri_header">description</h4>
                 <p className="description">{item.description < 70 ? `${item.description}` :`${item.description.substring(0,70)}...`}</p>
                </section>
                <section className="price">
                <h3>{`price : $${item.price}`}</h3>
                </section>
               </div>
               </div>
               )
            } )
           
       }
      </Slider>
      </div>
    );
  }
}