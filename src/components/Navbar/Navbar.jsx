import {
  faBars,
  faCartShopping,
  faChevronDown,
  faRightFromBracket,
  faSearch,
  faSpinner,
  faStore,
  faUserPlus,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faAddressCard, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import freshCartLogo from "../../assets/images/freshcart-logo.svg";
import { Link, NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth.context";
import { CartContext } from "../../context/cart.context";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { wishlistContext } from "../../context/whishlist.context";
export default function Navbar() {
  const { logout, token } = useContext(AuthContext);
  const { cartInfo, isLoading, handleGetCartItems } = useContext(CartContext);
  const { getWishlistproducts } = useContext(wishlistContext);
  const isOnline = useOnlineStatus();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  function toggleMenu() {
    setisMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    handleGetCartItems();
    getWishlistproducts();
  }, [token]);
  return (
    <>
      <header className="container">
        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-5">
          <h1>
            <Link to={"/"}>
              <img src={freshCartLogo} alt="Fresh cart logo" />
            </Link>
          </h1>

          <ul className="hidden lg:flex items-center gap-4 ">
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-primary-500" : ""
                  } flex flex-col gap-1 items-center hover:text-primary-500 transition-colors duration-200`;
                }}
                to={"wishlist"}
              >
                <FontAwesomeIcon className="text-lg" icon={faHeart} />
                <span className="text-sm">Wishlist</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-primary-500" : ""
                  } flex flex-col gap-1 items-center hover:text-primary-500 transition-colors duration-200`;
                }}
                to={"cart"}
              >
                <div className="relative">
                  <FontAwesomeIcon
                    className="text-lg"
                    fixedWidth
                    icon={faCartShopping}
                  />
                  <span className=" absolute top-0 right-0 flex justify-center items-center -translate-y-1/2 bg-primary-600 size-4 rounded-full text-[12]">
                    {isLoading ? (
                      <FontAwesomeIcon icon={faSpinner} spin />
                    ) : token ? (
                      <>{cartInfo?.numOfCartItems}</>
                    ) : (
                      0
                    )}
                  </span>
                </div>
                <span className="text-sm">Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `${
                    isActive ? "text-primary-500" : ""
                  } flex flex-col gap-1 items-center hover:text-primary-500 transition-colors duration-200`;
                }}
                to={"orders"}
              >
                <FontAwesomeIcon className="text-lg" icon={faStore} />
                <span className="text-sm">Orders</span>
              </NavLink>
            </li>

            {!token ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-500" : ""
                      } flex flex-col gap-1 items-center hover:text-primary-500 transition-colors duration-200`;
                    }}
                    to={"signup"}
                  >
                    <FontAwesomeIcon className="text-lg" icon={faUserPlus} />
                    <span className="text-sm">Signup</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-500" : ""
                      } flex flex-col gap-1 items-center hover:text-primary-500 transition-colors duration-200`;
                    }}
                    to={"login"}
                  >
                    <FontAwesomeIcon className="text-lg" icon={faAddressCard} />
                    <span className="text-sm">login</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <li
                className="flex flex-col gap-1 items-center hover:text-primary-500 transition-colors duration-200 cursor-pointer"
                onClick={logout}
              >
                <FontAwesomeIcon
                  className="text-lg"
                  icon={faRightFromBracket}
                />
                <span className="text-sm">logout</span>
              </li>
            )}
          </ul>
          <button
            className="text-2xl bg-primary-700 rounded-md px-3 py-1 lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="text-gray-200" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-gray-200" />
            )}
          </button>
        </nav>
      </header>
      {/* Category navigation */}
      <nav className="bg-gray-100 py-3 hidden lg:flex ">
        <div className="container flex items-center justify-between">
          <div className=" flex items-center gap-5 ">
            <div className="relative group">
              <Link to={"/categories"}>
                <button className="btn flex items-center gap-3 text-sm border-none bg-primary-600 text-white hover:bg-primary-700">
                  <FontAwesomeIcon icon={faBars} />
                  <span>All categories</span>
                </button>
              </Link>
            </div>
            <ul className="flex gap-5 text-sm">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"brands"}>Brands</NavLink>
              </li>
            </ul>
          </div>
          {isOnline && (
            <span className="text-primary-600">
              <FontAwesomeIcon icon={faWifi} />
              <span className="ps-1">Online</span>
            </span>
          )}
        </div>
      </nav>
      {/* background */}
      {isMenuOpen && (
        <>
          <div
            className="background fixed  z-40 inset-0 bg-black/30"
            onClick={toggleMenu}
          ></div>

          <div className="offcanvas fixed  z-50 bg-white top-0 bottom-0 space-y-7 p-5 animate-slide-in">
            <div className="flex justify-between border-b-1 border-b-gray-200 pb-5">
              <Link to={"/"}>
                <img src={freshCartLogo} alt="fresh cart logo" />
              </Link>
              <button>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="rounded-full bg-gray-200 p-2 size-3 "
                  onClick={toggleMenu}
                />
              </button>
            </div>

            <div className="">
              <h2 className="text-md font-bold">Main Menu</h2>
              <ul className="border-b-1 border-b-gray-200 *:hover:bg-gray-100 transition-colors duration-300 space-y-2 mt-3">
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-500 bg-primary-100" : ""
                      } flex gap-1 items-center px-2 py-3 hover:text-primary-500 transition-colors duration-200`;
                    }}
                    to={"wishlist"}
                  >
                    <FontAwesomeIcon
                      className="text-lg"
                      fixedWidth
                      icon={faHeart}
                    />
                    <span className="text-sm">Wishlist</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-500 bg-primary-100" : ""
                      } flex gap-1 items-center px-2 py-3 hover:text-primary-500 transition-colors duration-200`;
                    }}
                    to={"cart"}
                  >
                    <div className="relative">
                      <FontAwesomeIcon
                        className="text-lg"
                        fixedWidth
                        icon={faCartShopping}
                      />
                      <span className=" absolute top-0 right-0 flex justify-center items-center -translate-y-1/2 bg-primary-600 size-4 rounded-full text-[12]">
                        {isLoading ? (
                          <FontAwesomeIcon icon={faSpinner} spin />
                        ) : token ? (
                          <>{cartInfo?.numOfCartItems}</>
                        ) : (
                          0
                        )}
                      </span>
                    </div>
                    <span className="text-sm">Cart</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-primary-500 bg-primary-100" : ""
                      } flex gap-1 items-center px-2 py-3 hover:text-primary-500 transition-colors duration-200`;
                    }}
                    to={"orders"}
                  >
                    <FontAwesomeIcon
                      className="text-lg"
                      fixedWidth
                      icon={faStore}
                    />
                    <span className="text-sm">Orders</span>
                  </NavLink>
                </li>
              </ul>
              <ul className=" *:hover:bg-gray-100 transition-colors duration-300 space-y-2 mt-3">
                <h2 className="text-md font-bold">Account</h2>
                {!token ? (
                  <>
                    <li>
                      <NavLink
                        className={({ isActive }) => {
                          return `${
                            isActive ? "text-primary-500 bg-primary-100" : ""
                          } flex gap-1 items-center px-2 py-3 hover:text-primary-500 transition-colors duration-200`;
                        }}
                        to={"signup"}
                      >
                        <FontAwesomeIcon
                          className="text-lg"
                          icon={faUserPlus}
                        />
                        <span className="text-sm">Signup</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) => {
                          return `${
                            isActive ? "text-primary-500 bg-primary-100" : ""
                          } flex gap-1 items-center px-2 py-3 hover:text-primary-500 transition-colors duration-200`;
                        }}
                        to={"login"}
                      >
                        <FontAwesomeIcon
                          className="text-lg"
                          icon={faAddressCard}
                        />
                        <span className="text-sm">login</span>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li
                    onClick={logout}
                    className="flex gap-1 items-center hover:text-primary-500 transition-colors duration-200 cursor-pointer px-2 py-3"
                  >
                    <FontAwesomeIcon
                      className="text-lg"
                      icon={faRightFromBracket}
                    />
                    <span className="text-sm">logout</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
