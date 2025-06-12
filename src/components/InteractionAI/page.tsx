import Image from "next/image";
import Halo from "../../../src/assets/images/halo.png";

const InteractionAI = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-center mt-24 md:mt-48 px-4">
        <h2 className="text-3xl md:text-[44px] font-medium w-full md:w-[838px] leading-[105%] text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50">
          Redefine AI interaction with Alchemy
        </h2>
        <p className="text-lg md:text-xl opacity-60 w-full md:w-[838px] leading-[150%] mt-4">
          Harness the power of AI and elevate your productivity, positioning yourself at the
          forefront of your field.
        </p>
        <div className="w-full max-w-[952px] mt-8">
          <Image src={Halo} width={952} height={747} alt="" className="w-full h-auto" />
        </div>
      </section>
    </>
  );
};

export default InteractionAI;
