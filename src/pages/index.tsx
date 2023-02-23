import { Hanken_Grotesk } from "@next/font/google";

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Page() {
  return (
    <main
      className={`min-h-screen flex items-center justify-center ${hanken_grotesk.className}`}
    >
      {/* Box container */}
      <div className="w-[45rem] h-[29rem] rounded-3xl grid grid-cols-2 grid-rows-1">
        {/* Result box */}
        <div className="flex flex-col items-center gap-6 py-6 rounded-3xl bg-gradient-to-b from-[#7857FF] to-[#2E2BE9]">
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
          <p className="max-w-xs text-base font-light text-center text-gray-400">
            You scored higher than 65% of <br /> the people who had taken <br /> these tests
          </p>
        </div>
        {/* Summary box */}
        <div className="border rounded-3xl">Summary</div>
      </div>
    </main>
  );
}
