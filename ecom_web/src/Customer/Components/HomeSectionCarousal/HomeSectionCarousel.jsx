import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

// Define responsive settings for the carousel
const responsive = {
  0: { items: 1 },
  768: { items: 4 },
  1024: { items: 4 },
};

const HomeSectionCarousel = ({ items, name }) => (
  <div>
    <h1 className="mr font-bold">{name}</h1>
    <AliceCarousel
      responsive={responsive}
      autoPlay
      autoPlayInterval={2000} 
      infinite 
    >
      
      {items.map((item, index) => (
        <div key={index}>
          <HomeSectionCard
            id={item.id}
            name={item.name}
            des={item.des}
            image={item.image}
            price={item.price}
            main_price={item.main_price}
            discount={item.discount}
          />
        </div>
      ))}
    </AliceCarousel>
  </div>
);

export default HomeSectionCarousel;
