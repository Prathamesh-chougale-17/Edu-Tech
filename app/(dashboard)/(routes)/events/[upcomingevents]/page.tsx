import GameBlock from "@/components/Cards/GameBlock";
import { getEventBySlug, getUpcomingevents } from "@/sanity/sanity-util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 600;
interface Props {
  searchParams: { [key: string]: string | undefined };
  params: {
    upcomingevents: string;
  };
}

const UpcomingPage = async ({ params, searchParams }: Props) => {
  const upcomingevents = await getUpcomingevents({
    query: searchParams?.query || "",
    page: "1",
  });
  const event = await getEventBySlug(params.upcomingevents);
  return (
    <main className="pb-32 ">
      <div className="-z-10">
        <Image
          src={event.image}
          alt="Event Images"
          height={400}
          width={400}
          className="w-full h-[500px]"
        />
        <div className="text-center pt-4">
          <h1 className="text-5xl mt-3 ml-10 font-bold">Current Events</h1>
          {/* create a block for live stream */}
          <div className="flex justify-center">
            <div className="w-full mt-4  rounded-md">
              <h1 className="text-4xl text-white pt-1">
                <Link href={`/events/${event.slug}/live`}>
                  <button className="bg-green-500 text-white py-3 px-6 rounded-md mt-2">
                    Live
                  </button>
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center pt-4">
          <h1 className="text-4xl ">Upcoming Events</h1>
          {upcomingevents?.length > 0 ? (
            upcomingevents.map((p) =>
              p.eventTopic === event.slug ? (
                <Link href={`/events/${event.slug}/${p.slug}`} key={p.slug}>
                  <GameBlock
                    key={p.slug}
                    location={p.location}
                    logo={event.logo}
                    gameName={p.eventTopic}
                    date={p.startdate}
                  />
                </Link>
              ) : (
                <div key={p.slug}>No upcoming events</div>
              )
            )
          ) : (
            <div>No upcomingevents found</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default UpcomingPage;
