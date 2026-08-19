import { FiHelpCircle, FiGlobe } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from '../../assets/images/logo.png';
import VehicleMenu from "../MegaMenu/VehicleMenu";
import EnergyMenu from "../MegaMenu/EnergyMenu";
import ChargingMenu from "../MegaMenu/ChargingMenu";
import ShopMenu from "../MegaMenu/ShopMenu";


const Navbar = () => {
  return (
    <section className="fixed left-0 top-0 z-50 shadow-lg w-full bg-white px-10 py-5">
      <nav className="flex items-center justify-between">
        <div>
          <img src={logo} alt="web logo" className="" />
        </div>

         <ul className="flex gap-8 text-[14px] font-semibold tesla-txt">
          <li className="group relative">
          <button> <span>Vehicles</span> </button> 
          <div className="hidden group-hover:block"> <VehicleMenu /></div></li>

          <li className="group relative">
            <button><span>Energy</span></button>
            <div className="hidden group-hover:block"> <EnergyMenu /></div></li>

          <li className="group relative">
            <button><span>Charging</span></button>
            <div className="hidden group-hover:block"> <ChargingMenu /></div></li>
         
          <li className="group relative">
            <button><span>Discover</span></button>
            </li>

          <li className="group relative">
            <button><span>Shop</span></button>
            <div className="hidden group-hover:block"> <ShopMenu /></div></li>
          
        </ul> 


        {/* <ul className="flex gap-8 text-[14px] font-semibold">
  <li className="group">
    <button>Vehicles</button>
    <VehicleMenu />
  </li>

  <li className="group">
    <button>Energy</button>
    <EnergyMenu />
  </li>

  <li className="group">
    <button>Charging</button>
    <ChargingMenu />
  </li>

  <li className="group">
    <button>Discover</button>
    <DiscoverMenu />
  </li>

  <li className="group">
    <button>Shop</button>
    <ShopMenu />
  </li>

</ul> */}

        <ul className="flex gap-3 font-light tesla-txt">
          <li>
            <FiHelpCircle size={20} />
          </li>
          <li>
            <FiGlobe size={20} />
          </li>
          <li>
            <FaRegCircleUser size={20} />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;