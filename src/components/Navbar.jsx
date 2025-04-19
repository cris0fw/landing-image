import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropDown = () => {
    setOpenDropdown(!openDropdown);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header id="navbar" className="header">
      <nav className="nav">
        <h1 className="font-nunito text-2xl">Imagine.</h1>

        {/* Overlay oscuro cuando el menú está abierto */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 lg:hidden"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Menú lateral */}
        <div
          id="nav-menu"
          className={` ${
            menuOpen ? "right-0" : "right-[-100%]"
          }  absolute top-0 min-h-[100vh] w-[70%] bg-white backdrop-blur-sm flex items-start justify-start px-10 duration-300 lg:p-0 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto lg:transition-none`}
        >
          <ul className="nav_ul">
            <li>
              <a
                href="/"
                className={`${
                  active === "home" ? "text-blue font-bold" : "nav-link"
                }`}
                onClick={() => setActive("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={`${
                  active === "features" ? "text-blue font-bold" : "nav-link"
                }`}
                onClick={() => setActive("features")}
              >
                Features
              </a>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropDown}
                className={`${
                  active === "about" ? "text-blue font-bold" : "nav-link"
                }`}
              >
                About Us
              </button>

              {openDropdown && <DropDown />}
            </li>
            <li>
              <a
                href="#testimonials"
                className={`${
                  active === "testimonials" ? "text-blue font-bold" : "nav-link"
                }`}
                onClick={() => setActive("testimonials")}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className={`${
                  active === "blog" ? "text-blue font-bold" : "nav-link"
                }`}
                onClick={() => setActive("blog")}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`${
                  active === "contact" ? "text-blue font-bold" : "nav-link"
                }`}
                onClick={() => setActive("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Botón menú hamburguesa */}
        <div id="hamburguer" className="z-50 cursor-pointer lg:hidden">
          <div className="relative object-cover w-[30px] h-[30px]">
            {menuOpen ? (
              <img
                onClick={toggleMenu}
                src="/landing-image/close.svg"
                alt="Cerrar menú"
              />
            ) : (
              <img
                onClick={toggleMenu}
                src="/landing-image/menu.svg"
                alt="Abrir menú"
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
