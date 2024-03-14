import { NavLink } from "react-router-dom";
import { Menu } from "../../data/MenuData";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="z-102 lg:flex items-center lg:space-x-7  lg:ml-0 ">
      <nav className="lg:flex lg:space-x-4 text-white lg:text-[#0e118a]">
        {Menu.map((nav) => (
          <NavLink key={nav.id}>
            <h1 className="pb-4 lg:pb-0 font-bold">{nav.title}</h1>
          </NavLink>
        ))}
      </nav>
      <div className="lg:flex  items-center lg:space-x-4 text-white lg:text-[#0e118a] ">
        <NavLink to="/login">
          <h1 className="pb-4 lg:pb-0 font-bold">Login</h1>
        </NavLink>
        <NavLink to="/register">
          <h1 className="pb-4 lg:pb-0 font-bold">Register</h1>
        </NavLink>
        <NavLink>
          <h1 className="pb-4 lg:pb-0 hidden font-bold">Account</h1>
        </NavLink>
      </div>

      <div className="relative flex  items-center space-x-1 text-white lg:text-[#0e118a] cursor-pointer rounded-sm p-1 w-16 font-bold">
        <h1>cart</h1>

        <FaShoppingCart size={20} />
        <p className="absolute -top-1 left-12 text-[10px]">0</p>
      </div>
    </div>
  );
};

export default Nav;
