import { GrFormDown } from "react-icons/gr";
import { title } from "../../interfaces/InterfacesHeader";
 
function HeaderMenu({
    title,
}: title) {
  return (
    <div className="flex cursor-pointer hover:bg-gray-200 h-full items-center px-8">
        {title} <GrFormDown className="ml-2 font-bold text-gray-500" />
    </div>
  );
}

export default HeaderMenu;
