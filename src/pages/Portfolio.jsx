import { NavLink, Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="bg-slate-400 py-7">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center text-white font-serif">
          Portfolio
        </h2>
        <div className="flex justify-center items-center my-3">
          <ul className="flex gap-3">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 font-serif text-xl"
                    : "text-white font-serif text-xl"
                }
                to="/portfolio"
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 font-serif text-xl"
                    : "text-white font-serif text-xl"
                }
                to="/portfolio/brand"
              >
                Brand
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 font-serif text-xl"
                    : "text-white font-serif text-xl"
                }
                to="/portfolio/design"
              >
                Design
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 font-serif text-xl"
                    : "text-white font-serif text-xl"
                }
                to="/portfolio/photograpy"
              >
                Photograpy
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="my-12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
