
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const responsive = {
    0: { items: 1 },
    768: { items: 4 },
    1024: { items: 4 },
};

                                                                                                                             
const HomeSectionCarousel = (props) => (
    <div>
        <h1 className='mr font-bold'>{props.name}</h1>
        <AliceCarousel
            mouseTracking
            items={props.items}
            controlsStrategy="alternate"
            responsive={responsive}
            disableDotsControls
        />
    </div>
);

export default HomeSectionCarousel
