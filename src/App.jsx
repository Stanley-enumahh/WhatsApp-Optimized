import { useState } from "react";
import "./App.css";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { TfiText } from "react-icons/tfi";
import { MdOutlinePalette } from "react-icons/md";

export default function App() {
  const BgColors = [
    "#34c759",
    "#87ceeb",
    "#f2c464",
    "#03a9f4",
    "#32cd32",
    "#ffa07a",
    "#7a288a",
    "#ffd7be",
    "#a1c9f2",
    "#ffc5c5",
    "#b2fffc",
    "#b2e6ce",
    "#1a1d23",
    "#333333",
    "#000000",
  ];
  const [index, setIndex] = useState(0);

  const NextColor = () => {
    setIndex((prevIndex) => (prevIndex + 1) % BgColors.length);
  };
  const PrevColor = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + BgColors.length) % BgColors.length
    );
  };
  const backGround = BgColors[index];

  return (
    <div
      style={{ backgroundColor: `${backGround}` }}
      className="w-full relative h-screen flex justify-center items-center"
    >
      <div className="flex px-6 w-full top-5 flex-row items-start justify-between gap-10 text-xl absolute">
        <span className="p-3 flex items-center justify-center rounded-full text-2xl bg-gradient-to-t from-gray-700 to bg-gray-700 select-none text-white">
          <FaXmark />
        </span>

        <div className="flex flex-row gap-3 items-start">
          <span className="p-3 flex items-center justify-center rounded-full text-2xl bg-gradient-to-t from-gray-700 select-none to bg-gray-700 text-white">
            <TfiText />
          </span>
          <span className="p-3 flex items-center justify-center rounded-full text-2xl bg-gradient-to-t from-gray-700 select-none to bg-gray-700 text-white">
            <MdOutlineEmojiEmotions />
          </span>
          <div className="flex flex-col gap-3 justify-between items-center">
            <span
              className="p-3 flex items-center justify-center rounded-full text-2xl bg-gradient-to-t from-gray-700 select-none to bg-gray-700 text-white"
              onClick={NextColor}
            >
              <MdOutlinePalette />
            </span>
            <span
              className=" flex-row p-2 flex items-center justify-center rounded-full text-2xl bg-gradient-to-t select-none from-gray-700 to bg-gray-700 text-white"
              onClick={PrevColor}
            >
              - <MdOutlinePalette />
            </span>
          </div>
        </div>
      </div>
      <input
        className="text-2xl text-white flex items-center justify-center bg-transparent h-fit text-center outline-none border-none w-full font-bold opacity-95 select-none"
        type="text"
        placeholder="Type your status"
      />
    </div>
  );
}
