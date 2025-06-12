"use client";

import Image from "next/image";
import { useState } from "react";
import Page from "../../assets/images/icons/page.png";
import Folder from "../../assets/images/icons/folder.png";
import User from "../../assets/images/icons/user.png";
import Verified from "../../assets/images/icons/verified.png";
import Controller from "../../assets/images/icons/controller.png";
import Productivity from "../../assets/images/icons/productivity.png";
import Writing from "../../assets/images/icons/writing.png";
import ContentCreation from "../../assets/images/icons/contentcreation.png";
import Business from "../../assets/images/icons/business.png";
import Students from "../../assets/images/icons/student.png";
import Talk from "../../assets/images/icons/talk.png";
import PersonalFinance from "../../assets/images/icons/finance.png";
import Star from "../../../src/assets/images/icons/Star.png";
import ThumbsUp from "../../../src/assets/images/icons/thumbs-up.png";
import View from "../../../src/assets/images/icons/view.png";
import Student from "../../../src/assets/images/icons/student.png";
import Finance from "../../../src/assets/images/icons/finance.png";

const AlchemyDashboard = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slideNumber: number) => {
    setActiveSlide(slideNumber);
  };

  return (
    <>
      <section
        id="dashboard"
        className="relative flex flex-col items-center justify-center text-center mt-24 md:mt-32 lg:mt-48 px-4 md:px-6 lg:px-8"
      >
        <p className="text-sm font-medium uppercase bg-[#1b1b1b] pt-2 pr-[18px] pb-2.5 pl-[18px] rounded-full tracking-[8%] leading-[100%] mb-4">
          / Dashboard
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[56px] font-medium max-w-[838px] leading-[105%] text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50">
          Streamline your workflow with the Alchemy Dashboard
        </h2>
        <p className="text-base md:text-lg lg:text-xl opacity-60 max-w-[838px] leading-[150%] mt-4">
          Transform your ChatGPT interactions with a dynamic workspace, designed to offer powerful
          tools tailored for your needs
        </p>
      </section>
      <div className="flex relative items-center justify-center w-full mt-32 gap-8">
        <div className="relative h-50 sm:h-70 md:h-100 lg:h-120 xl:h-180  flex items-center justify-center">
          <div
            className={`diapo-one absolute z-100 scale-40 sm:scale-50 md:scale-60 lg:scale-85 xl:scale-100 transition-opacity duration-500 ${
              activeSlide === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <section className=" flex relative w-286 h-160 border-2 border-white/8 bg-[#101214] overflow-hidden rounded-xl">
              <div className="ml-16 mb-8 mt-120 max-w-100 text-left">
                <h3 className="text-[32px] leading-[100%] font-medium text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50 h-18">
                  Seamless knowledge management
                </h3>
                <p className="text-white/60 text-[16px] h-13.5 ">
                  Capture directly from ChatGPT and organise seamlessly within the Alchemy
                  Dashboard.
                </p>
              </div>

              <div className="border-16 border-transparent outline-2 outline-white/4 rounded-xl mt-10 p-3 w-168 h-163.25 inter absolute -right-25">
                <form
                  action=""
                  className="flex relative items-center h-13 rounded-xl bg-[#FFFFFF14] border-2 border-white/8"
                >
                  <i className="fa-solid fa-magnifying-glass absolute left-4"></i>
                  <input
                    type="text"
                    placeholder="Search files, documents..."
                    className="ml-12 placeholder:text-[14px]"
                  />
                </form>
                <div className="flex relative items-center h-13 rounded-t-xl mt-3 bg-[#FFFFFF14] border-2 border-white/8 gap-2">
                  <p className="text-[14px] ml-4">File name</p>
                  <i className="fa-solid fa-chevron-down text-xs"></i>
                </div>

                <ul className="text-[14px]">
                  <li className="pl-4 flex items-center gap-2 border-b-2 border-[#FFFFFF0A] bg-[#181B1E] h-17.5">
                    <Image src={Folder} width={38} height={38} alt="" />
                    <div className="flex flex-col text-left text-xs">
                      <p className="font-medium">A New Dawn For AI</p>
                      <p className="text-[#898F93]">4 Files</p>
                    </div>
                  </li>
                  <li className="pl-4 flex items-center h-17.5 gap-2 border-b-2 border-[#FFFFFF0A] bg-[#181B1E]">
                    <Image src={Folder} width={38} height={38} alt="" />
                    <div className="flex flex-col text-left text-xs">
                      <p className="font-medium">Creating the Perfect Prompt</p>
                      <p className="text-[#898F93]">8 Files</p>
                    </div>
                  </li>
                  <li className="pl-4 flex items-center h-17.5 gap-2 border-b-2 border-[#FFFFFF0A] bg-[#181B1E]">
                    <Image src={Folder} width={38} height={38} alt="" />
                    <div className="flex flex-col text-left text-xs">
                      <p className="font-medium">Transforming Workflows</p>
                      <p className="text-[#898F93]">12 Files</p>
                    </div>
                  </li>
                  <li className="pl-4 flex items-center h-17.5 gap-2 border-b-2 border-[#FFFFFF0A] bg-[#181B1E]">
                    <Image src={Folder} width={38} height={38} alt="" />
                    <div className="flex flex-col text-left text-xs">
                      <p className="font-medium">The Power of Curation</p>
                      <p className="text-[#898F93]">12 Files</p>
                    </div>
                  </li>
                  <li className="pl-4 flex items-center h-17.5 gap-2 border-b-2 border-[#FFFFFF0A] bg-[#181B1E]">
                    <Image src={Page} width={38} height={38} alt="" />
                    <div className="flex flex-col text-left text-xs">
                      <p className="font-medium">Quarterly Business Exploration</p>
                    </div>
                  </li>
                  <li className="pl-4 flex items-center h-17.5 gap-2 border-b-2 border-[#FFFFFF0A] bg-[#181B1E]">
                    <Image src={Page} width={38} height={38} alt="" />
                    <div className="flex flex-col text-left text-xs">
                      <p className="font-medium">Maximizing AI Potential with Alchemy</p>
                    </div>
                  </li>
                  <li className="pl-4 flex items-center h-17.5 gap-2 border-b-2 border-[#FFFFFF0A] bg-[#181B1E]">
                    <Image src={Page} width={38} height={38} alt="" />
                    <div className="flex flex-col text-left text-xs">
                      <p className="font-medium">Research Paper Draft</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div
            className={`diapo-two absolute z-90 scale-40 sm:scale-50  md:scale-60 lg:scale-85 xl:scale-100 transition-opacity duration-500 ${
              activeSlide === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <section className="flex  relative w-286 h-160 border-2 border-white/8 bg-[#101214] overflow-hidden rounded-xl items-center justify-between px-12">
              <div className="mt-100 max-w-100 text-left">
                <h3 className="text-[32px] leading-[100%] font-medium text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50 h-18">
                  Craft & share your unique
                  <br />
                  prompts
                </h3>
                <p className="text-white/60 text-[16px] h-13.5 ">
                  A hub for all prompts. Craft yours, share innovations, and save community
                  favourites to your library.
                </p>
              </div>

              <div className="productivity-optimizer w-170 h-127.5 bg-[#181B23] rounded-2xl shadow-lg p-8 max-w-full text-left border-2 border-white/10 inter absolute -right-32 z-50">
                <h3 className="font-semibold text-2xl text-white leading-tight">
                  Productivity Optimizer
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <Image src={User} width={38} height={38} alt="" />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50">
                      by Alchemist
                    </span>
                    <span className="bg-gray-800 text-gray-200 text-[10px] px-2 py-0.5 rounded-full ml-1 flex items-center gap-1">
                      <Image src={Verified} width={16} height={16} alt="" />
                      <span>Verified User</span>
                    </span>
                  </div>
                </div>

                <div className="text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50 text-sm mb-4">
                  Designed for individuals seeking AI assistance in maximizing their efficiency and
                  productivity.
                </div>
                <div className="bg-[#15171c] border-2 border-white/10 rounded-lg p-4 mb-8 h-[236px] overflow-hidden">
                  <div className="text-gray-200 text-sm mb-3">
                    As an AI expert in time management and productivity enhancement, your task is to
                    provide a comprehensive plan to boost one&apos;s efficiency. Use the information
                    below:
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#6048E3] text-white text-[13px] px-2 py-0.5 rounded leading-5 font-medium">
                        #tasks
                      </span>
                      <span className="text-gray-300 text-sm">
                        = List of tasks or jobs that the user has
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#6048E3] text-white text-[13px] px-2 py-0.5 rounded leading-5 font-medium">
                        #time available
                      </span>
                      <span className="text-gray-300 text-sm">
                        = Total hours the user has for the tasks
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#6048E3] text-white text-[13px] px-2 py-0.5 rounded leading-5 font-medium">
                        #constraints
                      </span>
                      <span className="text-gray-300 text-sm">
                        = Any challenges or limitations the user might face
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-3">
                    <div className="w-150 h-3 bg-white/8 border-2 border-white/4 rounded-lg"></div>
                    <div className="w-150 h-3 bg-white/8 border-2 border-white/4 rounded-lg"></div>
                    <div className="w-150 h-3 bg-white/8 border-2 border-white/4 rounded-lg"></div>
                    <div className="w-150 h-3 bg-white/8 border-2 border-white/4 rounded-lg"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 border-t-2 border-white/8 py-4">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-start">
                      <p className="text-white font-semibold text-sm">1.2K</p>
                      <p className="text-xs text-gray-400">Total Appreciation</p>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="text-white font-semibold text-sm">2.6k</p>
                      <p className="text-xs text-gray-400">Total Usage</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <button className="bg-white/8 border-2 border-white/4 text-white px-2 py-2 rounded-lg font-medium text-sm shadow">
                      Use Prompt
                    </button>
                    <button className="bg-[#6048E3] hover:bg-[#7c65f3] text-white px-2 py-2 rounded-lg font-medium text-sm shadow">
                      + Add to library
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div
            className={`diapo-three absolute z-80 scale-40 sm:scale-50  md:scale-60 lg:scale-85 xl:scale-100 transition-opacity duration-500 ${
              activeSlide === 3 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <section className="overflow-hidden flex  relative w-286 h-160 border-2 border-white/8 bg-[#101214] rounded-xl items-center justify-between px-12">
              <div className="mt-100 max-w-100 text-left">
                <h3 className="text-[32px] leading-[100%] font-medium text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50 h-18">
                  Dive into our expansive prompt library
                </h3>
                <p className="text-white/60 text-[16px] h-13.5 ">
                  From foundational to specialized, find prompts tailored for every step of your
                  journey.
                </p>
              </div>
              <section className="absolute w-[672px] h-[698px] -right-16 top-16 border-8 border-white/4 outline outline-white/8 rounded-xl inter">
                <ul className="flex ml-4 mt-4 gap-8 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <li>All Prompts</li>
                  </div>
                  <div className="flex items-center gap-2">
                    <li>Custom Prompts</li>
                    <div className="bg-[#6B48FF]/40 px-2 rounded-full border-2 border-[#6B48FF]/10">
                      <p className="text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50 font-bold">
                        PRO
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <li>Favourite Prompts</li>
                    <div className="bg-[#6B48FF]/40 px-2 rounded-full border-2 border-[#6B48FF]/10">
                      <p className="text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50 font-bold">
                        PRO
                      </p>
                    </div>
                  </div>
                </ul>
                <div className="btns-playground flex flex-col ml-4 gap-2 mt-4">
                  <button className="flex items-center gap-2 h-10 pl-2 border-2 border-white/8 rounded-lg hover:bg-white/8 w-[207px]">
                    <Image
                      src={Controller}
                      width={20}
                      height={20}
                      alt="controller"
                      className="w-4 h-4"
                    />
                    Playground
                  </button>
                  <div className="flex flex-col bg-[#181B1E] h-[312px] w-[207px] gap-1 rounded-lg border-2 border-white/8">
                    <button className="flex items-center gap-2 h-10 pl-2 hover:bg-white/8 hover:rounded-lg">
                      <Image
                        src={Productivity}
                        width={16}
                        height={16}
                        alt="productivity icon"
                        className="w-4 h-4 brightness-0 invert"
                      />
                      Productivity
                    </button>
                    <button className="flex items-center gap-2 h-10 pl-2 hover:bg-white/8 hover:rounded-lg">
                      <Image
                        src={Writing}
                        width={16}
                        height={16}
                        alt="controller"
                        className="brightness-0 invert"
                      />
                      Writing
                    </button>
                    <button className="flex items-center gap-2 h-10 pl-2 hover:bg-white/8 hover:rounded-lg">
                      <Image
                        src={ContentCreation}
                        width={16}
                        height={16}
                        alt="controller"
                        className="brightness-0 invert"
                      />
                      Content Creation
                    </button>
                    <button className="flex items-center gap-2 h-10 pl-2 hover:bg-white/8 hover:rounded-lg">
                      <Image
                        src={Business}
                        width={16}
                        height={16}
                        alt="controller"
                        className="brightness-0 invert"
                      />
                      Business
                    </button>
                    <button className="flex items-center gap-2 h-10 pl-2 hover:bg-white/8 hover:rounded-lg">
                      <Image
                        src={Students}
                        width={16}
                        height={16}
                        alt="controller"
                        className="brightness-0 invert"
                      />
                      Students
                    </button>
                    <button className="flex items-center gap-2 h-10 pl-2 hover:bg-white/8 hover:rounded-lg">
                      <Image
                        src={Talk}
                        width={16}
                        height={16}
                        alt="controller"
                        className="brightness-0 invert"
                      />
                      Talk & Transform
                    </button>
                    <button className="flex items-center gap-2 h-10 pl-2 hover:bg-white/8 hover:rounded-lg">
                      <Image
                        src={PersonalFinance}
                        width={16}
                        height={16}
                        alt="controller"
                        className="brightness-0 invert"
                      />
                      Personal Finance
                    </button>
                  </div>
                </div>
                <div className="cards-container flex flex-col gap-4 absolute top-14 left-64">
                  <div className="flex column-one">
                    <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-2 border-white/8 inter">
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
                      <div className="ml-3 mt-4 font-medium text-left">
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
                    <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-2 border-white/8 inter">
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
                      <div className="ml-3 mt-4 font-medium text-left">
                        <h3>Academic Performance Predictor (CI)</h3>
                        <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                          Dive deep into academic insights, predicting future performances and
                          pinpointing areas for student growth.
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
                  <div className="flex column-two">
                    <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-2 border-white/8 inter">
                      <div className="flex items-center justify-between w-full h-1/3">
                        <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#00A362] text-[#00A362] bg-[#00A3621A] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                          <Image src={Finance} width={16} height={16} alt="" /> Personal Finance
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
                      <div className="ml-3 mt-4 font-medium text-left">
                        <h3>Home Ownership vs Renting Analysis</h3>
                        <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                          Dive into an unbiased analysis of home ownership versus renting tailored
                          to your situation.
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
                    <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-2 border-white/8 inter">
                      <div className="flex items-center justify-between w-full h-1/3">
                        <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FD3A74] text-[#FD3A74] bg-[#FD3A741a] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                          <Image src={Productivity} width={16} height={16} alt="" /> Productivity
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
                      <div className="ml-3 mt-4 font-medium text-left">
                        <h3>Research Findings Summarizer</h3>
                        <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                          Transform dense research into crystal-clear insights with the Research
                          Findings Summarizer.
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
                  <div className="flex column-three">
                    <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-2 border-white/8 inter">
                      <div className="flex items-center justify-between w-full h-1/3">
                        <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#009CB84] text-[#009CB8] bg-[#009CB81a] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
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
                      <div className="ml-3 mt-4 font-medium text-left">
                        <h3>Mental Retention Strategies</h3>
                        <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                          Dive into tailored memory techniques designed to revolutionize your
                          retention capabilities.
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
                    <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-2 border-white/8 inter">
                      <div className="flex items-center justify-between w-full h-1/3">
                        <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#FFBC3F] text-[#FFBC3F] bg-[#FFBC3F1a] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                          <Image src={ContentCreation} width={16} height={16} alt="" /> Content
                          Creation
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
                      <div className="ml-3 mt-4 font-medium text-left">
                        <h3>Optimize My Ad</h3>
                        <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                          Evaluates and refines advertising content to maximize effectiveness,
                          reach, and engagement, leading to improved conversions.
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
                  </div>
                  <div className="flex column-four">
                    <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-2 border-white/8 inter">
                      <div className="flex items-center justify-between w-full h-1/3">
                        <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#00E28E] text-[#00E28E] bg-[#00E28E1a] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                          <Image src={Writing} width={16} height={16} alt="" /> Writing
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
                      <div className="ml-3 mt-4 font-medium text-left">
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
                    <article className="flex flex-col items-center w-[556px] h-48.5 rounded-lg border-2 border-white/8 inter">
                      <div className="flex items-center justify-between w-full h-1/3">
                        <p className="flex items-center justify-center text-[12px] text-left font-medium border border-[#C62E51] text-[#C62E51] bg-[#C62E511a] w-auto rounded-2xl py-0.5 px-2 my-1 ml-3 gap-1">
                          <Image src={Talk} width={16} height={16} alt="" /> Talk & Transform
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
                      <div className="mr-auto ml-3 mb-0 mt-4 font-medium text-left">
                        <h3>Talk To A 80/20 Coach</h3>
                        <p className="text-[#B1B4B7] text-[14px] mt-1 w-95/100">
                          Engage in a dynamic conversation to master the 80/20 principle.
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
                </div>
              </section>
            </section>
          </div>
        </div>
        <div className="btns-group flex absolute max-sm:-bottom-14 2xl:right-14 min-[1350px]:right-14 max-[1350px]:bottom-0 max-xl:-bottom-16 max-lg:-bottom-6 max-md:-bottom-12 min-[1350px]:flex-col gap-4">
          <button
            onClick={() => handleSlideChange(1)}
            className={`btn-section-1 w-[15px] h-[15px] rounded-full transition-colors duration-300 cursor-pointer ${
              activeSlide === 1 ? "bg-[#6048E3]" : "bg-[#33383D]"
            }`}
          ></button>
          <button
            onClick={() => handleSlideChange(2)}
            className={`btn-section-2 w-[15px] h-[15px] rounded-full transition-colors duration-300 cursor-pointer ${
              activeSlide === 2 ? "bg-[#6048E3]" : "bg-[#33383D]"
            }`}
          ></button>
          <button
            onClick={() => handleSlideChange(3)}
            className={`btn-section-3 w-[15px] h-[15px] rounded-full transition-colors duration-300 cursor-pointer ${
              activeSlide === 3 ? "bg-[#6048E3]" : "bg-[#33383D]"
            }`}
          ></button>
        </div>
      </div>
    </>
  );
};

export default AlchemyDashboard;
