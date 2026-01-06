import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-100">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-[#B80000] rounded-full animate-spin"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-[#B80000] rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-800 animate-pulse tracking-wide">
          লোড হচ্ছে...
        </h2>
        <div className="flex gap-1 mt-2">
          <span className="w-1.5 h-1.5 bg-[#B80000] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-1.5 h-1.5 bg-[#B80000] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-1.5 h-1.5 bg-[#B80000] rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
