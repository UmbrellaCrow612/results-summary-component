import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

import { HiOutlineBolt } from "react-icons/hi2";
import { GiCardRandom } from "react-icons/gi";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

export default function Page() {
  return (
    <main
      className={`min-h-screen flex items-center justify-center ${roboto.className}`}
    >
      {/* Box container */}
      <div className="md:w-[45rem] md:h-[29rem] md:rounded-3xl grid shadow-xl md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 w-full">
        {/* Result box */}
        <div className="flex flex-col items-center gap-6 py-6 md:rounded-3xl bg-gradient-to-b from-[#7857FF] to-[#2E2BE9]">
          <p className="text-2xl font-semibold text-[#C8C7FF]">Your Result</p>
          {/* Circle */}
          <div className="w-[12rem] gap-2 h-[12rem] rounded-full flex items-center justify-center flex-col bg-gradient-to-b from-[#4E21CA] to-[#2f2dd2]">
            <span className="text-6xl font-extrabold text-white">76</span>
            <span className="text-[#C8C7FF] text-base font-semibold">
              of 100
            </span>
          </div>
          <p className="text-3xl font-bold leading-tight tracking-wide text-white">
            Great
          </p>
          <p className="max-w-xs text-base font-medium text-center text-gray-400">
            You scored higher than 65% of <br /> the people who had taken <br />{" "}
            these tests
          </p>
        </div>
        {/* Summary box */}
        <div className="flex flex-col items-center gap-5 p-8 rounded-3xl">
          <div className="w-full">
            <p className="text-xl font-bold">Summary</p>
          </div>
          {/* Score tile container*/}
          <div className="flex flex-col w-full gap-5">
            {/* Tile */}
            <div className="px-4 py-3 bg-[#FEF6F6] rounded-md flex justify-between">
              <div className="flex items-center gap-3">
                <HiOutlineBolt className="text-red-500" />
                <span className="font-bold text-red-500">Reaction</span>
              </div>
              <div className="flex gap-2 font-semibold">
                <span>80</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">100</span>
              </div>
            </div>
            <div className="px-4 py-3 bg-[#FFFBF2] rounded-md flex justify-between">
              <div className="flex items-center gap-3">
                <GiCardRandom className="text-yellow-500" />
                <span className="font-bold text-yellow-500">Memory</span>
              </div>
              <div className="flex gap-2 font-semibold">
                <span>92</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">100</span>
              </div>
            </div>
            <div className="px-4 py-3 bg-[#F2FBFA] rounded-md flex justify-between">
              <div className="flex items-center gap-3">
                <BsChatDots className="text-green-500" />
                <span className="font-bold text-green-500">Verbal</span>
              </div>
              <div className="flex gap-2 font-semibold">
                <span>61</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">100</span>
              </div>
            </div>
            <div className="px-4 py-3 bg-[#F3F3FD] rounded-md flex justify-between">
              <div className="flex items-center gap-3">
                <AiOutlineEye className="text-purple-500" />
                <span className="font-bold text-purple-500">Visual</span>
              </div>
              <div className="flex gap-2 font-semibold">
                <span>72</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">100</span>
              </div>
            </div>
            <button className="px-1 text-center py-3 bg-[#2F3C59] text-white rounded-full">
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
