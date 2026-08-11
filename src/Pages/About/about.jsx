import React, { useEffect, useState } from "react";

const About = () => {
const [count , setCount] = useState(123456789);

 useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 50);
    }, 500);

      return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white px-6 mt-10">
      <div className="mx-auto grid max-w-350 grid-cols-2 overflow-hidden rounded-2xl bg-[#f5f5f5]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-14 py-1">
          <h2 className="text-4xl font-medium tracking-tight text-[#171a20]">
            Full Self-Driving <br />
            (Supervised)
          </h2>

          <p className="tesla-txt mt-1 font-medium">
            Makes every drive easier. Subscribe for $99/mo.¹
          </p>

          <div className="mt-5 flex gap-12">
            <div>
              <span className="text-3xl font-bold text-black">7x</span>

              <p className="mt-1 text-md desc-txt">
                Fewer Collisions
              </p>
            </div>

            <div>
              <span className="text-3xl font-bold text-black">
                  {count.toLocaleString()}
              </span>

              <p className="desc-txt mt-1 text-md">
                Miles Driven
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="rounded-sm bg-[#171a20] px-8 py-2 text-sm font-medium text-white transition hover:bg-[#30343b]">
              Schedule Demo
            </button>
            <button className="rounded-sm bg-white px-8 py-2 text-sm font-medium text-[#171a20] shadow-sm transition hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div className="flex items-center justify-center bg-[#eeeeee] p-6">
          <video
            preload="auto"
            autoPlay
            playsInline
            loop
            aria-label="Full Self-Driving demonstration"
            className="h-80 w-full rounded-xl object-cover"
            crossOrigin="anonymous"
          >
            <source
              src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-FSD-Card-Desktop.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default About;
