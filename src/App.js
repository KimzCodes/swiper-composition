import React from 'react';
import ShapOne from './components/ShapOne';
import ShapTwo from './components/ShapTwo';
import SwiperCarousel from './components/SwiperCarousel';
function App() {
  const list = [
    {
      componentName: ShapTwo,
      data: [
        { id: 1, name: 'kareem', email: 'kareem@email.com', age: 30 },
        { id: 2, name: 'amr', email: 'amr@email.com', age: 30 },
        { id: 3, name: 'wafaa', email: 'wafaa@email.com', age: 32 },
        { id: 4, name: 'safaa', email: 'safaa@email.com', age: 33 },
      ],
      carouselOption: { pagination: true, slidesPerView: 5, navigation: true },
    },
    {
      componentName: ShapOne,
      data: [
        { id: 1, name: 'kareem', email: 'kareem@email.com', age: 30 },
        { id: 2, name: 'amr', email: 'amr@email.com', age: 30 },
        { id: 3, name: 'wafaa', email: 'wafaa@email.com', age: 32 },
        { id: 4, name: 'safaa', email: 'wafaa@email.com', age: 32 },
      ],
      carouselOption: { pagination: false, slidesPerView: 3, navigation: true },
    },
  ];
  const swiper = list.map((el, idx) => {
    let DynamicComponent;
    DynamicComponent = el.componentName;
    return (
      <SwiperCarousel
        items={el.data}
        pagination={el.carouselOption.pagination}
        slidesPerView={el.carouselOption.slidesPerView}
        key={idx}
      >
        <DynamicComponent />
      </SwiperCarousel>
    );
  });
  return <div className='App'>{swiper}</div>;
}

export default App;
