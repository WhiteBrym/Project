import React from "react";
import { useParams } from "react-router-dom";
import MockData from "../../MockData/MockData";

export default function GameContent(props) {
  let { game } = useParams();
  return (
    <div className="gameWrap">
      <h3>{MockData.GameMock[game - 1].title}</h3>
      <div className="gameContent">
        <div className="gameImg">
          <img src={MockData.GameMock[game - 1].img} alt="#"></img>
        </div>
        <div className="text">
          <p>{MockData.GameMock[game - 1].text}</p>
        </div>
        <div className="video">
          <iframe
            width="660"
            height="415"
            src={MockData.GameMock[game - 1].video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="#"
          ></iframe>{" "}
        </div>
      </div>
      <div className="text">
        <p>{MockData.GameMock[game - 1].textTwo}</p>
      </div>
    </div>
  );
}
