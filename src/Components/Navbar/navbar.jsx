// import { FiHelpCircle, FiGlobe } from "react-icons/fi";
// import { FaRegCircleUser } from "react-icons/fa6";
// import logo from '../../assets/images/logo.png';
// import VehicleMenu from "../MegaMenu/VehicleMenu";
// import EnergyMenu from "../MegaMenu/EnergyMenu";
// import ChargingMenu from "../MegaMenu/ChargingMenu";
// // import ShopMenu from "../MegaMenu/ShopMenu";


// const Navbar = () => {
//   return (
//     <section className="fixed left-0 top-0 z-50 shadow-lg w-full bg-white px-10 py-5">
//       <nav className="flex items-center justify-between">
//         <div>
//           <img src={logo} alt="web logo" className="" />
//         </div>

//          <ul className="flex gap-8 text-[14px] font-semibold tesla-txt">
          
//           <li className="group relative">
//           <button> <span>Vehicles</span> </button> 
//           {/* <div  className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-6 group-hover:block"> <VehicleMenu /></div></li> */}
//           <div className="absolute left-1/2 top-full hidden w-screen -translate-x-1/2 pt-5 group-hover:block"><VehicleMenu /> </div> </li>

//           <li className="group relative">
//             <button><span>Energy</span></button>
//             <div className="absolute left-1/2 top-full hidden w-screen -translate-x-1/2 pt-5 group-hover:block"> <EnergyMenu /></div></li>

//           <li className="group relative">
//             <button><span>Charging</span></button>
//             <div className="absolute left-1/2 top-full hidden w-screen -translate-x-1/2 pt-5 group-hover:block"> <ChargingMenu /></div></li>
         
//           <li className="group relative">
//             <button><span>Discover</span></button>
//             </li>

//           <li className="group relative">
//             <button><span>Shop</span></button>
//             {/* <div className="hidden group-hover:block"> <ShopMenu /></div> */}
//             </li>
          
//         </ul> 


//         {/* <ul className="flex gap-8 text-[14px] font-semibold">
//   <li className="group">
//     <button>Vehicles</button>
//     <VehicleMenu />
//   </li>

//   <li className="group">
//     <button>Energy</button>
//     <EnergyMenu />
//   </li>

//   <li className="group">
//     <button>Charging</button>
//     <ChargingMenu />
//   </li>

//   <li className="group">
//     <button>Discover</button>
//     <DiscoverMenu />
//   </li>

//   <li className="group">
//     <button>Shop</button>
//     <ShopMenu />
//   </li>

// </ul> */}

//         <ul className="flex gap-3 font-light tesla-txt">
//           <li>
//             <FiHelpCircle size={20} />
//           </li>
//           <li>
//             <FiGlobe size={20} />
//           </li>
//           <li>
//             <FaRegCircleUser size={20} />
//           </li>
//         </ul>
//       </nav>
//     </section>
//   );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import { FiHelpCircle, FiGlobe, FiMenu, FiX } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";

import logo from "../../assets/images/logo.png";
import VehicleMenu from "../MegaMenu/VehicleMenu";
import EnergyMenu from "../MegaMenu/EnergyMenu";
import ChargingMenu from "../MegaMenu/ChargingMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="fixed left-0 top-0 z-50 w-full bg-white shadow-lg">
      <nav className="flex h-[72px] items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="Tesla logo"
            className="w-[110px] sm:w-[120px]"
          />
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden items-center gap-6 text-[14px] font-semibold tesla-txt lg:flex xl:gap-8">

          {/* Vehicles */}
          <li className="group relative">
            <button className="py-5">
              Vehicles
            </button>

            <div className="absolute left-1/2 top-full hidden w-screen -translate-x-1/2 pt-5 group-hover:block">
              <VehicleMenu />
            </div>
          </li>

          {/* Energy */}
          <li className="group relative">
            <button className="py-5">
              Energy
            </button>

            <div className="absolute left-1/2 top-full hidden w-screen -translate-x-1/2 pt-5 group-hover:block">
              <EnergyMenu />
            </div>
          </li>

          {/* Charging */}
          <li className="group relative">
            <button className="py-5">
              Charging
            </button>

            <div className="absolute left-1/2 top-full hidden w-screen -translate-x-1/2 pt-5 group-hover:block">
              <ChargingMenu />
            </div>
          </li>

          {/* Discover */}
          <li>
            <button className="py-5">
              Discover
            </button>
          </li>

          {/* Shop */}
          <li>
            <button className="py-5">
              Shop
            </button>
          </li>
        </ul>

        {/* ================= DESKTOP RIGHT ICONS ================= */}
        <ul className="hidden items-center gap-4 tesla-txt lg:flex">
          <li className="cursor-pointer">
            <FiHelpCircle size={20} />
          </li>

          <li className="cursor-pointer">
            <FiGlobe size={20} />
          </li>

          <li className="cursor-pointer">
            <FaRegCircleUser size={20} />
          </li>
        </ul>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center rounded-full p-2 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FiX size={25} />
          ) : (
            <FiMenu size={25} />
          )}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gray-200 bg-white px-5 py-5 lg:hidden">

          <div className="flex flex-col gap-1 text-[15px] font-semibold tesla-txt">

            <button className="flex w-full items-center justify-between rounded-lg px-4 py-4 text-left hover:bg-gray-100">
              <span>Vehicles</span>
              <span>+</span>
            </button>

            <button className="flex w-full items-center justify-between rounded-lg px-4 py-4 text-left hover:bg-gray-100">
              <span>Energy</span>
              <span>+</span>
            </button>

            <button className="flex w-full items-center justify-between rounded-lg px-4 py-4 text-left hover:bg-gray-100">
              <span>Charging</span>
              <span>+</span>
            </button>

            <button className="w-full rounded-lg px-4 py-4 text-left hover:bg-gray-100">
              Discover
            </button>

            <button className="w-full rounded-lg px-4 py-4 text-left hover:bg-gray-100">
              Shop
            </button>

            {/* Mobile Icons */}
            <div className="mt-3 flex items-center gap-5 border-t border-gray-200 px-4 pt-5">

              <button className="flex items-center gap-2">
                <FiHelpCircle size={20} />
                <span>Support</span>
              </button>

              <button className="flex items-center gap-2">
                <FiGlobe size={20} />
                <span>Language</span>
              </button>

              <button className="flex items-center gap-2">
                <FaRegCircleUser size={20} />
                <span>Account</span>
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;