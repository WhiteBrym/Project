import React from "react";
import { UncontrolledCarousel } from "reactstrap";

export default function Carousel({ oneSlide, twoSlide, threeSlide }) {
  const items = [
    {
      src: oneSlide,
      altText: "Slide 1",
      key: "1",
      caption: "",
      header: ""
    },
    {
      src: twoSlide,
      altText: "Slide 2",
      key: "2",
      caption: "",
      header: ""
    },
    {
      src: threeSlide,
      altText: "Slide 3",
      key: "3",
      caption: "",
      header: ""
    }
  ];
  return <div> {<UncontrolledCarousel items={items} />}</div>;
}
