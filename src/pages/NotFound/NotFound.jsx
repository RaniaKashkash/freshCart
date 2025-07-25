import {
  faHome,
  faSearch,
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";

export default function NotFound() {
  return (
    <>
      <Pagemetadata title="Not Found" />

      <div className="container relative text-center flex flex-col justify-center items-center space-y-2 py-10">
        <div className="flex justify-center items-center">
          <span className="text-[200px] font-bold text-primary-100">404</span>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="absolute text-primary-600 text-4xl"
          />
        </div>
        <div className="space-y-2">
          <p className="text-3xl font-semibold">Oops!Page Not Found</p>
          <p className="text-gray-600">
            The page you are looking for seems to have gone shopping
          </p>
          <span className="text-gray-500">
            Don't worry,our gresh products are still available for you
          </span>
        </div>
        <div className="buttons flex space-x-3   *:items-center">
          <button className="*:flex *:gap-x-2 *:items-center btn bg-primary-600 text-white !border-primary-600 hover:bg-primary-700 transition-colors duration-200">
            <Link to={"/"}>
              {" "}
              <FontAwesomeIcon icon={faHome} />
              <span>Back to home</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
