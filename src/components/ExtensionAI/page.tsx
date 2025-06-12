"use client";
import Image from "next/image";
import InkPen from "../../assets/images/icons/ink_pen.png";
import Writing from "../../assets/images/icons/writing.png";
import ThumbsUp from "../../assets/images/icons/thumbs-up.png";
import View from "../../assets/images/icons/view.png";
import Productivity from "../../assets/images/icons/productivity.png";
import Star from "../../assets/images/icons/Star.png";
import Send from "../../assets/images/icons/send.png";
import FilePlus from "../../assets/images/icons/file-plus.png";
import Page from "../../assets/images/icons/page.png";
import List from "../../assets/images/icons/unordered-list.png";
import Grid from "../../assets/images/icons/grid.png";
import { useState, useEffect } from "react";

const ExtensionAI = () => {
  const [showRegexContainer, setShowRegexContainer] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Vérifie la taille initiale
    checkScreenSize();

    // Ajoute l'écouteur d'événement
    window.addEventListener("resize", checkScreenSize);

    // Nettoie l'écouteur lors du démontage
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (isLargeScreen) {
      setShowRegexContainer(value.startsWith("/"));
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setShowRegexContainer(false);
  };

  return (
    <>
      <section id="extension" className="relative flex flex-col items-center justify-center text-center mt-24 md:mt-32 lg:mt-48 px-4 md:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase bg-[#1b1b1b] pt-2 pr-[18px] pb-2.5 pl-[18px] rounded-full tracking-[8%] leading-[100%] mb-4">
          / Extension
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[56px] font-medium max-w-[838px] leading-[105%] text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50">
          An extension that transforms your AI productivity
        </h2>
        <p className="text-base md:text-lg lg:text-xl opacity-60 max-w-[838px] leading-[150%] mt-4">
          Transform your ChatGPT interactions with a dynamic workspace, designed to offer powerful
          tools tailored for your needs
        </p>
      </section>
      <div className="flex items-center justify-center mt-16">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[448px_448px_448px] grid-rows-[auto_auto] gap-4 lg:gap-2 w-full max-w-[1344px] px-4">
          {/* ACCESS TO PROMPTS */}
          <article className="article-one row-span-1 md:row-span-2 lg:row-span-2 col-span-1 bg-[#101214CC] rounded-lg overflow-hidden lg:h-[800px] p-4 md:p-6 lg:p-0">
            <div className="ml-0 md:ml-4 lg:ml-8 mt-8">
              <h3 className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50">
                Superfast access to prompts
              </h3>
              <p className="text-white/60 text-[14px] md:text-[15px] lg:text-[16px] mt-2 md:mt-3 lg:mt-1 w-full md:w-[95%] lg:w-95/100">
                Your entire prompt library is always just a click away.
              </p>
            </div>
            <div className="flex relative items-center mt-6 md:mt-8 lg:mt-8 inter">
              <form
                action="input"
                className="flex items-center w-full md:w-[95%] lg:w-91.5 h-12 md:h-12.5 ml-0 md:ml-4 lg:ml-8 border-2 relative rounded-xl border-white/8 bg-[#FFFFFF0A]"
              >
                <i className="fa-solid fa-magnifying-glass absolute left-4"></i>
                <input
                  type="search"
                  name="search_input"
                  placeholder="Search"
                  id=""
                  className="w-full md:w-[95%] lg:w-91.5 pl-10 placeholder:text-[#D8DADB] text-[#D8DADB] text-[14px] md:text-[15px] lg:text-base"
                />
              </form>
              <button className="flex-shrink-0 relative items-center w-12 h-12 md:w-12.5 md:h-12.5 ml-3 border-2 rounded-xl border-white/8 bg-[#FFFFFF0A] cursor-pointer">
                <div className="flex items-center justify-center w-full">
                  <i className="fa-solid fa-filter text-[16px] md:text-[18px]"></i>
                </div>
              </button>
            </div>
            <div className="flex relative items-center justify-between mt-6 md:mt-8 lg:mt-8 py-4 ml-0 md:ml-4 lg:ml-8 border-white/4 border-t-2 border-b-2 inter">
              <form
                action="input"
                className="flex items-center h-12 md:h-12.5 border-2 relative rounded-xl border-white/8 bg-[#4024a2]"
              >
                <Image src={InkPen} height={25} width={25} alt="" className="absolute left-3" />
                <input
                  type="search"
                  name="search_input"
                  placeholder="Writing"
                  id=""
                  className="w-[200px] md:w-[250px] lg:w-80 pl-10 h-12 md:h-12.5 placeholder:text-[#D8DADB] text-[#D8DADB] text-[14px] md:text-[15px] lg:text-base"
                />
              </form>
              <div className="flex relative items-center ml-4 md:ml-6 bg-white/4 rounded-xl border-2 border-white/8 w-20 md:w-22 lg:w-24 h-12 md:h-12.5 gap-1">
                <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 hover:bg-white/4 hover:border-1 hover:outline-1 hover:border-white/8 hover:outline-white/4 rounded-xl cursor-pointer">
                  <Image src={List} width={24} height={24} alt="" className="" />
                </div>
                <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 hover:bg-white/4 hover:border-1 hover:outline-1 hover:border-white/8 hover:outline-white/4 rounded-xl cursor-pointer">
                  <Image src={Grid} width={24} height={24} alt="" className="" />
                </div>
              </div>
            </div>
            <section className="flex flex-col w-full md:w-[95%] lg:w-95/100 h-auto lg:h-69 border-2 border-white/12 rounded-xl ml-0 md:ml-4 lg:ml-8 mt-4 md:mt-6 lg:mt-4 bg-[#181B1E] inter p-4 md:p-6 lg:p-0">
              <p className="flex items-center justify-center text-sm font-medium border border-[#00E28E] text-[#00E28E] bg-[#00E28E1a] w-25 rounded-2xl py-1.25 px-2.5 gap-1 ml-0 md:ml-2 lg:ml-4 mt-0 md:mt-2 lg:mt-4.5">
                <Image src={Writing} width={16} height={16} alt="" /> Writing
              </p>
              <div className="ml-0 md:ml-2 lg:ml-4 mt-4 md:mt-6 lg:mt-4">
                <div className="h-0.25 mt-2 mb-4 w-full md:w-[95%] lg:w-95/100 bg-[#33383D]"></div>
                <h3 className="text-base md:text-[15px] lg:text-base font-medium">
                  Hollywood Story Craft
                </h3>
                <p className="text-[#898F93] mt-2 md:mt-3 lg:mt-1 w-full md:w-[95%] lg:w-90/100 leading-6 md:leading-6.25 text-[13px] md:text-[14px] lg:text-base">
                  Provides comprehensive assistance in creating compelling, Hollywood-style
                  narratives for any type of story.
                </p>
              </div>
              <div className="media-stats flex lg:flex gap-4 w-full justify-start mr-0 md:mr-4 lg:mr-8 ml-0 md:ml-2 lg:ml-4 mt-4 md:mt-6 lg:mt-7 text-[#B1B4B7]">
                <div className="flex items-center gap-1.5 text-[13px] md:text-[14px] lg:text-sm bg-white/10 py-1.25 px-2.5 rounded-full">
                  <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                  1.2K
                </div>
                <div className="flex items-center gap-1.5 text-[13px] md:text-[14px] lg:text-sm text-[#B1B4B7] py-1.25 px-2.5 bg-white/10 rounded-full">
                  <Image src={View} width={14} height={14} alt="" className="" />
                  382
                </div>
              </div>
            </section>
            <section className="flex flex-col w-full md:w-[95%] lg:w-95/100 h-auto lg:h-69 border-2 border-white/12 rounded-xl ml-0 md:ml-4 lg:ml-8 mt-4 md:mt-6 lg:mt-4 bg-[#181B1E] inter p-4 md:p-6 lg:p-0">
              <p className="flex items-center justify-center text-sm font-medium border border-[#00E28E] text-[#00E28E] bg-[#00E28E1a] w-25 rounded-2xl py-1.25 px-2.5 gap-1 ml-0 md:ml-2 lg:ml-4 mt-0 md:mt-2 lg:mt-4.5">
                <Image src={Writing} width={16} height={16} alt="" /> Writing
              </p>
              <div className="ml-0 md:ml-2 lg:ml-4 mt-4 md:mt-6 lg:mt-4">
                <div className="h-0.25 mt-2 mb-4 w-full md:w-[95%] lg:w-95/100 bg-[#33383D]"></div>
                <h3 className="text-base md:text-[15px] lg:text-base font-medium">
                  Captivating Statements
                </h3>
                <p className="text-[#898F93] mt-2 md:mt-3 lg:mt-1 w-full md:w-[95%] lg:w-90/100 leading-6 md:leading-6.25 text-[13px] md:text-[14px] lg:text-base">
                  Creates impactful and captivating statements suitable for different contexts,
                  ensuring reader engagement.
                </p>
              </div>
              <div className="media-stats flex lg:flex gap-4 w-full justify-start mr-0 md:mr-4 lg:mr-8 ml-0 md:ml-2 lg:ml-4 mt-4 md:mt-6 lg:mt-7 text-[#B1B4B7]">
                <div className="flex items-center gap-1.5 text-[13px] md:text-[14px] lg:text-sm bg-white/10 py-1.25 px-2.5 rounded-full">
                  <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                  1.2K
                </div>
                <div className="flex items-center gap-1.5 text-[13px] md:text-[14px] lg:text-sm text-[#B1B4B7] py-1.25 px-2.5 bg-white/10 rounded-full">
                  <Image src={View} width={14} height={14} alt="" className="" />
                  382
                </div>
              </div>
            </section>
          </article>
          {/* TAILOR YOUR PROMPTS */}
          <article className="article-two row-span-1 col-span-1 bg-[#101214CC] rounded-lg overflow-hidden lg:h-[392px] p-3 md:p-4 lg:p-4">
            <div className="ml-0 md:ml-3 lg:ml-4 lg:mt-4">
              <h3 className="text-xl md:text-[22px] lg:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-50">
                Tailor your prompts
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] lg:text-[16px] mt-2 md:mt-2 lg:mt-1 w-full md:w-[95%] lg:w-95/100 leading-relaxed">
                Customize inputs for precise and personalized ChatGPT responses
              </p>
            </div>
            <section className="flex flex-col lg:flex-row ml-0 md:ml-3 lg:ml-4 mt-5 md:mt-5 lg:mt-8 bg-[#101214] border-white/8 w-full md:w-[95%] lg:w-153 h-auto lg:h-81 rounded-lg border-2 p-3 md:p-4 lg:p-0">
              <div className="flex flex-col justify-evenly w-full md:w-[95%] lg:w-78.5 h-auto lg:h-41 bg-[#181B1E] border-white/12 border rounded-lg ml-0 md:ml-2 lg:ml-4 mt-0 md:mt-2 lg:mt-4 p-3 md:p-4 lg:p-0">
                <div className="flex items-center justify-between mb-3 md:mb-3 lg:mb-0">
                  <p className="flex items-center justify-center text-[10px] md:text-[11px] font-medium border border-[#FD3A74] text-[#FD3A74] bg-[#FD3A741A] w-25 rounded-2xl py-1.25 px-2.5 gap-1 ml-0 md:ml-2 lg:ml-4 inter">
                    <Image src={Productivity} width={16} height={16} alt="" /> Productivity
                  </p>
                  <div className="flex gap-2 mr-0 md:mr-2 lg:mr-4">
                    <button className="flex items-center justify-center w-8 h-8 md:w-7 md:h-7 lg:w-6 lg:h-6 not-focus:bg-white/10 focus:bg-[#FAC5151A] rounded-md cursor-pointer hover:bg-white/15 transition-colors">
                      <Image src={Star} width={16} height={16} alt="" className="" />
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 md:w-7 md:h-7 lg:w-6 lg:h-6 bg-white/10 rounded-md cursor-pointer hover:bg-white/15 transition-colors">
                      <Image src={ThumbsUp} width={16} height={16} alt="" className="" />
                    </button>
                  </div>
                </div>
                <div className="ml-0 md:ml-2 lg:ml-4 mb-3 md:mb-3 lg:mb-0">
                  <h3 className="text-base md:text-[15px] lg:text-sm font-medium inter mb-2 md:mb-2 lg:mb-0 text-white/90">
                    Solution Seeker
                  </h3>
                  <p className="text-[#898F93] text-[13px] md:text-[13px] lg:text-[11px] w-full md:w-[95%] lg:w-97/100 leading-5 md:leading-5 lg:leading-3.5 inter">
                    The Prompt seeks an unconventional solution to a specified problem, considering
                    its context, constraints, and goals. It emphasizes creative problem-solving and
                    concludes with feedback solicitation.
                  </p>
                </div>
                <div className="flex gap-4 w-full justify-start mr-0 md:mr-2 lg:mr-8 ml-0 md:ml-2 lg:ml-4 text-[#B1B4B7]">
                  <div className="flex items-center gap-1.5 text-[14px] md:text-[13px] lg:text-[12px] inter">
                    <Image src={ThumbsUp} width={14} height={14} alt="" className="" />
                    1.2K
                  </div>
                  <div className="flex items-center gap-1.5 text-[14px] md:text-[13px] lg:text-[12px] text-[#B1B4B7] inter">
                    <Image src={View} width={14} height={14} alt="" className="" />
                    12.4K
                  </div>
                </div>
              </div>
              <form
                action=""
                className="flex flex-col ml-0 md:ml-2 lg:ml-4 pl-0 md:pl-2 lg:pl-4 mt-5 md:mt-5 lg:mt-4 border-t-2 md:border-t-2 lg:border-t-0 lg:border-l-2 border-white/8 inter gap-3 md:gap-2.5 lg:gap-1 p-3 md:p-4 lg:p-0 w-full md:w-[95%] lg:w-auto"
              >
                <label
                  htmlFor=""
                  className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-50 text-[16px] md:text-[15px] lg:text-[14px] font-medium"
                >
                  Problem
                </label>
                <input
                  type="text"
                  placeholder="The problem I am facing."
                  className="bg-[#FFFFFF0A] py-2.5 md:py-2.5 lg:py-2.5 px-3 md:px-3 lg:px-2.5 rounded-lg focus:outline-[#664AF6] focus:outline-1 text-[14px] md:text-[13px] lg:text-[12px] placeholder:text-white/40 focus:bg-[#FFFFFF12] transition-colors h-8"
                />
                <label
                  htmlFor=""
                  className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-50 text-[16px] md:text-[15px] lg:text-[14px] font-medium"
                >
                  Context
                </label>
                <input
                  type="text"
                  placeholder="The context in which the problem exists."
                  className="bg-[#FFFFFF0A] py-2.5 md:py-2.5 lg:py-2.5 px-3 md:px-3 lg:px-2.5 rounded-lg focus:outline-[#664AF6] focus:outline-1 text-[14px] md:text-[13px] lg:text-[12px] placeholder:text-white/40 focus:bg-[#FFFFFF12] transition-colors h-8"
                />
                <label
                  htmlFor=""
                  className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-50 text-[16px] md:text-[15px] lg:text-[14px] font-medium"
                >
                  Constraints
                </label>
                <input
                  type="text"
                  placeholder="Any constraints or limitation that exist in solving the problem."
                  className="bg-[#FFFFFF0A] py-2.5 md:py-2.5 lg:py-2.5 px-3 md:px-3 lg:px-2.5 rounded-lg focus:outline-[#664AF6] focus:outline-1 text-[14px] md:text-[13px] lg:text-[12px] placeholder:text-white/40 focus:bg-[#FFFFFF12] transition-colors h-12 md:h-12 lg:h-12"
                />
              </form>
            </section>
          </article>
          {/* BUILT FOR SPEED */}
          <article className="article-three row-span-1 col-span-1 bg-[#101214CC] rounded-lg flex flex-col relative justify-between overflow-hidden lg:h-[392px] p-4 md:p-6 lg:p-0">
            <div className="ml-0 md:ml-4 lg:ml-8 mt-0 md:mt-2 lg:mt-8">
              <h3 className="text-xl md:text-2xl lg:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50">
                Built for speed
              </h3>
              <p className="text-white/60 text-[14px] md:text-[15px] lg:text-[16px] mt-1 w-full md:w-[95%] lg:w-95/100">
                Speak it, or /command it, maximize your efficiency
              </p>
            </div>
            <div
              className={`regex-container absolute left-4 md:left-8 lg:left-12 top-24 md:top-26 lg:top-29 border-2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-73.5 p-0.5 border-[#FFFFFF0A] rounded-lg inter ${
                showRegexContainer ? "lg:block" : "hidden"
              }`}
            >
              <div
                className="flex flex-col p-2 md:p-2.5 hover:bg-[#FFFFFF1a] hover:border-2 hover:border-[#6048E3] border-2 border-transparent rounded-lg cursor-pointer"
                onClick={() => handleOptionClick("/analogies")}
              >
                <p className="text-[13px] md:text-[14px] lg:text-base">/analogies</p>
                <p className="text-[#818181] text-[12px] md:text-[13px] lg:text-sm">
                  Provide similar comparisions
                </p>
              </div>
              <div
                className="flex flex-col p-2 md:p-2.5 hover:bg-[#FFFFFF1a] hover:border-2 hover:border-[#6048E3] border-2 border-transparent rounded-lg cursor-pointer"
                onClick={() => handleOptionClick("/case studies & examples")}
              >
                <p className="text-[13px] md:text-[14px] lg:text-base">/case studies & examples</p>
                <p className="text-[#818181] text-[12px] md:text-[13px] lg:text-sm">
                  Real-world scenarios and samples
                </p>
              </div>
            </div>
            <div className="flex flex-col inter">
              <form className="flex relative items-center w-full md:w-[95%] lg:w-111 ml-0 md:ml-4 lg:ml-8 h-12 md:h-14 lg:h-15 bg-[#FFFFFF08] rounded-lg border-white/6 border-2 overflow-hidden">
                <input
                  list="options"
                  type="text"
                  placeholder="/as"
                  className="ml-4 pl-2 w-2/3 text-[13px] md:text-[14px] lg:text-base"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <div className="absolute right-2">
                  <div className="flex items-center gap-2">
                    <button className="flex items-center justify-center bg-[#571EEA] h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 rounded-lg">
                      <Image
                        src={Send}
                        height={20}
                        width={20}
                        alt=""
                        className="md:h-5 md:w-5 lg:h-6 lg:w-6"
                      />
                    </button>
                    <button className="flex items-center justify-center bg-[#0F1112] h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 rounded-lg">
                      <i className="fa-solid fa-microphone text-[14px] md:text-[16px] lg:text-[18px]"></i>
                    </button>
                  </div>
                </div>
              </form>
              <div className="ml-0 md:ml-4 lg:ml-auto mt-2 mb-4 md:mb-5 lg:mb-6 bg-[#FFFFFF0F] py-2 px-3 md:py-2.5 md:px-3.5 text-[12px] md:text-[13px] lg:text-[14px]">
                <p className="text-[#D8DADB]">Just start typing, or speaking into the microphone</p>
              </div>
            </div>
          </article>
          {/* CAPTURE & ORGANISE */}
          <article className="article-four row-span-1 col-span-1 md:col-span-2 lg:col-span-2 bg-[#101214CC] rounded-lg overflow-hidden lg:h-[392px] p-4 md:p-6 lg:p-0">
            <div className="flex flex-col lg:flex-row relative">
              <div className="ml-0 md:ml-4 lg:ml-8 mt-0 md:mt-2 lg:mt-8 max-w-full lg:max-w-80">
                <h3 className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50">
                  Capture and organise
                </h3>
                <p className="text-white/60 text-[14px] md:text-[15px] lg:text-[16px] mt-1 w-full lg:w-95/100">
                  Seamlessly capture key AI responses into organized documents, all within ChatGPT
                </p>
              </div>
              <section className="w-full lg:w-168 lg:h-112 lg:absolute lg:-right-36 lg:top-12 mt-6 lg:mt-0 border-2 border-white/8 rounded-xl inter">
                <div className="border-16 border-transparent">
                  <form
                    action=""
                    className="flex relative items-center h-12 md:h-13 rounded-t-xl bg-[#FFFFFF14] border-b border-white/8"
                  >
                    <i className="fa-solid fa-magnifying-glass absolute left-4"></i>
                    <input
                      type="text"
                      placeholder="Search"
                      className="ml-12 placeholder:text-[14px] w-full"
                    />
                  </form>
                  <form className="h-auto md:h-28.5 py-2 border-b border-white/8">
                    <label htmlFor="" className="text-[#898F93] ml-2 text-[14px]">
                      Create
                    </label>
                    <div className="flex items-center ml-2 mt-1 pl-2 h-12 md:h-15 gap-2 bg-[#181B1E] rounded-lg">
                      <button className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-[#212427] border-[#FFFFFF1F] border-2 rounded-lg">
                        <Image
                          src={FilePlus}
                          height={16}
                          width={16}
                          alt=""
                          className="md:h-5 md:w-5"
                        />
                      </button>
                      <div className="flex flex-col font-medium text-[13px] md:text-[14px]">
                        <p>Create new document</p>
                        <div className="w-full md:w-100 h-2 md:h-2.5 bg-[#3C3F42] rounded-md"></div>
                      </div>
                    </div>
                  </form>
                  <div className="h-auto md:h-61.5">
                    <div className="mt-4 ml-2">
                      <p className="text-[#898F93] text-[13px] md:text-[14px]">Recent</p>
                      <ul className="ml-2 font-medium text-[13px] md:text-[14px]">
                        <li className="flex items-center h-10 md:h-12 gap-2">
                          <Image
                            src={Page}
                            width={20}
                            height={16}
                            alt=""
                            className="md:w-6 md:h-5"
                          />
                          <p>Pitch Creation Template</p>
                        </li>
                        <li className="flex items-center h-10 md:h-12 gap-2">
                          <Image
                            src={Page}
                            width={20}
                            height={16}
                            alt=""
                            className="md:w-6 md:h-5"
                          />
                          <p>Essay Planning AI Solution</p>
                        </li>
                        <li className="flex items-center h-10 md:h-12 gap-2">
                          <Image
                            src={Page}
                            width={20}
                            height={16}
                            alt=""
                            className="md:w-6 md:h-5"
                          />
                          <p>Expand Ideas Collaboratively</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default ExtensionAI;
