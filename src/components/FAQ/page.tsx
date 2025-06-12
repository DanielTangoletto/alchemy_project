"use client";
import Image from "next/image";
import Open from "../../assets/images/icons/e-add 1.png";
import Close from "../../assets/images/icons/e-add 2.png";
import { useState, useRef, useEffect } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setHeights(answerRefs.current.map((ref) => ref?.scrollHeight || 0));
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Alchemy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Who is Alchemy for?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What differentiates Alchemy from other AI tools?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "What are the Knowledge Management features of Alchemy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Is Alchemy free to use?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "How does Alchemy handle user data and privacy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <style jsx global>{`
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.3s ease-in-out, opacity 0.5s ease 0.1s;
        }
      `}</style>

      <section className="relative flex flex-col items-center justify-center text-center mt-48 px-4 md:px-6 lg:px-8">
        <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-medium w-full md:w-[600px] lg:w-[838px] leading-[105%] text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-50 mb-16">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <article
            key={index}
            className="flex relative flex-col w-full max-w-[912px] border-t border-white/20"
          >
            <div className="flex relative items-center justify-between">
              <p className="text-left font-medium text-lg md:text-xl my-3 pr-4">{faq.question}</p>
              <div className="flex">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-center w-8 h-8 bg-white/8 rounded-full cursor-pointer flex-shrink-0"
                >
                  <Image
                    src={openIndex === index ? Close : Open}
                    width={12}
                    height={12}
                    alt={openIndex === index ? "Close" : "Open"}
                  />
                </button>
              </div>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? `${heights[index]}px` : "0px",
                opacity: openIndex === index ? 1 : 0,
              }}
              ref={(el) => {
                answerRefs.current[index] = el;
              }}
            >
              <p className="text-white/60 text-left w-full md:w-8/10 leading-6 my-4 pb-2">
                {faq.answer}
              </p>
            </div>
          </article>
        ))}
        <div className="h-0.25 w-full max-w-[912px] bg-white/20"></div>
      </section>
    </>
  );
};

export default FAQ;
