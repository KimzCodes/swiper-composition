import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './swiper.css';

SwiperCore.use([Pagination, Navigation]);
// import ShapOne from './components/ShapOne';
// import ShapTwo from './components/ShapTwo';

function App() {
  const userData = [
    { id: 1, name: 'kareem', email: 'kareem@email.com', age: 30 },
    { id: 2, name: 'amr', email: 'amr@email.com', age: 30 },
    { id: 3, name: 'wafaa', email: 'wafaa@email.com', age: 32 },
    { id: 4, name: 'safaa', email: 'safaa@email.com', age: 33 },
  ];

  // const userData2 = [
  //   { id: 1, name: 'aly', email: 'kareem@email.com', age: 30 },
  //   { id: 2, name: 'hesham', email: 'amr@email.com', age: 30 },
  // ];

  return (
    <div className='App'>
      <Swiper spaceBetween={30} slidesPerView={3} navigation pagination>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
