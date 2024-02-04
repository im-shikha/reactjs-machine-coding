import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="App">
      <div className="main-container">
        <div className="side-container">
          <div className="">
            <span className="circle-blue"></span>
          </div>
          <div className="">
            <span className="circle-purple"></span>
          </div>
          <div className="">
            <span className="circle-pink"></span>
          </div>
        </div>
        <div className="card__content">
          <ul>
            <li>
              <Link className="q-link" to="/fetch-api">
                1. Fetch data from an API
              </Link>
            </li>
            <li>
              <Link className="q-link" to="/fetch-api">
                1. Fetch data from an API
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
