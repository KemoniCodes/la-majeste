import Mark from "@/public/mark.svg";
import Image from "next/image";

export default function Marquee() {
  return (
    <>
      <div className="marquee bg-sapphire">
        <ul className="flex justify-between py-4">
          <li className="items-center text-[29px] text-secondary font-EditorialLight italic uppercase flex">
            Cleanse
            <span className="relative bottom-[0.3rem] mx-8">
              <Image src={Mark} width={18} height={18} alt={"crown"} />
            </span>
          </li>
          <li className="items-center text-[29px] text-secondary font-EditorialLight italic uppercase flex">
            tone
            <span className="relative bottom-[0.3rem] mx-8">
              <Image src={Mark} width={18} height={18} alt={"crown"} />
            </span>
          </li>
          <li className="items-center text-[29px] text-secondary font-EditorialLight italic uppercase flex">
            hydrate
            <span className="relative bottom-[0.3rem] mx-8">
              <Image src={Mark} width={18} height={18} alt={"crown"} />
            </span>
          </li>
          <li className="items-center text-[29px] text-secondary font-EditorialLight italic uppercase flex">
            repeat
            <span className="relative bottom-[0.3rem] mx-8">
              <Image src={Mark} width={18} height={18} alt={"crown"} />
            </span>
          </li>
          <li className="items-center text-[29px] text-secondary font-EditorialLight italic uppercase flex">
            Cleanse
            <span className="relative bottom-[0.3rem] mx-8">
              <Image src={Mark} width={18} height={18} alt={"crown"} />
            </span>
          </li>
          <li className="items-center text-[29px] text-secondary font-EditorialLight italic uppercase flex">
            tone
            <span className="relative bottom-[0.3rem] mx-8">
              <Image src={Mark} width={18} height={18} alt={"crown"} />
            </span>
          </li>
          <li className="items-center text-[29px] text-secondary font-EditorialLight italic uppercase flex">
            hydrate
            <span className="relative bottom-[0.3rem] mx-8">
              <Image src={Mark} width={18} height={18} alt={"crown"} />
            </span>
          </li>
          <li className="items-center text-[29px] text-secondary font-EditorialLight italic uppercase flex">
            repeat
            {/* <span className="relative bottom-[0.3rem] mx-8">
              <Image src={Mark} width={18} height={18} alt={"crown"} />
            </span> */}
          </li>
        </ul>
      </div>
    </>
  );
}
