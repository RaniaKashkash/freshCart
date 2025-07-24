import FreshCartLogo from "../../assets/images/freshcart-logo.svg";
import miniLogo from "../../assets/images/mini-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import NewsletterSubscription from "../NewsletterSubscription/NewsletterSubscription";

export default function Footer() {
  return (
    <>
      <footer className="py-5 bg-white border-t border-t-gray-400/20">
        <div className="container">
          <div className="grid md:grid-cols-2 xl:grid-cols-5 py-8 gap-5">
            <div className="xl:col-span-2 space-y-4 ">
              <img src={FreshCartLogo} alt="fresh cart logo" />
              <p>
                FreshCart is a versatile e-commerce platform offering a wide
                range of products, from clothing to electronics. It provides a
                user-friendly experience for seamless shopping across diverse
                categories.
              </p>
              <ul className="flex items-center gap-4 *:text-gray-500 text-lg *:hover:text-primary-600 *:transition-colors *:duration-200">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold mb-2">Categories</h2>
              <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
                <li>
                  <Link to={``}>Men's Fashion</Link>
                </li>
                <li>
                  <Link to={``}>Women's Fashion</Link>
                </li>
                <li>
                  <Link to={``}>Baby & Toys</Link>
                </li>
                <li>
                  <Link to={``}>Beauty & Health</Link>
                </li>
                <li>
                  <Link to={``}>Electronics</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
              <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
                <li>
                  <Link to={`/about`}>About Us</Link>
                </li>
                <li>
                  <Link to={`/contact`}>Contact Us</Link>
                </li>
                <li>
                  <Link to={`privacy-policy`}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={`/terms`}>Term of Service</Link>
                </li>
                <li>
                  <Link to={`/shipping-policy`}>Shipping Policy</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold mb-2">Customer Services</h2>
              <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
                <li>
                  <Link to={`/account`}>My Account</Link>
                </li>
                <li>
                  <Link to={`/orders`}>My Orders</Link>
                </li>
                <li>
                  <Link to={`/wishlist`}>WishList</Link>
                </li>
                <li>
                  <Link to={`/return-and-refund`}>Return & Refund</Link>
                </li>
                <li>
                  <Link to={`/help=center`}>Help Center</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between py-5 border-t-1 border-t-gray-400/20">
            <p>
              &copy; {new Date().getFullYear()} Fresh Cart/All right reserved
            </p>
            <img src={miniLogo} alt="mini logo" className="size-8" />
          </div>
        </div>
      </footer>
    </>
  );
}
