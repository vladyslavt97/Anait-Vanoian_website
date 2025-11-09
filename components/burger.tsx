"use client";

import { useNavigation } from "@/libs/zustand";

export default function Burger() {
  const { toggle } = useNavigation();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      toggle();
    }
  };

  return (
    <div>
      <div
        className="flex cursor-pointer flex-col gap-1"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label="Open navigation menu"
      >
        <div className="h-[2px] w-5 rounded-lg bg-white" />
        <div className="h-[2px] w-5 rounded-lg bg-white" />
        <div className="h-[2px] w-5 rounded-lg bg-white" />
      </div>
    </div>
  );
}
