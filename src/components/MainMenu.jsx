import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const MainMenu = () => {
  const menuItems = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Portfolio", link: "/portfolio" },
    // { id: 4, title: 'News', link: '/news' },
    { id: 5, title: "Services", link: "/services" },
    { id: 6, title: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-400 py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-[20%]">
          <Link to="/" className="text-4xl text-white font-serif font-bold">
            Rony
          </Link>
        </div>

        <div className="w-[80%] hidden md:flex justify-end items-center">
          <ul className="flex gap-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-lg font-medium text-white font-roboto hover:text-indigo-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <IoClose className="text-white text-5xl cursor-pointer" />
            ) : (
              <FaBars className="text-white text-4xl cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col gap-3 items-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-lg font-medium text-white font-roboto hover:text-indigo-500"
                  onClick={toggleMobileMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainMenu;
