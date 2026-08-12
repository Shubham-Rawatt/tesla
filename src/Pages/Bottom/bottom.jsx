import { useState, useEffect } from "react";
import { FiMessageSquare, FiArrowUp } from "react-icons/fi";
import { FaCar } from "react-icons/fa6";

const Bottom = () => {
  const textChange = [
    "Compare Model 3 and Model Y",
    "What's Pet Mode?",
    "What does the Tesla app do?",
    "Where can I drive the Model 3?"];

  const [text, setText] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setText((prev) => (prev + 1) % textChange.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [textChange.length]);
  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full justify-center gap-4 bg-white border-t border-gray-300 py-3">
      <button className="flex h-10 w-135 items-center border border-gray-300 bg-gray-50 px-5 text-sm font-semibold desc-txt">
        <FiMessageSquare size={20} className="mr-3" />

        <span className="font-bold">Ask a Question</span>

        <span className="ml-2 text-gray-500"> {textChange[text]} </span>

        <span className="ml-auto flex h-7 w-7 items-center justify-center bg-gray-300 opacity-70">
          <FiArrowUp size={17} />
        </span>
      </button>

      <button className="flex h-10 w-59 items-center justify-center gap-4 border border-gray-300 bg-gray-50 text-sm font-semibold">
        <FaCar size={20} className="text-blue-600" />
        <span className="desc-txt font-bold"> Schedule a Drive Today</span>
      </button>
    </div>
  );
};

export default Bottom;
