import React from "react";
import { useParams } from "react-router-dom";
import MockData from "../../MockData/MockData";

export default function NorwayCountry(props) {
  let { technology } = useParams();
  return (
    <div className="technologyWrap">
      <h3>{MockData.TechnologyMock[technology - 1].title}</h3>
      <div>
        <div className="image">
          <img src={MockData.TechnologyMock[technology - 1].img} alt="#"></img>
        </div>

        <div>
          <p className="technologyText">
            {MockData.TechnologyMock[technology - 1].text}
          </p>
        </div>

        <div className="image">
          <img src={MockData.TechnologyMock[technology - 1].img2} alt="#"></img>
        </div>

        <div>
          <p className="technologyText">
            {MockData.TechnologyMock[technology - 1].text2}
          </p>
        </div>

        <div className="image">
          <img src={MockData.TechnologyMock[technology - 1].img3} alt="#"></img>
        </div>

        <div>
          <p className="technologyText">
            {MockData.TechnologyMock[technology - 1].text3}
          </p>
        </div>
      </div>
    </div>
  );
}
