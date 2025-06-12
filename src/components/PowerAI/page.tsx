import Image from "next/image";
import Chip from "../../../src/assets/images/Chip.png";
import Chart from "../../../src/assets/images/icons/b-chart.png";
import Bulb from "../../../src/assets/images/icons/bulb.png";
import Research from "../../../src/assets/images/icons/research.png";
import MagicWand from "../../../src/assets/images/icons/magic-wand.png";
import AILogo from "../../../src/assets/images/icons/ai.png";
import Book from "../../../src/assets/images/icons/book-open.png";

const PowerAI = () => {
  return (
    <div>
      <section
        id="benefit"
        className="relative flex flex-col items-center justify-center text-center mt-48 md:mt-32 lg:mt-48 px-4 md:px-6 lg:px-8"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[56px] font-medium max-w-[838px] leading-[105%] text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50">
          Unlock the power of AI
        </h2>
        <p className="text-base md:text-lg lg:text-xl opacity-60 max-w-[838px] leading-[150%] mt-4">
          From enhanced interactions to streamlined workflows, step into a realm where productivity
          and AI go hand in hand
        </p>
        <div className="relative flex flex-col lg:flex-row items-center justify-between mt-16 w-full max-w-[1400px] px-8">
          <ul className="text-center lg:text-right mb-12 lg:mb-0 w-[90%] lg:w-[400px] relative z-10">
            <li className="flex items-center justify-center lg:justify-end gap-2 text-base md:text-lg lg:text-xl font-medium mb-1">
              Precision in every interaction
              <Image src={Chart} width={20} height={20} alt="Chart icon representing precision" />
            </li>
            <li className="opacity-60 text-[13px] md:text-[14px] lg:text-[16px] mb-12 lg:mb-24">
              Our interface and prompts are designed to ensure clarity and effortless interaction.
            </li>
            <li className="flex items-center justify-center lg:justify-end gap-2 text-base md:text-lg lg:text-xl font-medium mb-1">
              Curated excellence
              <Image
                src={Bulb}
                width={20}
                height={20}
                alt="Light bulb icon representing excellence"
              />
            </li>
            <li className="opacity-60 text-[13px] md:text-[14px] lg:text-[16px] mb-12 lg:mb-24">
              Every tool and prompt is meticulously crafted, based on user journey and touch-points.
            </li>
            <li className="flex items-center justify-center lg:justify-end gap-2 text-base md:text-lg lg:text-xl font-medium mb-1">
              Frameworks by experts
              <Image
                src={Research}
                width={20}
                height={20}
                alt="Research icon representing expertise"
              />
            </li>
            <li className="opacity-60 text-[13px] md:text-[14px] lg:text-[16px]">
              Trust in frameworks grounded in years of industry expertise.
            </li>
          </ul>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] -z-10">
            <Image
              src={Chip}
              width={900}
              height={900}
              alt="Decorative AI chip background"
              className="w-full h-full object-contain opacity-30 xl:opacity-100"
            />
          </div>
          <ul className="text-center lg:text-left w-[90%] lg:w-[400px] relative z-10">
            <li className="flex items-center justify-center lg:justify-start gap-2 text-base md:text-lg lg:text-xl font-medium mb-1">
              <Image
                src={MagicWand}
                width={20}
                height={20}
                alt="Magic wand icon representing prompt alchemy"
              />
              Prompt alchemy
            </li>
            <li className="opacity-60 text-[13px] md:text-[14px] lg:text-[16px] mb-12 lg:mb-24">
              Transforming expertise into action. We distill human insights into prompts primed for
              success.
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2 text-base md:text-lg lg:text-xl font-medium mb-1">
              <Image src={AILogo} width={20} height={20} alt="AI icon representing innovation" />
              Innovation at the forefront
            </li>
            <li className="opacity-60 text-[13px] md:text-[14px] lg:text-[16px] mb-12 lg:mb-24">
              With Alchemy, you&apos;re not just using a tool; you&apos;re experiencing the future
              of ChatGPT interactions.
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2 text-base md:text-lg lg:text-xl font-medium mb-1">
              <Image
                src={Book}
                width={20}
                height={20}
                alt="Book icon representing productivity suite"
              />
              AI productivity suite
            </li>
            <li className="opacity-60 text-[13px] md:text-[14px] lg:text-[16px]">
              Alchemy consolidates enhanced tools, prompts, and features for optimal productivity.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PowerAI;
