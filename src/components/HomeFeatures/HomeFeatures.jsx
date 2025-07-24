import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHeadset,
  faRotateRight,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeFeatures() {
  return (
    <>
      <div className="">
        <div className="container p-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 *:flex *:justify-start *:items-center *:gap-4 *:px-4 *:py-2">
          <div className="card rounded-md  border-gray-100 border-1 ">
            <div className="icon *:text-xl text-primary-700 flex justify-center items-center size-12 rounded-full p-1 bg-primary-200">
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <div className="content">
              <h2 className="font-medium">Free Delivery</h2>
              <span className="text-sm text-gray-500">Orders 50$ or more</span>
            </div>
          </div>
          <div className="card rounded-md  border-gray-100 border-1 ">
            <div className="icon *:text-xl text-primary-700 flex justify-center items-center size-12 rounded-full p-1 bg-primary-200">
              <FontAwesomeIcon icon={faRotateRight} />
            </div>
            <div className="content">
              <h2 className="font-medium">30 Days return</h2>
              <span className="text-sm text-gray-500">
                Satisfaction guaranteed
              </span>
            </div>
          </div>
          <div className="card rounded-md  border-gray-100 border-1">
            <div className="icon *:text-xl text-primary-700 flex justify-center items-center size-12 rounded-full p-1 bg-primary-200">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <div className="content">
              <h2 className="font-medium">Secure Payment</h2>
              <span className="text-sm text-gray-500">
                100% protected checkout
              </span>
            </div>
          </div>
          <div className="card rounded-md  border-gray-100 border-1 ">
            <div className="icon *:text-xl text-primary-700 flex justify-center items-center size-12 rounded-full p-1 bg-primary-200">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <div className="content">
              <h2 className="font-medium">24/7 Support</h2>
              <span className="text-sm text-gray-500">
                Ready to help anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
