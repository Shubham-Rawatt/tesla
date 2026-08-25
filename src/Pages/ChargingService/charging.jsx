import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { VscChevronRightCompact, VscChevronLeftCompact } from "react-icons/vsc";
import img1 from "../../assets/images/11.avif";
import img2 from "../../assets/images/12.avif";
import img3 from "../../assets/images/13.avif";
import img4 from "../../assets/images/14.avif";

const ChargingCategory = () => {
  const chargingData = [
    {
      title: "Solar Panels",
      desc: "Power Your Home and Reduce Your Electricity Bill",
      image: img1,
    },
    {
      title: "Powerwall",
      desc: "Keep Your Lights On During Outages",
      image: img2,
    },
    {
      title: "Megapack",
      desc: "Massive Batteries for Massive Energy Support",
      image: img3,
    },
    {
      title: "Solar Roof",
      desc: "Generate Clean Energy With Your Roof",
      image: img4,
    },
  ];

  return (
    <section className="mt-20 w-full overflow-hidden px-5">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.35}
          grabCursor={true}
          navigation={{
            nextEl: ".car-next",
            prevEl: ".car-prev",
          }}
          className="car-swiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 1.35,
              spaceBetween: 20,
            },
          }}
        >
          {chargingData.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[70vh] overflow-hidden rounded-lg">
                <img
                  src={car.image}
                  alt={car.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute bottom-6 left-9 z-10 text-white">
                  <h2 className="text-3xl font-semibold">{car.title}</h2>

                  <p className="mt-1 max-w-md font-medium">{car.desc}</p>

                  <div className="mt-5 flex gap-2">
                    <button className="h-9 w-36 rounded-sm bg-blue-500 text-sm font-semibold text-white">
                      Order Now
                    </button>

                    <button className="h-9 w-36 rounded-sm bg-white text-sm font-semibold text-gray-800">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="car-prev absolute left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 text-gray-800 shadow-md"
          aria-label="Previous"
        >
          <VscChevronLeftCompact size={22} />
        </button>

        <button
          className="car-next absolute right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 text-gray-800 shadow-md"
          aria-label="Next"
        >
          <VscChevronRightCompact size={22} />
        </button>
      </div>
    </section>
  );
};

export default ChargingCategory;
