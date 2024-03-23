import { NavLink } from "react-router-dom";
import { Menu } from "../../data/MenuData";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="z-102 lg:flex items-center lg:space-x-7  lg:ml-0 ">
      <nav className="lg:flex lg:space-x-4 text-white lg:text-[#0e118a]">
        {Menu.map((nav) => (
          <NavLink key={nav.id} to={nav.link}>
            <h1 className="pb-4 lg:pb-0 font-bold">{nav.title}</h1>
          </NavLink>
        ))}
      </nav>

      <div className=" flex  items-center space-x-1 text-white lg:text-[#0e118a] cursor-pointer rounded-sm p-1 w-16 font-bold">
        <FaShoppingCart size={20} />
      </div>
    </div>
  );
};

export default Nav;
