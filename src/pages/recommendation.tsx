import React, { FC } from 'react';
import { Box, Text } from 'zmp-ui';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useRecoilValue } from 'recoil';
import { Section } from '../components/section';
import { DisplayPrice } from '../components/price';
import { recommendProductsState } from '../state';

export const Recommendation:FC = () => {
  const recommendProducts = useRecoilValue(recommendProductsState);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '14%',
    focusOnSelect: true
  };


  return (
    <Section title='Gợi ý cho bạn' padding='title-only'>
      <Box className='bg-white pb-4'>
        
      <Slider {...settings}>
          {recommendProducts.map((product) => (
            <div key={product.id}>

              <Box
                className='w-100 h-36 relative aspect-video rounded-2xl bg-cover p-2'
                style={{ backgroundImage: `url(${product.image})` }}
              >
                {product.sale && (
                  <Text
                    size='xxSmall'
                    className='absolute uppercase rounded-full right-2 top-2 bg-[#288F4E] text-white h-4 px-[6px] '
                  >
                    Giảm{' '}
                    {product.sale.type === 'percent' ? (
                      `${product.sale.percent * 100}%`
                    ) : (
                      <DisplayPrice>{product.sale.amount}</DisplayPrice>
                    )}
                  </Text>
                )}
              </Box>

              <Box className='space-y-1'>
                <Text size='small' className='mt-3'>{product.name}</Text>
                <Text size='xxSmall' className='line-through text-gray'>
                  <DisplayPrice>{product.price}</DisplayPrice>
                </Text>
                
                {product.sale && (
                  <Text size='large' className='font-bold font-sesif text-[#491919]'>
                    {product.sale.type === 'fixed' ? (
                      <DisplayPrice>{product.price - product.sale.amount}</DisplayPrice>
                    ) : (
                      <DisplayPrice>{product.price * (1 - product.sale.percent)}</DisplayPrice>
                    )}
                  </Text>
                )}

              </Box>
            </div>
          ))}

        </Slider>
      </Box>
    </Section>
  )
}