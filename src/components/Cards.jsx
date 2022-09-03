import React from "react";

const Cards = ({ batata }) => {

  return (
    <div className="col-sm-12">
      <div className="card mt-5">
        <h3>{batata.name}</h3>
        <p>Clouds: {batata.clouds.all}</p>
        {/* <p>{batata.wind}</p> */}
      </div>
    </div>
  );
};

export default Cards;
