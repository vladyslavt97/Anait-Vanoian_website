"use client";

import { motion } from "framer-motion";
import { useNavigation } from "@/libs/zustand";

export default function Burger() {
  const { isOpen, toggle } = useNavigation();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      toggle();
    }
  };

  return (
    <div>
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        tabIndex={0} // makes it keyboard focusable
      >
        {/* Top line */}
        <motion.div
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 6 : 0,
          }}
          className="w-5 h-[2px] bg-white rounded-lg"
        />
        {/* Middle line */}
        <motion.div
          animate={{ opacity: isOpen ? 0 : 1 }}
          className="w-5 h-[2px] bg-white rounded-lg"
        />
        {/* Bottom line */}
        <motion.div
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? -6 : 0,
          }}
          className="w-5 h-[2px] bg-white rounded-lg"
        />
      </div>
    </div>
  );
}
