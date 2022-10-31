import React from "react";

import { clients } from "../constants";
import styles from "../styles";

const { flexCenter } = styles;

const Clients = () => (
  <section className={`${flexCenter} my-4`}>
    <div className={`${flexCenter} flex-wrap w-full`}>
      {clients.map((client) => {
        const { id, logo } = client;
        return (
          <div
            key={id}
            className={`flex-1 ${flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        );
      })}
    </div>
  </section>
);

export default Clients;
