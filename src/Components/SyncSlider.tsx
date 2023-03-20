import React, {useEffect, useState } from 'react';
import Slider from 'react-slick';
import Cart from './Cart.tsx';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SyncSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    initialSlide: 5, 
    // slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
    className: "center",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          centerPadding: "60px",
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        }
      }
    ]
  };

  const [data, setData] = useState([]);

  useEffect(() => { 
      const requestLink = `https://coolmeal.onrender.com/api/dishes/count/50`
      async function fetchData() {
      const {data} = await axios.get(requestLink)
      console.log(data);
      setData(data);
  }
      fetchData().catch(e => console.log(e))
  }, [])

    return (
    <div>
      <Slider {...settings}>
        {data.map((item) => (
              <Cart 
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
              />
          ))}
      </Slider>
    </div>
  );
}