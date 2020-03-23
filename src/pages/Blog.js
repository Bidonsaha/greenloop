import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <Hero hero="blogHero">
        <Banner subtitle="blog links to be added">
          <Link to="/" className="btn-primary">
            Go back to Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
}
