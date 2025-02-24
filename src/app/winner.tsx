"use client";

import Image from "next/image";

export default function Winner({
  category,
  image,
  first,
  second,
}: {
  category: string;
  image: string;
  first: [string, string];
  second: [string, string];
}) {
  return (
    <div className="h-full justify-center items-center">
      <div className="h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:py-8 rounded-lg ">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 md:mx-4">
          <h3 className="text-xl font-bold text-gray-800 md:ml-3 md:text-2xl lg:text-4xl pt-6 lg:pt-6">
            {category}
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl my-1 py-2 md:ml-3 md:mt-12">
            <span className="font-semibold">{first[0]}</span>
            <br />
            <span className="text-base">{first[1]}</span>
          </p>
          <p className="text-bottom text-base lg:text-lg md:mt-12 md:ml-3">
            Runner-Up: {second[0]} <br />
            <span className="text-base">{second[1]}</span>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:w-1/2 md:mt-0 my-2">
          <Image
            src={image} // Path to the image
            alt={first[0]}
            width={275} // Adjust based on your layout
            height={450} // Adjust based on your layout
            className="w-4/6 md:w-[300px] lg:w-[500px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
