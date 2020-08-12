import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import WhatWeDo from "./what-we-do";
import Contact from "./contact";
import ListCard from "./list-card";
import Footer from "./footer";

export default function Baitap2() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="row">
        <div className="col-sm-8">
          <WhatWeDo />
        </div>
        <div className="col-sm-4">
          <Contact />
        </div>
      </div>
      <ListCard />
      <Footer />
    </div>
  );
}
