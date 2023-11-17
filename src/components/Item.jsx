import React from "react";
import Button from "./Button";

function Item({ img, title, price }) {
  return (
    <div className="productItem">
      <img className="productItem__img" src={img} alt="" />
      <div className="mt-5">
        <p>{title}</p>
        <p>{price}</p>
        <Button text="click" bgColor="red" />
      </div>
    </div>
  );
}

export default Item;
