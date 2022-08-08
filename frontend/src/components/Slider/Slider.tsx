import React, { useEffect, useRef } from 'react';
import { Arrow } from '../../assets/icons';
import { useSlide } from './hooks';
import { Container } from './Slider.style';

interface SliderType {
  children: React.ReactNode | React.ReactNode[];
  offset: number;
}

function Slider({ children, offset }: SliderType) {
  const totalSlideLength = Math.ceil(React.Children.count(children) / offset);
  const slideLimit = totalSlideLength - 1;
  const [currentSlide, nextSlide, prevSlide] = useSlide(slideLimit);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!ulRef.current) return;

    ulRef.current.style.width = `${totalSlideLength}00%`;
    ulRef.current.style.transform = `translateX(-${
      (100 / totalSlideLength) * currentSlide
    }%)`;
  }, [ulRef, currentSlide, totalSlideLength]);

  if (!children) {
    return <></>;
  }

  return (
    <Container columns={offset * totalSlideLength}>
      <ul ref={ulRef}>{children}</ul>
      <button className="arrow prev" onClick={prevSlide}>
        <Arrow />
      </button>
      <button className="arrow next" onClick={nextSlide}>
        <Arrow />
      </button>
    </Container>
  );
}

export default Slider;
