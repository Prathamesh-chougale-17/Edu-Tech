import React from "react";
const EventsInfo = ({
  date,
  players,
  prizepool,
  location,
  organizer,
  participationfee,
}: {
  date: string;
  players: number;
  prizepool: number;
  location: string;
  organizer: string;
  participationfee: string;
}) => {
  return (
    <main className="justify-center flex">
      <div className="w-[800px] bg-gray-800 border border-gray-700 px-4 flex justify-between items-stretch rounded-md shadow-md hover:bg-gray-700 my-6 mx-4">
        <div>
          <div className="mb-5">
            {" "}
            <div className="font-bold">Starts</div>
            <div>{date}</div>
          </div>
          <div className="mt-5">
            {" "}
            <div className="font-bold">Player</div>
            <div>{players}</div>
          </div>
        </div>
        <div>
          <div className="mb-5">
            {" "}
            <div className="font-bold">Prize Pool</div>
            <div>{prizepool}</div>
          </div>
          <div className="mt-5">
            {" "}
            <div className="font-bold">Location</div>
            <div>{location}</div>
          </div>
        </div>
        <div>
          <div className="mb-5">
            {" "}
            <div className="font-bold">Organizer</div>
            <div>{organizer}</div>
          </div>
          <div className="mt-5">
            {" "}
            <div className="font-bold">Participation Fee</div>
            <div>{participationfee}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventsInfo;
