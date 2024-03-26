"use client";

import { animation } from "@/lib/animation";
import STORY_CONTENT from "@/app/story/content";
import { motion } from "framer-motion";
import Image from "next/image";
import { FAQS } from "./content";

const FAQPageContent: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-12">
      {FAQS.map(({ question, answer }, index) => (
        <motion.div
          className="flex w-full flex-col gap-6"
          key={`faq-${question}`}
          {...animation(index)}
        >
          <h2 className="font-noto text-center text-[min(6vw,40px)] font-light leading-[1.2]">
            {question}
          </h2>

          <div className="flex w-full flex-col gap-3">
            {answer.map((ans, ind) => (
              <p
                key={`faq-ans-${question}-${ind}`}
                className="font-figtree font-light leading-[1.8] md:text-lg "
              >
                {ans}
              </p>
            ))}
          </div>
          {index < FAQS.length - 1 && (
            <div className="mt-3 flex w-full items-center justify-center">
              <hr className=" h-[1px] w-12 border-0 border-b-[1px] border-foreground/30" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FAQPageContent;
