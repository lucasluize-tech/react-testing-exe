import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  const goForward = () => {
    cardIdx === total - 1 ? setCardIdx(0) : setCardIdx(cardIdx + 1);
  };
  // Just another way to make carousel infitine.
  const goBackwards = () => {
    cardIdx === 0 ? setCardIdx(total - 1) : setCardIdx(cardIdx - 1);
  };
  return (
    <div className='Carousel'>
      <h1>{props.title}</h1>
      <div className='Carousel-main'>
        {cardIdx === 0 ? (
          // proposed solution
          <div data-testid='left-arrow' hidden></div>
        ) : (
          <i
            className='fas fa-chevron-circle-left fa-2x'
            onClick={goBackwards}
            data-testid='left-arrow'
          />
        )}
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        {cardIdx === total - 1 ? (
          <div data-testid='right-arrow' hidden></div>
        ) : (
          <i
            className='fas fa-chevron-circle-right fa-2x'
            onClick={goForward}
            data-testid='right-arrow'
          />
        )}
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash",
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash",
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash",
    },
  ],
  title: "Shells from far away beaches.",
};

export default Carousel;
