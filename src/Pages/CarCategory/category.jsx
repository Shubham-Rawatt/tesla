import React from "react";
import modelyl from "../../assets/images/4.AVIF";
import model3 from "../../assets/images/5.AVIF";
import modely from "../../assets/images/6.jpg";
import cyber from "../../assets/images/7.AVIF";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { VscChevronRightCompact, VscChevronLeftCompact, } from "react-icons/vsc";



const CarCategory = () => {
  const categoryData = [
    {
      title: "Long Wheelbase Midsize SUV",
      model: "Model Y L Premium",
      price: "Starting at $61,990²",
      image: modelyl,
    },
    {
      title: "Sport Sedan",
      model: "Model 3",
      price: "Lease From $379/month",
      image: model3,
    },
    {
      title: "Midsize SUV",
      model: "Model Y",
      price: "Lease From $459/month",
      image: modely,
    },
    {
      title: "Utility Truck",
      model: "Cybertruck",
      price: "Lease From $949/month",
      image: cyber,
    },
  ];


  return (
    <section className="w-full overflow-hidden px-5 mt-10">
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
          {categoryData.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[80vh] overflow-hidden rounded-lg">
                <img
                  src={car.image}
                  alt={car.model}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute left-9 top-8 z-10 text-white">
                  <h3 className="text-base font-semibold">
                    {car.title}
                  </h3>
                </div>

                <div className="absolute bottom-6 left-9 z-10 text-white">
                  <h2 className="text-4xl font-semibold">
                    {car.model}
                  </h2>

                  <p className="mt-1 font-medium underline">
                    {car.price}
                  </p>

                  <div className="mt-6 flex gap-2">
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

        {/* Previous Button */}
        <button
          className="car-prev absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-gray-800 shadow-md"
          aria-label="Previous"
        >
          <VscChevronLeftCompact/>
        </button>

        {/* Next Button */}
        <button
          className="car-next absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl text-gray-800 shadow-md"
          aria-label="Next"
        >
          <VscChevronRightCompact/>
        </button>
      </div>
    </section>
  );
};

export default CarCategory;