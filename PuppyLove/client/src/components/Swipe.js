import React from "react";
import API from "../utils/API";
import { useState, useEffect } from "react";

const Swipe = () => {
  const [dogs, setDogImage] = useState();
  useEffect(() => {
    API.getDogs()
      .then((res) => setDogImage(res.data.message))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="col-md-8 mb-3 content">
      <div className="card">
        <img
          id="swipe"
          className="picSize img-fluid"
          src={dogs}
          alt="Random Dog"
        />
        <div className="card-body">
          <p className="card-text">
            Swipe right to save.
            <br />
            Swipe left to see a new pup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Swipe;
