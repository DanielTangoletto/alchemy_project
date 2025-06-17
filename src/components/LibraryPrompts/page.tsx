"use client";
import Image, { StaticImageData } from "next/image";
import Star from "../../../src/assets/images/icons/Star.png";
import ThumbsUp from "../../../src/assets/images/icons/thumbs-up.png";
import View from "../../../src/assets/images/icons/view.png";
import Business from "../../../src/assets/images/icons/business.png";
import Student from "../../../src/assets/images/icons/student.png";
import Finance from "../../../src/assets/images/icons/finance.png";
import Productivity from "../../../src/assets/images/icons/productivity.png";
import ContentCrea from "../../../src/assets/images/icons/contentcreation.png";
import Writing from "../../../src/assets/images/icons/writing.png";
import Talk from "../../../src/assets/images/icons/talk.png";
import Simulation from "../../../src/assets/images/icons/Simulation.png";
import CrossStar from "../../../src/assets/images/icons/CrossStar.png";
// import "./styles.css";
import data from "./data.json";
import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";

interface Prompt {
  id: number;
  category: string;
  title: string;
  description: string;
  likes: string;
  views: string;
  stars?: string;
  icon: string;
}

interface CategoryStyles {
  border: string;
  text: string;
  bg: string;
}

const CATEGORY_STYLES: Record<string, CategoryStyles> = {
  Business: {
    border: "border-[#BF58F166]",
    text: "text-[#BF58F1]",
    bg: "bg-[#BF58F11A]",
  },
  Students: {
    border: "border-[#009CB8]",
    text: "text-[#009CB8]",
    bg: "bg-[#009CB81A]",
  },
  "Personal Finance": {
    border: "border-[#00A362]",
    text: "text-[#00A362]",
    bg: "bg-[#00A3621A]",
  },
  Productivity: {
    border: "border-[#FD3A74]",
    text: "text-[#FD3A74]",
    bg: "bg-[#FD3A741A]",
  },
  "Content Creation": {
    border: "border-[#FFBC3F]",
    text: "text-[#FFBC3F]",
    bg: "bg-[#FFBC3F1A]",
  },
  Writing: {
    border: "border-[#00E28E]",
    text: "text-[#00E28E]",
    bg: "bg-[#00E28E1A]",
  },
  "Talk & Transform": {
    border: "border-[#C62E51]",
    text: "text-[#C62E51]",
    bg: "bg-[#C62E511A]",
  },
  Simulations: {
    border: "border-[#A72AEB]",
    text: "text-[#A72AEB]",
    bg: "bg-[#A72AEB1A]",
  },
};

const ICONS: Record<string, StaticImageData> = {
  Business,
  Student,
  Finance,
  Productivity,
  ContentCrea,
  Writing,
  Talk,
  Simulation,
};

const PromptCard = ({ prompt }: { prompt: Prompt }) => {
  const styles = useMemo(
    () => CATEGORY_STYLES[prompt.category] || CATEGORY_STYLES.Business,
    [prompt.category]
  );
  const Icon = useMemo(() => ICONS[prompt.icon] || Business, [prompt.icon]);

  return (
    <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
      <div className="flex items-center justify-between w-full h-1/3">
        <p
          className={`flex items-center justify-center text-[12px] text-left font-medium border ${styles.border} ${styles.text} ${styles.bg} w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1`}
        >
          <Image src={Icon} width={16} height={16} alt="" />
          {prompt.category}
        </p>
        <div className="flex gap-2 mr-4">
          <button className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-md cursor-pointer">
            <Image src={Star} width={14} height={14} alt="" className="" />
          </button>
          <button className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-md cursor-pointer">
            <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
          </button>
        </div>
      </div>
      <div className="h-0.25 w-95/100 bg-[#33383D]"></div>
      <div className="ml-3 mt-4 font-medium">
        <h3>{prompt.title}</h3>
        <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">{prompt.description}</p>
      </div>
      <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
        {prompt.stars && (
          <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
            <Image src={CrossStar} width={14} height={14} alt="" className="" />
            {prompt.stars}
          </div>
        )}
        <div className="flex items-center gap-1.5 text-xs">
          <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
          {prompt.likes}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
          <Image src={View} width={14} height={14} alt="" className="" />
          {prompt.views}
        </div>
      </div>
    </article>
  );
};

const LibraryPrompts = () => {
  const prompts = useMemo(() => data.prompts, []);
  const firstHalf = useMemo(() => prompts.slice(0, 8), [prompts]);
  const secondHalf = useMemo(() => prompts.slice(8), [prompts]);
  const scrollRightRef = useRef<HTMLDivElement>(null);
  const scrollLeftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRightRef.current || !scrollLeftRef.current) return;

    const scrollRightContainer = scrollRightRef.current;
    const scrollLeftContainer = scrollLeftRef.current;
    const scrollRightContent = scrollRightContainer.querySelector(".scroll-content") as HTMLElement;
    const scrollLeftContent = scrollLeftContainer.querySelector(".scroll-content") as HTMLElement;

    if (!scrollRightContent || !scrollLeftContent) return;

    const rightClone = scrollRightContent.cloneNode(true);
    const leftClone = scrollLeftContent.cloneNode(true);
    scrollRightContainer.appendChild(rightClone);
    scrollLeftContainer.appendChild(leftClone);

    const createScrollAnimation = (content: HTMLElement, clone: Node) => {
      return gsap
        .timeline({
          repeat: -1,
          defaults: { ease: "none" },
        })
        .to([content, clone], {
          x: -content.offsetWidth,
          duration: 60,
          ease: "linear",
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % content.offsetWidth),
          },
        });
    };

    const tlRight = createScrollAnimation(scrollRightContent, rightClone);
    const tlLeft = createScrollAnimation(scrollLeftContent, leftClone);

    return () => {
      tlRight.kill();
      tlLeft.kill();
    };
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <section
          id="prompt"
          className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
        >
          <div className="w-full max-w-4xl mx-auto space-y-4 md:space-y-6">
            <p className="text-4xl sm:text-5xl font-medium">/</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-medium leading-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50 px-2">
              Supercharge your work with powerful, curated prompts
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400/90 leading-[150%] mx-auto px-4 max-w-[32rem] md:max-w-[838px]">
              Our expansive library of prompts, crafted by human experts, ensures that you achieve
              optimal results in every conversation.
            </p>
          </div>
        </section>
        <div className="scroll-container mt-8 overflow-hidden w-full">
          {/* FIRST SECTION SCROLL RIGHT */}
          <section ref={scrollRightRef} className="scroll-right flex gap-2 ">
            <div className="scroll-content flex gap-2">
              {firstHalf.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </section>

          {/* SECOND SECTION SCROLL LEFT */}
          <section ref={scrollLeftRef} className="scroll-right flex gap-2 mt-3">
            <div className="scroll-content flex gap-2">
              {secondHalf.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default LibraryPrompts;
