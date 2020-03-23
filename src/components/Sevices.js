import React, { Component } from "react";
import Title from "./Title";
import { FaBicycle, FaShuttleVan, FaChargingStation } from "react-icons/fa";
import { MdMotorcycle } from "react-icons/md";

export default class Sevices extends Component {
  state = {
    services: [
      {
        icons: <FaBicycle />,
        title: "E-Bicycle",
        info: "Electric bicycle for rental."
      },
      {
        icons: <MdMotorcycle />,
        title: "E-Bikes",
        info: "Coming Soon"
      },

      {
        icons: <FaChargingStation />,
        title: "E-Station",
        info: "Coming Soon"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icons}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
