import Image from "next/image";
import AlchemyLogo from "../../../public/alchemy_logo.svg";

const Footer = () => {
  return (
    <footer className="mt-48 flex flex-col md:flex-row items-center justify-between p-4 gap-6 md:gap-0">
      <div className="flex-1 text-center md:text-left">
        <Image src={AlchemyLogo} width={125} height={28} alt="alchemy app logo" />
      </div>

      <ul className="flex gap-4 md:gap-8 flex-1 justify-center">
        <li>Support</li>
        <li>Privacy</li>
        <li>Terms</li>
      </ul>

      <div className="flex-1 text-center md:text-right">
        <p className="text-[#7D7D7F]">© 2023 Alchemy</p>
      </div>
    </footer>
  );
};

export default Footer;
