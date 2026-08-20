import { vehicleMenuData } from "../../data/vehicles";

const VehicleMenu = () => {
  return (
    <div className="w-full bg-white px-12 py-8">
      <div className="flex">
        {/* Left Side - Vehicles */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-8 flex-1">
          {vehicleMenuData.vehicles.map((vehicle) => (
            <div key={vehicle.id} className="text-center">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-20 object-contain"/>

              <h3 className="text-[16px] font-semibold">{vehicle.name}</h3>

              <div className="flex justify-center gap-5">
                {vehicle.links.map((link) => (
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
            {vehicleMenuData.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-xs font-bold hover:underline">
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

export default VehicleMenu;
