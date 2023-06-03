import Image from "next/image";
import Arrow from "@/public/prev.svg";

export default function Newsletter() {
  return (
    <>
      <div className="newsletter text-center pt-40 pb-20">
        <p className="text-[18px] text-primary font-EditorialNew">
          New products, exclusive offers + more
        </p>

        <div className="input flex flex-col w-[35%] mx-auto">
          <div className="flex justify-between">
            <label
              className=" relative top-[1.5rem] text-start text-[18px] text-primary font-EditorialNew opacity-[50%]"
              htmlFor="email"
            >
              Email Address
            </label>
            <Image
              src={Arrow}
              width={20}
              height={20}
              alt="arrow"
              className="relative top-[1.5rem] rotate-180"
            />
          </div>
          <input
            type="email"
            name=""
            id="email"
            className=" border-b-[1px] border-solid border-primary bg-transparent"
          />
        </div>
      </div>
    </>
  );
}
