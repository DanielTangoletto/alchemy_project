import Image from "next/image";
import CheckGrey from "../../assets/images/icons/check-grey.png";
import CheckPurple from "../../assets/images/icons/check-purple.png";

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="relative flex flex-col items-center justify-center text-center mt-48">
        <h2 className="text-[44px] font-medium w-[838px] h-[142px] leading-[105%] text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50">
          Pricing Plans
        </h2>
        <ul className="flex items-center justify-center gap-7 bg-[#101214] rounded-[40px] p-1.5 h-12 w-[245px]">
          <li className="bg-[#5334ED7A] border border-[#8067FF] pt-2.5 pr-4 pb-2.5 pl-4 rounded-full">
            Monthly
          </li>
          <li>
            Yearly <span className="bg-white/7 pt-1 pr-2 pb-1.5 pl-2 rounded-full">-20%</span>
          </li>
        </ul>
        <section className="relative grid grid-cols-1 md:grid-cols-2 2xl:flex 2xl:flex-row gap-6 my-12 max-w-[1440px] mx-auto px-4">
          {/* Free */}
          <article className="h-[662px] w-full 2xl:w-[332px] bg-[#101214] rounded-lg">
            <div className="flex flex-col items-start ml-8 justify-evenly h-50">
              <div className="text-left">
                <p className="text-xl">Free</p>
                <p className="opacity-0">Tier 0</p>
              </div>
              <p className="text-[56px]">
                $0 <span className="opacity-60 uppercase text-sm">/year</span>
              </p>
            </div>
            <div className="h-0.25 bg-white/8"></div>
            <div className="flex flex-col justify-between h-[462px]">
              <ul className="ml-6 mt-4 flex flex-col gap-4 w-9/10">
                <li className="flex items-center gap-2">
                  <Image src={CheckGrey} width={16} height={16} alt="" />
                  Access &quot;Playground&quot; Prompts
                </li>
                <li className="flex items-center gap-2">
                  <Image src={CheckGrey} width={16} height={16} alt="" />
                  Basic Tone/Style Modifiers
                </li>
              </ul>
              <button className="mb-4 mx-auto bg-white/8 w-[268px] pt-[15px] pr-5 pb-[17px] pl-5 rounded-lg border border-white/8 cursor-pointer">
                Try for free
              </button>
            </div>
          </article>
          {/* Basic */}
          <article className="h-[662px] w-full 2xl:w-[332px] bg-[#101214] rounded-lg">
            <div className="flex flex-col items-start ml-8 justify-evenly h-50">
              <div className="text-left">
                <p>Tier 1</p>
                <p className="text-xl">Basic</p>
              </div>
              <p className="text-[56px]">
                $9 <span className="opacity-60 uppercase text-sm">/month</span>
              </p>
            </div>
            <div className="h-0.25 bg-white/8"></div>
            <div className="flex flex-col justify-between h-[462px]">
              <ul className="ml-6 mt-4 flex flex-col gap-4 w-9/10">
                <li className="flex items-center gap-2">
                  <Image src={CheckPurple} width={16} height={16} alt="" />
                  Full Prompt Library
                </li>
                <li className="flex items-center gap-2">
                  <Image src={CheckPurple} width={16} height={16} alt="" />
                  Fast /Commands
                </li>
                <li className="flex text-left items-center gap-2">
                  <Image src={CheckPurple} width={16} height={16} alt="" />
                  Alchemy Dashboard Access
                </li>
                <div className="flex flex-col text-left opacity-60 ml-3">
                  <p>• Up to 5 Bookmarks & 1 Doc</p>
                  <p>• Up to 5 Custom Prompts</p>
                  <p>• Up to 5 Favourite Prompts</p>
                </div>

                <li className="flex items-center gap-2">
                  <Image src={CheckPurple} width={16} height={16} alt="" />
                  All Style/Tone Modifiers
                </li>
                <li className="flex items-center gap-2">
                  <Image src={CheckPurple} width={16} height={16} alt="" />
                  Themes
                </li>
              </ul>
              <button className="mb-4 mx-auto bg-white/8 w-[268px] pt-[15px] pr-5 pb-[17px] pl-5 rounded-lg border border-white/8 cursor-pointer">
                Get Started
              </button>
            </div>
          </article>
          {/* Pro */}
          <article className="h-[662px] w-full 2xl:w-[332px] bg-gradient-smooth-violet rounded-lg">
            <div className="flex flex-col items-start ml-8 justify-evenly h-50">
              <div className="text-left">
                <p>Tier 2</p>
                <p className="text-xl">Pro</p>
              </div>
              <p className="text-[56px]">
                $24 <span className="opacity-60 uppercase text-sm">/month</span>
              </p>
            </div>
            <div className="h-0.25 bg-white/8"></div>
            <div className="flex flex-col justify-between h-[462px]">
              <ul className="ml-6 mt-4 flex flex-col gap-4 w-9/10">
                <li className="flex text-left items-center gap-2">
                  <Image src={CheckGrey} width={16} height={16} alt="" />
                  Everything in Tier 1
                </li>
                <li className="flex text-left items-center gap-2">
                  <Image src={CheckPurple} width={16} height={16} alt="" />
                  Full Access to Alchemy Dashboard
                </li>
                <div className="flex flex-col text-left opacity-60 ml-3">
                  <p>• Unlimited Bookmarks Docs</p>
                  <p>• Unlimited Custom Prompts</p>
                  <p>• Unlimited Favourite Prompts</p>
                </div>

                <li className="flex text-left items-center gap-2">
                  <Image src={CheckPurple} width={16} height={16} alt="" />
                  Quick-Reply Button
                </li>
                <li className="flex text-left items-center gap-2">
                  <Image src={CheckPurple} width={16} height={16} alt="" />
                  AI Follow-Up Recommendation
                </li>
              </ul>
              <button className="mb-4 mx-auto bg-[#4024A2B2] w-[268px] pt-[15px] pr-5 pb-[17px] pl-5 rounded-lg border border-[#A98CF8]/8 cursor-pointer">
                Get Started
              </button>
            </div>
          </article>
          {/* Plus */}
          <article className="h-[662px] w-full 2xl:w-[332px] bg-[#101214] rounded-lg">
            <div className="flex flex-col items-start ml-8 justify-evenly h-50">
              <div className="text-left">
                <p>Tier 3</p>
                <p className="text-xl">Plus</p>
              </div>
              <p className="text-[56px]">
                $49 <span className="opacity-60 uppercase text-sm">/month</span>
              </p>
            </div>
            <div className="h-0.25 bg-white/8"></div>
            <div className="flex flex-col justify-between h-[462px]">
              <ul className="ml-6 mt-4 flex flex-col gap-4 w-9/10">
                <li className="flex text-left items-center gap-2">
                  <Image src={CheckGrey} width={16} height={16} alt="" />
                  Everything in Tier 2
                </li>
                <li className="flex text-left items-center gap-2">
                  <Image src={CheckPurple} width={16} height={16} alt="" />
                  Access &quot;Strategic Conversations&apos; Category
                </li>
                <li className="flex text-left items-center gap-2">
                  <Image src={CheckPurple} width={16} height={16} alt="" />
                  Early Access to new features
                </li>
                <div className="flex flex-col text-left opacity-60 ml-3">
                  <p>• Beta Tester Role + Channel in Discord</p>
                  <p>• Help Shape the Future of Alchemy</p>
                </div>
              </ul>
              <button className="mb-4 mx-auto bg-white/8 w-[268px] pt-[15px] pr-5 pb-[17px] pl-5 rounded-lg border border-white/8 cursor-pointer">
                Get Started
              </button>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Pricing;
