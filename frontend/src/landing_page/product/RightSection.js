import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-4 mb-4">
    <div className="row">
      <div className="col-6 p-5 mt-5">
        <h1 className="mt-5">{productName}</h1>
        <p>{productDescription}</p>

        <div>
          <a href={learnMore}>
            Learn More
          </a>
        </div>

        </div>

        <div className="col-6">
            <img src={imageURL} alt="product image"/>
        </div>
       </div> 
    </div>
  );
}

export default RightSection;
