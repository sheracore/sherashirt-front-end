
import people_2 from "../../assets/img/brand/people_2.jpg"
import people_1 from "../../assets/img/brand/people_1.jpg"
import girl_main from "../../assets/img/brand/girl_main.jpg"

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col
} from 'reactstrap';

const items = [
  {
    src: people_1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: people_2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: girl_main,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="700" height="700" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Row>
      <Col xs="6">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          className = "carousel"
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </Col>
    </Row>
  );
}

export default Example;

