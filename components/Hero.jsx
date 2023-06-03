import React from "react";
import Link from "next/link";
import Image from "next/image";
import BottleSapphire from "@/public/bottle-sapphire.svg";

export default function Hero() {
  return (
    <>
      <div className="hero bg-ruby h-screen">
        <div className="heroTitle relative top-28">
            <p className="top-[2.5rem] lg:right-[23rem] right-12 font-EditorialLight text-[18px] absolute text-secondary">The skin you love<br/>to love.</p>
          <h1 className="lg:top-auto top-40 relative z-[2] text-secondary font-EditorialLight lg:text-[200px] text-[100px] lg:leading-[12.5rem] leading-[6.5rem] text-center">
            <span className="-ml-36">The</span> <br /> <i>Best</i> Skin <br />
            <span className="ml-36">Ever</span>
          </h1>
          <p className="lg:top-[31rem] top-[35rem] lg:left-72 left-12 font-EditorialLight text-[18px] absolute text-secondary">France based skincare <br/> made to arouse.</p>

          <Image
            src={BottleSapphire}
            width={180}
            height={180}
            alt="sapphire-serum"
            className="m-auto relative lg:bottom-[38rem] bottom-[13rem] lg:w-[12.5%] w-[28%]"
          />
        </div>
      </div>
    </>
  );
}
