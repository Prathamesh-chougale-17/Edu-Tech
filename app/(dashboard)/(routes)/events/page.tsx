import TiltGamesCard from "@/components/Cards/HoverCard";
import { EventTopicProps, getEvents } from "@/sanity/sanity-util";
import React from "react";

export const revalidate = 600;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const EventsPage = async ({ searchParams }: Props) => {
  const eventTopic = await getEvents({
    query: searchParams?.query || "",
    page: "1",
  });
  return (
    <div className="mt-3 flex w-full flex-wrap justify-center gap-8 sm:gap-4 sm:justify-center">
      {eventTopic?.length > 0 ? (
        eventTopic.map((p: EventTopicProps) => (
          <TiltGamesCard
            key={p._id}
            title={p.title}
            image={p.image}
            slug={p.slug}
            logo={p.logo}
            _id={p._id}
          />
        ))
      ) : (
        <div>No Event Topic found</div>
      )}
    </div>
  );
};

export default EventsPage;
