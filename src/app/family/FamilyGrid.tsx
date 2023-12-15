"use client";

import { FAMILY } from "@/app/family/content";
import { PersonDisplay } from "@/components/people/PersonDisplay";
import { animation } from "@/lib/animation";
import { motion } from "framer-motion";

const FamilyGrid = () => (
  <div className="grid w-full grid-cols-2 gap-4 md:gap-6">
    {FAMILY.map((familyMember, index) => (
      <motion.div
        className="w-full"
        key={`family-member-${familyMember.name}`}
        {...animation(index)}
      >
        <PersonDisplay {...familyMember} />
      </motion.div>
    ))}
  </div>
);

export default FamilyGrid;
