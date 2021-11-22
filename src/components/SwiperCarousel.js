import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/swiper.min.css';
import '../swiper.css';

SwiperCore.use([Pagination, Navigation]);

const Swipercarousel = ({
  children,
  items,
  pagination,
  slidesPerView,
  navigation,
}) => {
  const cloneItem = items.map((el, idx) => (
    <SwiperSlide key={idx}>
      {React.cloneElement(children, { item: el, key: el.id })}
    </SwiperSlide>
  ));
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={slidesPerView ? slidesPerView : 3}
      pagination={pagination ? pagination : false}
      navigation={navigation ? navigation : false}
    >
      {cloneItem}
    </Swiper>
  );
};

export default Swipercarousel;
