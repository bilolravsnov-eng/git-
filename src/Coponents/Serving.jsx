import React from "react";
import img1 from "../assets/img1.png"
const Serving = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1203px] grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <img
            src={img1}
            alt="Analytics dashboard preview"
            className="w-full"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold leading-[1.4] text-[#0b1f17] sm:text-5xl sm:leading-[1.5]">
            Serving information
            <br />
            with security.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#3d4a44]">
            The source of powerful world and making future sure. It's a
            straightforward software. Paired with dynamic image of the actual
            tool for you.
          </p>

          <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#3d4a44]">
            Where possibilities are made possible. We must have expand{" "}
            <b className="text-[#0b1f17]">Possibilities of better tomorrow</b>.
            The directly secure of your network delivering services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Serving