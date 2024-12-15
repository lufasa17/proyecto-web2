import { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const partidosDestacados = [
  {
    src: 'https://via.placeholder.com/1200x400?text=Oriente+Petrolero',
    altText: 'The Strongest vs Oriente Petrolero',
    caption: '16 de diciembre | Hernando Siles | 20:00',
  },
  {
    src: 'https://via.placeholder.com/1200x400?text=San+Antonio+Bulo+Bulo',
    altText: 'The Strongest vs San Antonio Bulo Bulo ',
    caption: '18 de diciembre | Hernando Siles | 20:30',
  },
  {
    src: 'https://via.placeholder.com/1200x400?text=Blooming',
    altText: 'Blooming vs The Strongest',
    caption: '20 de diciembre | Ramon Tahuichi Aguilera | 19:00',
  },
];

function Calendario() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === partidosDestacados.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? partidosDestacados.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = partidosDestacados.map((item) => (
    <CarouselItem
      key={item.src}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <img src={item.src} alt={item.altText} className="d-block w-100" />
      <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
    </CarouselItem>
  ));

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={partidosDestacados}
        activeIndex={activeIndex}
        onClickHandler={(newIndex) => !animating && setActiveIndex(newIndex)}
      />
      {slides}
      <CarouselControl direction="prev" directionText="Anterior" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Siguiente" onClickHandler={next} />
    </Carousel>
  );
}

export default Calendario;
