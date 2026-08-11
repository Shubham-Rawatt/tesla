import React from "react";
import { FiMessageSquare, FiArrowUp, FiTruck } from "react-icons/fi";

const Bottom = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full justify-center gap-4 bg-white py-3">
      <button className="flex h-10 w-135 items-center border border-gray-300 bg-gray-50 px-5 text-sm font-semibold desc-txt">
        <FiMessageSquare size={20} className="mr-3" />

        <span className="font-bold">Ask a Question</span>

        <span className="ml-2 text-gray-400">
          "What does the Tesla app do?"
        </span>

        <span className="ml-auto flex h-7 w-7 items-center justify-center bg-gray-300 opacity-70">
          <FiArrowUp size={17} />
        </span>
      </button>

      <button className="flex h-10 w-59 items-center justify-center gap-3 border border-gray-300 bg-gray-50 text-sm font-semibold">
        <FiTruck size={20} className="text-blue-600" />
        Schedule a Drive Today
      </button>
    </div>
  );
};

export default Bottom;
