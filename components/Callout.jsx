import Image from "next/image";
import CalloutImg from "@/public/callout.svg";
export default function Callout() {
  return (
    <>
      <div className="callout flex">
        <div className="calloutImg w-1/2">
          <Image
            src={CalloutImg}
            width={708}
            height={708}
            alt="callout image"
            className="w-full object-cover"
          />
        </div>
        <div className="textContainer w-1/2 bg-emerald text-center">
          <div className="text relative top-[35%]">
            <h2 className="text-[88px] text-secondary font-EditorialLight">
              Our <i>Mission</i>
            </h2>
            <p className="font-EditorialLight text-[18px] text-secondary -mt-4">
              We aim to make <i>everyone</i> love their natural
              <br /> skin. We want you to feel beautiful with
              <br /> your <i>bare</i> skin. All natural ingredients for the
              <br /> natural woman.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
