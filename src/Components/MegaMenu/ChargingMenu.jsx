import { chargingMenuData } from "../../data/charging";

const ChargingMenu = () => {
  return (
    <div className="w-full bg-white px-12 py-8">
      <div className="flex">
        {/* Left Side - Vehicles */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-8 flex-1 pr-10">
          {chargingMenuData.charging.map((charge) => (
            <div key={charge.id} className="text-center">
              <img
                src={charge.image}
                alt={charge.name}
                className="w-full h-28 object-contain"
              />

              <h3 className="mt-3 text-[16px] font-semibold">{charge.name}</h3>

              <div className="flex justify-center gap-5 mt-2">
                {charge.links.map((link) => (
                  <a
                    href="#"
                    key={link}
                    className="text-sm text-gray-600 underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Links */}
        <div className="border-l border-gray-200 pl-12 w-64">
          <ul className="space-y-4">
            {chargingMenuData.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm font-semibold hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChargingMenu;
