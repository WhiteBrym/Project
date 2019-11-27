import React from "react";
import { Link } from "react-router-dom";
import MockData from "../../MockData/MockData";

function Games() {
  return (
    <div>
      <ul>
        <div className="box">
          {MockData.GameMock.map(item => (
            <div className="content" key={item.id}>
              <Link to={`/Games/${item.id}`}>
                <img src={item.img} className="stylesimg" alt="#"></img>
              </Link>
              <br />
              <p>{item.title}</p>
              <br />
              <li key={item.id}>
                <Link to={`/Games/${item.id}`}>
                  <button className="btn"> Gou </button>
                </Link>
              </li>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default Games;
