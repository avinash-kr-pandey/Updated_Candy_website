import React, { useState } from "react";
import Nav from "./components/home/Nav";
import Footer from "./components/home/Footer";
import Router from "./router/Router";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import AddCart from "./pages/AddCart";
import { useNavigate } from "react-router-dom";


import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const navigate = useNavigate();
  const BrandhandleDropdownClick = (page) => {
    navigate("/brandcollections", { state: { page } });
    HandleSide();
  };

  const handleDropdownClick = (page) => {
    navigate("/collections", { state: { page } });
    HandleSide();
  };

  const [SideNav, setSideNav] = useState(false);
  const HandleSide = () => {
    setSideNav(false);
  };

  return (
    <section>
      <Nav setSideNav={setSideNav} SideNav={SideNav} />
      <div
        className={`${
          SideNav ? "" : "hidden"
        } bg-white flex flex-col justify-between fixed z-10 h-[49rem] md:h-[55rem] md:w-[50%] w-full`}
      >
        <ul
          className={`flex gap-[30px] px-10 flex-col text-xl text-blue-900 font-medium mt-[20px] py-4`}
        >
          <NavLink to="/" onClick={HandleSide}>
            Home
          </NavLink>
          <NavLink to="/featurednew" onClick={HandleSide}>
            Featured & New
          </NavLink>

          <Menu as="div" className="relative inline-block">
            <div>
              <MenuButton className="inline-flex w-full font-medium text-xxl font-bold gap-6">
                By Type
                <ChevronDownIcon
                  className="-mr-1 h-8 w-6 pl-1"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => handleDropdownClick("page1")}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Page 1
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => handleDropdownClick("page2")}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Page 2
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => handleDropdownClick("page3")}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Page 3
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => handleDropdownClick("page4")}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Page 4
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>

          <Menu as="div" className="relative inline-block">
            <div>
              <MenuButton className="inline-flex w-full font-medium text-xxl font-bold gap-6">
                By Brand
                <ChevronDownIcon
                  className="-mr-1 h-8 w-5 pl-1"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => BrandhandleDropdownClick("page1")}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Page 1
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => BrandhandleDropdownClick("page2")}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Page 2
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => BrandhandleDropdownClick("page3")}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Page 3
                      </button>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={() => BrandhandleDropdownClick("page4")}
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Page 4
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
          <NavLink to="/" onClick={HandleSide}>
            By Country
          </NavLink>
          <NavLink to="/bevereges" onClick={HandleSide}>
            Beverages
          </NavLink>
          <NavLink to="/specialdeals" onClick={HandleSide}>
            Special Deals
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) => (isActive ? "underline" : "")}
            onClick={HandleSide}
          >
            All Products
          </NavLink>
        </ul>
        <NavLink
          to="/login"
          className="py-5 flex gap-2 items-center text-blue-900 px-10 font-semibold bg-[#eaeaea] text-xl"
          onClick={HandleSide}
        >
          <CgProfile />
          <p>Login</p>
        </NavLink>
      </div>
      <Router />
      <Footer />
    </section>
  );
}

export default App;
