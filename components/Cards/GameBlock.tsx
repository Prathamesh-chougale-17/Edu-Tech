import React from "react";
import Image from "next/image";
interface GameBlockProps {
  gameName: string;
  date: string;
  location: string;
  logo: string;
}

const GameBlock: React.FC<GameBlockProps> = ({
  gameName,
  date,
  logo,
  location,
}) => {
  return (
    <div className="game-block bg-gray-800 border border-gray-700 p-4 flex justify-between items-center rounded-md shadow-md hover:bg-gray-700 my-6 mx-4">
      <div className="text-lg font-semibold text-white flex items-center">
        <Image src={logo} alt="game" width={60} height={60} />
        <span className="ml-4">{gameName}</span>
      </div>
      <div className="text-lg text-gray-400">
        <div>{date}</div>
        <div>{location}</div>
      </div>
      <div className="flex justify-end">
        <div className="mr-9">
          <div className="mx-2 text-slate-300">20</div>
          <div className="text-slate-300">Team</div>
        </div>
      </div>
    </div>
  );
};

export default GameBlock;
