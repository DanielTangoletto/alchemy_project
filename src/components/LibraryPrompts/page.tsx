"use client";
import Image from "next/image";
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
import "./styles.css";

const LibraryPrompts = () => {
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
        <div className="scroll-container mt-8">
          {/* <div className="mask-library absolute gradient-library w-270 h-105 rounded-full blur-3xl z-50 opacity-100 left-1/2 top-1/2 -translate-1/2"></div> */}

          {/* FIRST SECTION SCROLL RIGHT */}
          <section className="scroll-right flex gap-2">
            <div className="flex gap-2">
              {/* Business */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#BF58F166] text-[#BF58F1] bg-[#BF58F11A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Business} width={16} height={16} alt="" />
                    Business
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
                  <h3>Business Idea Generator</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Generates unique, innovative, and market-ready business ideas, fostering
                    entrepreneurship and promoting business growth.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                </div>
              </article>

              {/* Students */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#009CB8] text-[#009CB8] bg-[#0088A01A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Student} width={16} height={16} alt="" /> Students
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
                  <h3>Academic Performance Predictor (CI)</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Dive deep into academic insights, predicting future performances and pinpointing
                    areas for student growth.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Personal Finance*/}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#00A362] text-[#00A362] bg-[#00A3621A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Finance} width={16} height={16} alt="" />
                    Personal Finance
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
                  <h3>Home Ownership vs Renting Analysis</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Dive into an unbiased analysis of home ownership versus renting tailored to your
                    situation.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    11K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    43K
                  </div>
                </div>
              </article>

              {/* Productivity */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FD3A74] text-[#FD3A74] bg-[#FD3A741A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Productivity} width={16} height={16} alt="" />
                    Productivity
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
                  <h3>Research Findings Summarizer</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Transform dense research into crystal-clear insights with the Research Findings
                    Summarizer.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Students */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#009CB8] text-[#009CB8] bg-[#009CB81A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Student} width={16} height={16} alt="" />
                    Students
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
                  <h3>Mental Retention Strategies</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Dive into tailored memory techniques designed to revolutionize your retention
                    capabilities.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Content Creation */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FFBC3F] text-[#FFBC3F] bg-[#FFBC3F1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={ContentCrea} width={16} height={16} alt="" />
                    Content Creation
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
                  <h3>Optimize My Ad</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Evaluates and refines advertising content to maximize effectiveness, reach, and
                    engagement, leading to improved conversions.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    4K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    34K
                  </div>
                </div>
              </article>

              {/* Writing */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#00E28E] text-[#00E28E] bg-[#00E28E1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Writing} width={16} height={16} alt="" />
                    Writing
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
                  <h3>Detail Amplifier</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Dive deeper into any topic, unveiling layers of information for a richer
                    understanding and perspective.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Talk & Transform */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#C62E51] text-[#C62E51] bg-[#C62E511A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Talk} width={16} height={16} alt="" />
                    Talk & Transform
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
                  <h3>Talk To A 80/20 Coach</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Engage in a dynamic conversation to master the 80/20 principle in real-world
                    contexts.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>
            </div>
            {/* Duplication du contenu pour l'effet infini */}
            <div className="flex gap-2">
              {/* Business */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#BF58F166] text-[#BF58F1] bg-[#BF58F11A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Business} width={16} height={16} alt="" />
                    Business
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
                  <h3>Business Idea Generator</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Generates unique, innovative, and market-ready business ideas, fostering
                    entrepreneurship and promoting business growth.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                </div>
              </article>

              {/* Students */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#009CB8] text-[#009CB8] bg-[#0088A01A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Student} width={16} height={16} alt="" /> Students
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
                  <h3>Academic Performance Predictor (CI)</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Dive deep into academic insights, predicting future performances and pinpointing
                    areas for student growth.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Personal Finance*/}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#00A362] text-[#00A362] bg-[#00A3621A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Finance} width={16} height={16} alt="" />
                    Personal Finance
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
                  <h3>Home Ownership vs Renting Analysis</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Dive into an unbiased analysis of home ownership versus renting tailored to your
                    situation.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    11K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    43K
                  </div>
                </div>
              </article>

              {/* Productivity */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FD3A74] text-[#FD3A74] bg-[#FD3A741A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Productivity} width={16} height={16} alt="" />
                    Productivity
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
                  <h3>Research Findings Summarizer</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Transform dense research into crystal-clear insights with the Research Findings
                    Summarizer.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Students */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#009CB8] text-[#009CB8] bg-[#009CB81A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Student} width={16} height={16} alt="" />
                    Students
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
                  <h3>Mental Retention Strategies</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Dive into tailored memory techniques designed to revolutionize your retention
                    capabilities.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Content Creation */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FFBC3F] text-[#FFBC3F] bg-[#FFBC3F1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={ContentCrea} width={16} height={16} alt="" />
                    Content Creation
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
                  <h3>Optimize My Ad</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Evaluates and refines advertising content to maximize effectiveness, reach, and
                    engagement, leading to improved conversions.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    4K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    34K
                  </div>
                </div>
              </article>

              {/* Writing */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#00E28E] text-[#00E28E] bg-[#00E28E1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Writing} width={16} height={16} alt="" />
                    Writing
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
                  <h3>Detail Amplifier</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Dive deeper into any topic, unveiling layers of information for a richer
                    understanding and perspective.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Talk & Transform */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#C62E51] text-[#C62E51] bg-[#C62E511A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Talk} width={16} height={16} alt="" />
                    Talk & Transform
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
                  <h3>Talk To A 80/20 Coach</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Engage in a dynamic conversation to master the 80/20 principle in real-world
                    contexts.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* SECOND SECTION SCROLL LEFT */}
          <section className="scroll-left flex gap-2 mt-2">
            <div className="flex gap-2">
              {/* Productivity */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FD3A74] text-[#FD3A74] bg-[#FD3A741A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Productivity} width={16} height={16} alt="" />
                    Productivity
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
                  <h3>Solution Seeker</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    The prompt seeks an unconventional solution to a specified problem, considering
                    its context, constraints, and goals.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    431
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    9.8K
                  </div>
                </div>
              </article>

              {/* Writing */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#00E28E] text-[#00E28E] bg-[#00E28E1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Writing} width={16} height={16} alt="" />
                    Writing
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
                  <h3>Hollywood Story Craft</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Provides comprehensive assistance in creating compelling, Hollywood-syle
                    narratives for any type of story.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    111
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    985
                  </div>
                </div>
              </article>

              {/* Productivity */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FD3A74] text-[#FD3A74] bg-[#FD3A741A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Productivity} width={16} height={16} alt="" />
                    Productivity
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
                  <h3>Compare & Contrast</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Analyzes two distinct subjects, highlighting their similarities and differences,
                    thereby providing a comprehensive comparison.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={CrossStar} width={14} height={14} alt="" className="" />
                    1.5K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.5K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    18.2K
                  </div>
                </div>
              </article>

              {/* Content Creation */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FFBC3F] text-[#FFBC3F] bg-[#FFBC3F1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={ContentCrea} width={16} height={16} alt="" />
                    Content Creation
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
                  <h3>Title Hook Architect</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Designs persuasive titles that pique reader interest, optimize engagement, and
                    increase click-through rates.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.1K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    8K
                  </div>
                </div>
              </article>

              {/* Writing */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#00E28E] text-[#00E28E] bg-[#00E28E1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Writing} width={16} height={16} alt="" />
                    Writing
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
                  <h3>Character Backstory Builder</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Dive deep into your character&apos;s lore with intricate detailing and vivid
                    imagination.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    11K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    43K
                  </div>
                </div>
              </article>

              {/* Business */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#BF58F166] text-[#BF58F1] bg-[#BF58F11A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Business} width={16} height={16} alt="" />
                    Business
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
                  <h3>Winning Elevator Pitch</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Crafts concise, compelling elevator pitches that effectively communicate a
                    business idea&apos;s unique value proposition.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Students */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#009CB8] text-[#009CB8] bg-[#009CB81A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Student} width={16} height={16} alt="" />
                    Students
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
                  <h3>Thesis Builder</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Assists in constructing robust, research-driven thesis statements, simplifying
                    the academic writing process.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Students */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#A72AEB] text-[#A72AEB] bg-[#A72AEB1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Simulation} width={16} height={16} alt="" />
                    Simulations
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
                  <h3>Quick-fit Practicer</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Enhances reaction times and quick-thinking abilities through dynamic, real-time
                    simulations.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>
            </div>
            {/* Duplication du contenu pour l'effet infini */}
            <div className="flex gap-2">
              {/* Productivity */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FD3A74] text-[#FD3A74] bg-[#FD3A741A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Productivity} width={16} height={16} alt="" />
                    Productivity
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
                  <h3>Solution Seeker</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    The prompt seeks an unconventional solution to a specified problem, considering
                    its context, constraints, and goals.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    431
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    9.8K
                  </div>
                </div>
              </article>

              {/* Writing */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#00E28E] text-[#00E28E] bg-[#00E28E1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Writing} width={16} height={16} alt="" />
                    Writing
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
                  <h3>Hollywood Story Craft</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Provides comprehensive assistance in creating compelling, Hollywood-syle
                    narratives for any type of story.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    111
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    985
                  </div>
                </div>
              </article>

              {/* Productivity */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FD3A74] text-[#FD3A74] bg-[#FD3A741A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Productivity} width={16} height={16} alt="" />
                    Productivity
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
                  <h3>Compare & Contrast</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Analyzes two distinct subjects, highlighting their similarities and differences,
                    thereby providing a comprehensive comparison.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={CrossStar} width={14} height={14} alt="" className="" />
                    1.5K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.5K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    18.2K
                  </div>
                </div>
              </article>

              {/* Content Creation */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FFBC3F] text-[#FFBC3F] bg-[#FFBC3F1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={ContentCrea} width={16} height={16} alt="" />
                    Content Creation
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
                  <h3>Title Hook Architect</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Designs persuasive titles that pique reader interest, optimize engagement, and
                    increase click-through rates.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.1K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    8K
                  </div>
                </div>
              </article>

              {/* Writing */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#00E28E] text-[#00E28E] bg-[#00E28E1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Writing} width={16} height={16} alt="" />
                    Writing
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
                  <h3>Character Backstory Builder</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Dive deep into your character&apos;s lore with intricate detailing and vivid
                    imagination.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    11K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    43K
                  </div>
                </div>
              </article>

              {/* Business */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#BF58F166] text-[#BF58F1] bg-[#BF58F11A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Business} width={16} height={16} alt="" />
                    Business
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
                  <h3>Winning Elevator Pitch</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Crafts concise, compelling elevator pitches that effectively communicate a
                    business idea&apos;s unique value proposition.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Students */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#009CB8] text-[#009CB8] bg-[#009CB81A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Student} width={16} height={16} alt="" />
                    Students
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
                  <h3>Thesis Builder</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Assists in constructing robust, research-driven thesis statements, simplifying
                    the academic writing process.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>

              {/* Students */}
              <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-6 border-white/8 inter">
                <div className="flex items-center justify-between w-full h-1/3">
                  <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#A72AEB] text-[#A72AEB] bg-[#A72AEB1A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                    <Image src={Simulation} width={16} height={16} alt="" />
                    Simulations
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
                  <h3>Quick-fit Practicer</h3>
                  <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                    Enhances reaction times and quick-thinking abilities through dynamic, real-time
                    simulations.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-end mr-8 mt-2 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-xs">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B1B4B7]">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    382
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default LibraryPrompts;
