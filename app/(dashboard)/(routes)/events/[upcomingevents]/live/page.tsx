import React from "react";
import VideoBorder from "./VideoBackground.module.css";
const TournamentsPage = () => {
  return (
    <main className="lg:flex text-2xl  justify-evenly">
      <div>
        <div className="pt-4">
          <h1 className="text-violet-700 text-center">Person 1</h1>
        </div>
        <div className="relative inset-0 mt-6">
          <div className={VideoBorder.block} />
          <iframe
            src="https://player.twitch.tv/?channel=chaitanyaasole&parent=localhost"
            scrolling="no"
            height="378"
            width="620"
            className="z-10 absolute inset-0"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default TournamentsPage;
