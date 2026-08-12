import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import swiperfirst from "../../assets/images/1.AVIF";
import swipersecond from "../../assets/images/2.AVIF";
import swiperthird from "../../assets/images/3.AVIF";
import { VscChevronRightCompact, VscChevronLeftCompact, } from "react-icons/vsc";

const cars = [
  {
    title: "Introducing Model Y L Premium",
    subtitle: "Three Rows, Six Seats",
    image: swiperfirst,
  },
  {
    title: "Model 3",
    subtitle: "1.99% APR Available",
    image: swipersecond,
  },
  {
    title: "Model Y",
    subtitle: "0.99% APR Available",
    image: swiperthird,
  },
];

function Hero() {
  return (
    <section className="relative h-130 w-full overflow-hidden">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".tesla-next",
          prevEl: ".tesla-prev",
        }}
        pagination={{
          el: ".tesla-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="h-full w-full"
      >
        {cars.map((car) => (
          <SwiperSlide key={car.title} className="h-full w-full">
            <div className="relative h-full w-full">
              {/* Background Image */}
              <img
                src={car.image}
                alt={car.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/15" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col items-center pt-50 text-center text-white">
                <h1 className="px-4 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  {car.title}
                </h1>

                <p className="mt-3 text-base sm:text-lg">
                  {car.subtitle}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <button className="rounded-md bg-blue-600 px-8 py-2 text-[13px] font-semibold text-white transition hover:bg-blue-900 sm:px-12">
                    Order Now
                  </button>

                  <button className="tesla-txt rounded-md bg-white px-8 py-2 text-[13px] font-semibold text-black transition hover:bg-gray-200 sm:px-12">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Arrow */}
      <button
        className="tesla-prev absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-black transition hover:bg-white md:left-6"
        aria-label="Previous slide"
      >
        <VscChevronLeftCompact className="text-[24px]" />
      </button>

      {/* Right Arrow */}
      <button
        className="tesla-next absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-black transition hover:bg-white md:right-6"
        aria-label="Next slide"
      >
        <VscChevronRightCompact className="text-[24px]" />
      </button>

      {/* Pagination */}
      <div className="tesla-pagination absolute bottom-6 left-1/2 z-30 -translate-x-1/2" />
    </section>
  );
}

export default Hero;