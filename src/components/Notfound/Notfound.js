import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="container text-center flex flex-col items-center">
      <h1 className="text-center">404 not found</h1>
      <img
        className="w-75"
        src="https://miro.medium.com/max/1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png"
        alt=""
      />
      <div className="d-grid col-6 mx-auto">
        <Link className="btn btn-primary" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
