import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faShieldHalved,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import loginImg from "../../assets/images/login-img.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { sendDataToLogin, sendDataToSignUp } from "../../services/auth-service";
import { AuthContext } from "../../context/Auth.context";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const location = useLocation();
  const fromPath = location?.state?.from || "/";

  const navigate = useNavigate();
  const [wrongCredentails, setWrongCredentails] = useState(null);
  const [isShown, setIsShown] = useState(false);

  function togglePassword() {
    setIsShown(!isShown);
  }
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const validationSchema = yup.object({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  async function handleLogin(values) {
    try {
      const response = await sendDataToLogin(values);
      if (response.success) {
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        const user = localStorage.getItem("userData");
        toast.success("Welcome Back!");
        if (values.rememberMe) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }
        setToken(response.data.token);
        setTimeout(() => {
          navigate(fromPath);
        }, 2000);
      }
    } catch (error) {
      setWrongCredentails(error.message);
    }
  }
  function handleInputChange(e) {
    if (wrongCredentails) {
      setWrongCredentails(null);
    }
    formik.handleChange(e);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <Pagemetadata title="Login" description="login,email,password" />
      <main className="py-12">
        <div className="container flex flex-col items-center justify-center lg:flex-row lg:gap-12">
          {/* left side */}
          <div className="py-10 space-y-8 flex flex-col justify-center items-center">
            <div className="image size-90 mb-3">
              <img
                src={loginImg}
                alt=" vegetable cart"
                className="shadow-xl rounded-lg"
              />
            </div>
            <div className="content text-center">
              <h2 className="text-3xl font-bold mb-3">
                Fresh Groceries Delivered
              </h2>
              <p>
                Join thousands of happy customers who trust FreshCart for <br />
                their daily grocery needs
              </p>
            </div>
            <ul className="flex gap-5 *:flex *:items-center *:gap-2">
              <li>
                <div className="flex items-center text-primary-500">
                  <FontAwesomeIcon icon={faTruck} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">Free Delivery</h3>
                </div>
              </li>
              <li>
                <div className="flex items-center text-primary-500">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">Secure Payment</h3>
                </div>
              </li>
              <li>
                <div className="flex items-center text-primary-500">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">24/7 Support</h3>
                </div>
              </li>
            </ul>
          </div>
          {/* right side */}
          <div className=" p-10 space-y-6 rounded-lg shadow-lg">
            <div className="title text-center">
              <h2 className="text-3xl font-bold">Create Your Account</h2>
              <p className="text-sm text-gray-500 mt-1 min-w-[400px]">
                Sign in to continue your fresh shopping experience
              </p>
            </div>
            <form
              action=""
              className="space-y-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col gap-3 email ">
                <label htmlFor="email">
                  Email Address<span className=" text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    className="form-control px-8! w-full text-sm"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={handleInputChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500/90"
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500">*{formik.errors.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-3 password">
                <label htmlFor="password">
                  Password<span className=" text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    className="form-control px-8! w-full text-sm "
                    type={isShown ? "text" : "password"}
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={handleInputChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500/90"
                  />
                  <FontAwesomeIcon
                    icon={isShown ? faEyeSlash : faEye}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500/90"
                    onClick={togglePassword}
                  />
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500">*{formik.errors.password}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="accent-primary-500 size-4"
                  value={formik.values.rememberMe}
                  onChange={handleInputChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="rememberMe">Keep me signed in</label>
              </div>

              {/* Forget Password */}
              <div className="">
                <Link to={"/forget-password"}>
                  <span className="text-primary-600 text-[14px] font-medium">
                    Forget Your Password?
                  </span>
                </Link>
              </div>
              {/* Invalid email or password Message */}
              {wrongCredentails && (
                <p className="text-red-500">*{wrongCredentails}</p>
              )}

              <button
                type="submit"
                className="btn w-full flex justify-center items-center gap-2  bg-primary-600 text-white hover:bg-primary-800"
              >
                <span className="text-sm font-semibold">Login</span>
              </button>
            </form>
            <p className="text-center border-t-1 border-gray-300/50 pt-7">
              New to Fresh Cart?
              <NavLink className="text-primary-600 underline" to={`/signup`}>
                Create an account
              </NavLink>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
