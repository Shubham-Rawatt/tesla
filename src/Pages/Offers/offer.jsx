
import React from "react";
import car1 from "../../assets/images/8.avif";
import car2 from "../../assets/images/9.avif";

const Offer = () => {
  return (
    <section className="w-full px-10 mt-8">
  <div className="flex gap-5">
    <div className="flex-1 bg-[#f5f5f5] p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="tesla-txt text-[30px] font-medium">
            Current Offers
          </h3>

          <p className="desc-txt text-[16px]">
            Explore limited-time offers on Tesla vehicles.
          </p>

          <a href="#" className="block pt-6">
            <span className="bg-white px-5 py-2 tesla-txt text-sm">
              Learn More
            </span>
          </a>
        </div>

        <img
          src={car1}
          alt="img1"
          className="h-50 w-50 object-contain"
        />
      </div>
    </div>

    <div className="flex-1 bg-[#f5f5f5] p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="tesla-txt text-[30px] font-medium">
            Inventory
          </h3>

          <p className="desc-txt text-[16px]">
            Find nearby vehicles available for immediate delivery.
          </p>

          <div className="mx-auto flex gap-3 pt-6">
            <span className="bg-white px-5 py-2 tesla-txt text-sm">
              <a href="#">New</a>
            </span>

            <span className="bg-white px-5 py-2 tesla-txt text-sm">
              <a href="#">Pre-Owned</a>
            </span>
          </div>
        </div>

        <img
          src={car2}
          alt="img2"
          className="h-50 w-50 object-contain"
        />
      </div>
    </div>
  </div>
</section>
  );
};

export default Offer;