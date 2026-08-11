import React from "react";

const Charger = () => {
  return (
    <section className="mt-6 px-8">
      <div className="flex justify-evenly gap-20">
        <div>
          <h2 className="text-[48px] font-semibold">
            Find Your Charge
          </h2>

          <p className="desc-txt mt-2 max-w-xl text-lg font-medium">
            View the network of Tesla Superchargers and Destination Chargers
            available near you.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="rounded-sm bg-[#171a20] px-8 py-2 text-sm font-medium text-white transition hover:bg-[#30343b]">
              View Network
            </button>

            <button className="rounded-sm bg-white px-8 py-2 text-sm font-medium text-[#171a20] shadow-sm transition hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex gap-12 align-center">
          <div>
            <p className="tesla-txt text-6xl font-semibold">
              38,290
            </p>
            <p className="desc-txt mt-1 text-lg font-medium">
              Superchargers
            </p>
          </div>

          <div>
            <p className="tesla-txt text-6xl font-semibold">
              6000
            </p>
            <p className="desc-txt mt-1 text-lg font-medium">
              Destination Chargers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charger;