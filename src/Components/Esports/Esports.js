import React from "react";
import { Link } from "react-router-dom";
import MockData from "../../MockData/MockData";

function Esports() {
  return (
    <li>
      <ul>
        <li className="box">
          {MockData.EsportMock.map(item => (
            <li className="content" key={item.id}>
              <Link to={`/Esports/${item.id}`}>
                <img src={item.img} className="stylesimg" alt="#"></img>
              </Link>
              <br />
              <p>{item.title}</p>
              <br />
              <li>
                <Link to={`/Esports/${item.id}`}>
                  <button className="btn">Gou</button>
                </Link>
              </li>
            </li>
          ))}
        </li>
      </ul>
    </li>
  );
}
export default Esports;
