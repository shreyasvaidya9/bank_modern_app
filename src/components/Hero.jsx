import React from "react";

import GetStarted from "./GetStarted";

import styles from "../styles";
import { discount, robot } from "../assets";

const { paddingY, flexStart, paragraph, flexCenter } = styles;

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${paddingY}`}>
    <div className={`flex-1 ${flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${paragraph} ml-2 uppercase`}>
          <span className="text-white"> 20%</span> Discount for{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="capitalize flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">generation</span>{" "}
          <br className="sm:block hidden" />
          payment method.
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <p className={`${paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex-1 flex ${flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[85%] bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
