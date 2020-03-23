import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Sevices";

import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="greenloop" subtitle="Go Green">
          <Link to="/products" className="btn-primary">
            See our products
          </Link>
        </Banner>
      </Hero>
      <Services />
      <AboutUs />
    </>
  );
}
