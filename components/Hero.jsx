import React from "react";
import Link from "next/link";
import Image from "next/image";
import BottleSapphire from "@/public/bottle-sapphire.svg";

export default function Hero() {
  return (
    <>
      <div className="hero bg-ruby h-screen">
        <div className="heroTitle relative top-28">
            <p className=" font-EditorialLight text-[18px] absolute text-secondary">The skin you love<br/>to love.</p>
          <h1 className="relative z-[2] text-secondary font-EditorialLight text-[200px] leading-[12.5rem] text-center">
            <span className=" -ml-36">The</span> <br /> <i>Best</i> Skin <br />{" "}
            <span className="ml-36">Ever</span>
          </h1>
          <p className=" font-EditorialLight text-[18px] absolute text-secondary">France based skincare <br/> made to arouse.</p>

          <Image
            src={BottleSapphire}
            width={180}
            height={180}
            alt="sapphire-serum"
            className="m-auto relative bottom-[38rem]"
          />
        </div>
      </div>
    </>
  );
}
