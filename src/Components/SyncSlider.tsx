import React, {useEffect, useState } from 'react';
import Slider from 'react-slick';
import Cart from './Cart.tsx'
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SyncSlider() {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    initialSlide: 0, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    className: "center",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          centerPadding: "50px",
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
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
      const requestLink = `https://coolmeal.onrender.com/api/dishes/count/10`
      async function fetchData() {
      const {data} = await axios.get(requestLink);
      setData(data);
  }
      fetchData().catch(e => console.log(e))
  }, [])

    return (
    <div>
      <Slider {...settings}>
        {data.map((item) => (
              <Cart 
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
              />
          ))}
      </Slider>
    </div>
  );
}