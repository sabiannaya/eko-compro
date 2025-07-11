import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white">
      <Image
        src="/Logo.png"
        alt="Loading Logo"
        width={240}
        height={240}
        className="animate-breathing"
      />
    </div>
  );
};

export default Loading;
