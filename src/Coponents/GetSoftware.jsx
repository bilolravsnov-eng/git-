import React from "react";
import img2 from "../assets/img2.png"

const GetSoftware = () => {
  return (
    <section className="bg-[#f0fdf8]">
      <div className="mx-auto grid max-w-[1203px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <div className="lg:pl-10">
          <h2 className="text-4xl font-bold text-[#0b1f17] sm:text-5xl">
            Get our software
          </h2>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#3d4a44]">
            The source of powerful world and making your future sure. It's a
            straightforward software for you.
          </p>

          <p className="mt-4 max-w-md text-lg leading-relaxed text-[#3d4a44]">
            The source of powerful world and making future sure. It's a
            straightforward software. Paired with dynamic image of the actual
            tool and the performance.
          </p>

          <button className="mt-8 rounded-md bg-[#ef2b37] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#d61f2b]">
            Download now
          </button>
        </div>

        <div>
          <img
            src={img2}
            alt="Laptop with software dashboard"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GetSoftware