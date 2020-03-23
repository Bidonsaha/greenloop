import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div>
        <Hero hero="contactHero">
          <Banner title="Contact us" subtitle="contact details to be added">
            <Link to="/products" className="btn-primary-contact"></Link>
          </Banner>
        </Hero>
      </div>
    </>
  );
}
