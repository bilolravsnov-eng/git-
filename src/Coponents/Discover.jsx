import React from "react";
import { BadgeCheck } from "lucide-react";
import img from "../assets/img.png"

const items = [
  "Software with new dimensions the better.",
  "Effortlessly manages all your information.",
  "Simple Solutions for Complex Connections.",
  "Complete business solutions for customers.",
];

const Discover = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1203px] grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold leading-[1.4] text-[#0b1f17] sm:text-5xl sm:leading-[1.5]">
            Discover &amp; growth
            <br />
            with analysis.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#3d4a44]">
            Software with new dimensions. The better future and information
            about the virtual world.
          </p>

          <ul className="mt-6 space-y-4">
            {items.map((text) => (
              <li key={text} className="flex items-center gap-3">
                <BadgeCheck className="h-6 w-6 shrink-0 fill-emerald-400 text-white" />
                <span className="text-lg text-[#3d4a44]">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
         <img src={img} alt="Software interface preview" className="w-full" />
          
        </div>
      </div>
    </section>
  );
};

export default Discover;