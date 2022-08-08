import React, { useEffect, useRef } from 'react';
import { Arrow } from '../../assets/icons';
import { StyledCategoryList } from '../CategoryList/Category.style';
import { useSlide } from './hooks';
import { Container } from './Slider.style';

interface SliderType {
  children: React.ReactNode | React.ReactNode[];
  offset: number;
}

function Slider({ children, offset }: SliderType) {
  const totalChildrenLength = Math.ceil(
    React.Children.count(children) / offset,
  );
  const totalSlideLength = totalChildrenLength - 1;
  const [currentSlide, nextSlide, prevSlide] = useSlide(totalSlideLength);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!ulRef.current) return;

    ulRef.current.style.width = `${totalChildrenLength}00%`;
    ulRef.current.style.transform = `translateX(-${
      (100 / totalChildrenLength) * currentSlide
    }%)`;
  }, [ulRef, currentSlide, totalChildrenLength]);

  if (!children) {
    return <></>;
  }

  return (
    <Container>
      <StyledCategoryList ref={ulRef}>{children}</StyledCategoryList>
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
