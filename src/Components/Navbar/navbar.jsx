// import { FiHelpCircle, FiGlobe  } from "react-icons/fi";
// import { FaRegCircleUser } from "react-icons/fa6";

// const Navbar = () => {
//   return (
//     <section className='px-10 pt-5 bg-white shadow-md p-5 sticky top-0 z-50'>
//     <div>
//         <nav className='flex justify-between text-center items-center'>
//             <div>
//                 <h3>TESLA</h3>
//             </div>
//             <div>
//                 <ul className='flex justify-between gap-8 tesla-txt font-semibold text-[14px]'>
//                     <li>Vehicles</li>
//                     <li>Energy</li>
//                     <li>Charging</li>
//                     <li>Discover</li>
//                     <li>Shop</li>
//                 </ul>
//             </div>
//             <div>
//                 <ul className="flex justify-between gap-3 font-light tesla-txt">
//                     <li><FiHelpCircle size={20}/></li>
//                     <li><FiGlobe size={20}/></li>
//                     <li><FaRegCircleUser size={20}/></li>
//                 </ul>
//             </div>
//         </nav>
//     </div>
//     </section>
//   )
// }

// export default Navbar

import { FiHelpCircle, FiGlobe } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from '../../assets/images/logo.png';


const Navbar = () => {
  return (
    <section className="fixed left-0 top-0 z-50 shadow-lg w-full bg-white px-10 py-5">
      <nav className="flex items-center justify-between">
        <div>
          <img src={logo} alt="web logo" className="" />
        </div>

        <ul className="flex gap-8 text-[14px] font-semibold tesla-txt">
          <li><button type="button" id="" class=""><span>Vehicles</span></button></li>
          <li><button type="button" id="" class=""><span>Energy</span></button></li>
          <li><button type="button" id="" class=""><span>Charging</span></button></li>
          <li><button type="button" id="" class=""><span>Discover</span></button></li>
          <li><button type="button" id="" class=""><span>Shop</span></button></li>
        </ul>

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