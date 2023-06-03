import Image from "next/image";
import Secondary from "@/public/secondary.svg";

<style>ul {}</style>;

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer lg:flex block lg:px-20 px-0 pt-12 pb-8 mx-20 border-t-[1px] border-solid border-primary">
          <div className="logo lg:w-[60%] w-full lg:pb-0 pb-8">
            <Image
              src={Secondary}
              width={250}
              height={250}
              alt="seoncdary logo"
            />
          </div>
          <div className="info flex lg:gap-20 gap-8">
            <ul className="">
              <li className="text-start text-[18px] text-primary font-EditorialNew"> Socials</li>
              <li className="text-start text-[18px] text-primary font-EditorialLight">Instagram</li>
              <li className="text-start text-[18px] text-primary font-EditorialLight">Facebook</li>
              <li className="text-start text-[18px] text-primary font-EditorialLight">TikTok</li>
            </ul>
            <ul className="">
              <li className="text-start text-[18px] text-primary font-EditorialNew">Sitemap</li>
              <li className="text-start text-[18px] text-primary font-EditorialLight">Home</li>
              <li className="text-start text-[18px] text-primary font-EditorialLight">Products</li>
              <li className="text-start text-[18px] text-primary font-EditorialLight">About</li>
            </ul>
            <ul className="">
              <li className="text-start text-[18px] text-primary font-EditorialNew">Info</li>
              <li className="text-start text-[18px] text-primary font-EditorialLight">FAQ</li>
              <li className="text-start text-[18px] text-primary font-EditorialLight">Shipping</li>
              <li className="text-start text-[18px] text-primary font-EditorialLight">Returns</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
