import React from "react";
import Title from "./Title";

export default function AboutUs() {
  return (
    <section className="featured-rooms">
      <Title title="About Us" />
      <div className="featured-rooms-center">
        <i>
          "We are a small service based Electric bikes and bi-cycles rental
          startup whose vision is to create eco friendly means of travelling at
          affordable prices."
        </i>
        <i>
          "Our mission is to provide our customers a sustainable means of
          travelling and creating a pollution free ecosystem."
        </i>
      </div>
    </section>
  );
}
