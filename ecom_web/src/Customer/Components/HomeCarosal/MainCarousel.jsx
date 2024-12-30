import { Height, WidthFull } from '@mui/icons-material';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
};

const items = [
    <div className="item" data-value="1" ><img src='https://t3.ftcdn.net/jpg/06/37/43/04/360_F_637430434_WmWwP4HQdQ4ok2xcL3sFTxTmjMBylMY2.jpg'></img></div>,
    <div className="item" data-value="2"><img src='https://t4.ftcdn.net/jpg/09/24/21/95/360_F_924219562_9tLzRob8sJdJJUSAwVSLuRure86Q8VLc.jpg'></img></div>,
    <div className="item" data-value="3"><img src='https://t4.ftcdn.net/jpg/07/04/82/59/360_F_704825941_USdItsvq9u4zRBW7fSiDlig0wqMIujLC.jpg'></img></div>,
    <div className="item" data-value="4"><img src='https://t3.ftcdn.net/jpg/06/37/43/12/360_F_637431210_fxBr4yY6w22TeHAaOBOz6og34hTqhefF.jpg'></img></div>,
    <div className="item" data-value="5"><img src='https://t4.ftcdn.net/jpg/08/60/85/11/360_F_860851114_2zhUadaB9GuJajfS1Gekd4rpqeMNxfRd.jpg'></img></div>,
];

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        controlsStrategy="alternate"
        autoPlay
        infinite
        autoPlayInterval={1500}
        disableButtonsControls
        responsive={responsive}
    />
);

export default MainCarousel;