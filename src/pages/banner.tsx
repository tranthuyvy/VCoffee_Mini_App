import React, { FC } from "react";
import { Box } from "zmp-ui";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getConfig } from "../utils/config";
import banner1 from "../static/data_pic/banner-1.jpg";
import banner2 from "../static/data_pic/banner-2.jpg";
import banner3 from "../static/data_pic/banner-3.jpg";

export const Banner:FC = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };


  return (
    <Box className='bg-white pb-4'>
      <Slider {...settings}>
        <div>
          <img 
            src={getConfig((c) => c.template.banner) || banner1}
            alt="banner" 
            className='w-100 h-100 object-cover p-2 shadow-sm border-white rounded-2xl' 
          />
        </div>
        <div>
          <img 
            src={getConfig((c) => c.template.banner) || banner2}
            alt="banner" 
            className='w-100 h-100 object-cover p-2 shadow-sm border-white rounded-2xl' 
          />
        </div>
        <div>
          <img 
            src={getConfig((c) => c.template.banner) || banner3}
            alt="banner" 
            className='w-100 h-100 object-cover p-2 shadow-sm border-white rounded-2xl' 
          />
        </div>
      </Slider>
    </Box>
  )
}