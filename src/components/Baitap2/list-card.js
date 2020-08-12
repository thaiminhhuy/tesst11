import React from "react";
import Card from "./card";

export default function ListCard() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card />
      </div>
      <div className="col-sm-4">
        <Card />
      </div>
      <div className="col-sm-4">
        <Card />
      </div>
    </div>
  );
}
