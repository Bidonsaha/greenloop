import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Products() {
  return (
    <>
      <Hero hero="productsHero">
        <Banner title="cycles">
          <Link to="/booknow" className="btn-primary">
            Book Now
          </Link>
        </Banner>
      </Hero>
      <FeaturedRooms />
    </>
  );
}
