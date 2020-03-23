import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div>
        <Hero hero="contactHero">
          <Banner title="Contact us">
            <p>People:</p> <p>Kigshuk Jyoti Nath (Ph:8486287910)</p>
            <p>Bidon Saha (Ph:9957253009)</p>
          </Banner>
        </Hero>
      </div>
    </>
  );
}
