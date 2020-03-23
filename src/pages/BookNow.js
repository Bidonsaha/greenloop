import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function BookNow() {
  return (
    <Hero>
      <Banner title="Booking" subtitle="booking page under contruction">
        <Link to="/" className="btn-primary">
          Go Back to Home
        </Link>
      </Banner>
    </Hero>
  );
}
