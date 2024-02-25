"use client";
import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import Link from "next/link";
import { EventTopicProps } from "@/sanity/sanity-util";
const TiltGamesCard = ({ title, image, slug }: EventTopicProps) => {
  // console.log(projects);
  return (
    <main className="flex m-5">
      <Link href={`/events/${slug}`}>
        <div>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-2xl cursor-pointer w-full  mb-5 lg:mb-0"
          >
            <div className="relative items-end">
              {/* <Link href={`Projects/${slug}`}> */}
              <Image
                src={image}
                height={400}
                width={300}
                alt="project_image"
                className="w-full lg:w-60 lg:h-48 object-cover rounded-t-2xl"
              />
              <h3 className="text-white font-bold text-[24px] text-center bg-gray-800 rounded-b-2xl">
                {title}
              </h3>
            </div>
          </Tilt>
        </div>
      </Link>
    </main>
  );
};

export default TiltGamesCard;
