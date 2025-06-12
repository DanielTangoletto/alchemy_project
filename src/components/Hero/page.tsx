"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "./styles.css";

// Constantes pour les valeurs statiques
const YOUTUBE_VIDEO_ID = "3NeUUuRIxZo";
const YOUTUBE_VIDEO_TITLE = "Chat GPT Extension Motion Graphics Explainer Video | Alchemy";

const Hero = () => {
  return (
    <>
      {/* Section Hero avec titre et description */}
      <section className="relative flex flex-col items-center justify-center text-center mt-[88px]">
        <div className="top-96 ellipse-blur absolute w-[70%] md:w-[88%] h-[35%] md:h-[50%] gradient-hero rounded-full blur-3xl opacity-30"></div>
        <h1 className="font-medium text-5xl md:text-[80px] tracking-[-4%] leading-[100%] md:w-[696px] w-9/10 md:h-44 h-27 max-[420px]:h-38 text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50">
          Elevate ChatGPT with{" "}
          <span className="relative text-white [text-shadow:_0_0_15px_rgba(255,255,255,0.8)]">
            Alchemy
          </span>
        </h1>

        <p className="text-[20px] opacity-60 md:w-[540px] w-4/5 max-[430px]:w-9/10 md:mt-0 mt-4">
          Unleash unparalleled productivity, precision, and collaboration in every AI interaction
        </p>

        <button className="flex items-center justify-center font-medium w-[189px] h-12 align-middle bg-[#4024a2] rounded-lg border border-white/8 mt-8">
          Download Extension
        </button>
      </section>

      {/* Section Vidéo YouTube */}
      <div className="relative flex items-center justify-center aspect-video">
        <div className="w-[88%] h-full mt-20">
          <div className="border-[15px] border-white/8 rounded-[20px] overflow-hidden">
            <LiteYouTubeEmbed
              id={YOUTUBE_VIDEO_ID}
              title={YOUTUBE_VIDEO_TITLE}
              noCookie={true}
              poster="maxresdefault"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
