import React from "react";
import { useParams } from "react-router-dom";
import MockData from "../../MockData/MockData";
import Carousel from "./Carousel";

export default function EsportsContent(props) {
  let { esport } = useParams();
  return (
    <div className="sliderWrap">
      <h3>{MockData.EsportMock[esport - 1].title}</h3>
      <div className="slider">
        <Carousel
          oneSlide={MockData.EsportMock[esport - 1].img1}
          twoSlide={MockData.EsportMock[esport - 1].img2}
          threeSlide={MockData.EsportMock[esport - 1].img3}
        />
      </div>

      <p>{MockData.EsportMock[esport - 1].text}</p>
    </div>
  );
}
