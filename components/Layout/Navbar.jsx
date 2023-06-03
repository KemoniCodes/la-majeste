import Mark from "@/public/mark.svg";
import Logo from "@/public/logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="nav flex bg-ruby pt-8 lg:px-[62px] px-8 justify-between items-center">
        <Image src={Mark} height={30} width={30} alt="crown" />
        <Image src={Logo} height={130} width={130} alt="logo" />
        <h3 className="cart text-secondary font-EditorialNew text-[18px]">Cart (0)</h3>
      </nav>
    </>
  );
}
