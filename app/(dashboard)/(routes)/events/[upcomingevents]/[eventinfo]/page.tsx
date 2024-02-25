import React from "react";
import Image from "next/image";
import { getEventBySlug, getUpcomingeventsBySlug } from "@/sanity/sanity-util";
import EventsInfo from "@/components/Cards/EventsInfo";
import Link from "next/link";
const EventInfo = async ({ params }: { params: { eventinfo: string } }) => {
  const tournaments = await getUpcomingeventsBySlug(params.eventinfo);
  console.log(tournaments.eventname);
  const games = await getEventBySlug(tournaments.eventTopic);
  return (
    <main className="bg-black">
      <div className="h-[500px]">
        <Image
          src={games.image}
          alt="GamesImages"
          height={400}
          width={400}
          className="w-full h-[500px]"
        />
      </div>
      <section className="flex justify-between">
        <h1 className="text-3xl lg:text-5xl mt-3 lg:ml-10 font-bold">
          {tournaments.eventname}
        </h1>
        <div>
          <h1 className="text-2xl justify-end"></h1>
          <Link href={`${tournaments.slug}/registration`}>
            <button className="bg-green-500 text-white py-3 px-6 rounded-md mt-2">
              Register
            </button>
          </Link>
        </div>
      </section>
      <section className="pb-20">
        <h1 className="text-2xl text-center mt-6">Tournament Information</h1>
        <EventsInfo
          date={tournaments.startdate}
          players={tournaments.students}
          participationfee={tournaments.participationfee}
          prizepool={tournaments.prizepool}
          location={tournaments.location}
          organizer={tournaments.organizer}
        />
      </section>
    </main>
  );
};

export default EventInfo;
