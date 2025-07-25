import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faStar, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import authotPic from "../../assets/images/review-author.png";
import { NavLink, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { passwordStrength } from "../../utils/password-utils";
import { sendDataToSignUp } from "../../services/auth-service";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";

export default function Signup() {
  const navigate = useNavigate();
  const [isExist, setIsExist] = useState(null);

  const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    phone: yup
      .string()
      .required("phone is required")
      .matches(phoneRegex, "We accept egyptain phone number only"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Password should be the same "),
    terms: yup
      .boolean()
      .oneOf([true], "You must agree our terms and conditions"),
  });

  async function handleSignUp(values) {
    try {
      const response = await sendDataToSignUp(values);
      if (response.success) {
        setIsExist(null);
        toast.success("User signed up successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setIsExist(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignUp,
  });

  let passwoordStrength = passwordStrength(formik.values.password);
  return (
    <>
      <Pagemetadata
        title="signUp"
        description="signup,register,name,email,phone,password"
      />

      <main className="py-12">
        <div className="container grid lg:grid-cols-2 lg:gap-12">
          {/* left side */}
          <div className="py-10 space-y-8">
            <div className="welcomeMsg space-y-2">
              <h2 className="text-4xl font-bold">
                Welocome to <span className="text-primary-600">Fresh Cart</span>
              </h2>
              <p className="text-md">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep.
              </p>
            </div>
            <ul className="*:flex *:items-center *:gap-3 space-y-4">
              <li>
                <div className="size-10 text-primary-600 rounded-full bg-primary-200 text-lg flex justify-center items-center">
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">Fresh & Organic</h3>
                  <span className="text-gray-500">
                    Premium quality products sourced directly from farms
                  </span>
                </div>
              </li>
              <li>
                <div className="size-10 text-primary-600 rounded-full bg-primary-200 text-lg flex justify-center items-center">
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">Fresh & Organic</h3>
                  <span className="text-gray-500">
                    Premium quality products sourced directly from farms
                  </span>
                </div>
              </li>
              <li>
                <div className="size-10 text-primary-600 rounded-full bg-primary-200 text-lg flex justify-center items-center">
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">Fresh & Organic</h3>
                  <span className="text-gray-500">
                    Premium quality products sourced directly from farms
                  </span>
                </div>
              </li>
            </ul>
            <div className="card shadow-lg rounded-md p-5 space-y-4">
              <div className="authorInfo flex items-center gap-4 ">
                <div className="image size-12">
                  <img src={authotPic} alt="" />
                </div>
                <div className="authorDetails">
                  <span>Sarah Johnson</span>
                  <div className="review text-yellow-400">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
              <blockquote>
                <p className="italic">
                  "FreshCart has completely changed how I shop for groceries.
                  The quality is amazing and delivery is always on time!"
                </p>
              </blockquote>
            </div>
          </div>
          {/* right side */}
          <div className=" p-10 space-y-6 rounded-lg shadow-lg">
            <div className="title text-center">
              <h2 className="text-3xl font-bold">Create Your Account</h2>
              <p className="text-sm text-gray-500 mt-1 ">
                Start your fresh journey with us today
              </p>
            </div>

            <form
              action=""
              className="space-y-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col gap-3 name">
                <label htmlFor="name">
                  Name<span className=" text-red-500">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ali"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500">*{formik.errors.name}</p>
                )}
              </div>
              <div className="flex flex-col gap-3 email">
                <label htmlFor="email">
                  Email Address<span className=" text-red-500">*</span>
                </label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ali@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500">*{formik.errors.email}</p>
                )}
                {isExist && <p className="text-red-500">*{isExist}</p>}
              </div>
              <div className="flex flex-col gap-3 phone">
                <label htmlFor="phone">
                  Phone Number<span className=" text-red-500">*</span>
                </label>
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+2 010 1253 6985"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500">*{formik.errors.phone}</p>
                )}
              </div>
              <div className="flex flex-col gap-3 password">
                <label htmlFor="password">
                  Password<span className=" text-red-500">*</span>
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Create a storage password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500">*{formik.errors.password}</p>
                )}
                {formik.values.password != "" && (
                  <div className="password-strength flex items-center gap-2">
                    <div className="bar w-full bg-gray-400/40 h-1 ">
                      <div
                        className={`progress-bar ${passwoordStrength.width} ${passwoordStrength.background} h-full`}
                      ></div>
                    </div>
                    <span className="w-28 text-center text-nowrap">
                      {passwoordStrength.text}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 rePassword">
                <label htmlFor="rePassword">
                  Confirm password<span className="text-red-500">*</span>
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  placeholder="Confirm your password"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.rePassword && formik.errors.rePassword && (
                  <p className="text-red-500">*{formik.errors.rePassword}</p>
                )}
              </div>

              <div className="terms  ">
                <div className="flex items-center gap-3">
                  <input
                    className=" accent-primary-500 size-4"
                    type="checkbox"
                    name="terms"
                    id="terms"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="terms">
                    I agree to the{" "}
                    <NavLink
                      className="text-primary-600 underline"
                      to={`/terms`}
                    >
                      Terms of Services
                    </NavLink>{" "}
                    and{" "}
                    <NavLink
                      className="text-primary-600 underline"
                      to={`/privacy-policy`}
                    >
                      Privacy Policy
                    </NavLink>
                  </label>
                </div>
                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-red-500">*{formik.errors.terms}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn w-full flex justify-center items-center gap-2  bg-primary-600 text-white hover:bg-primary-800"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span className="text-sm font-semibold">Create an account</span>
              </button>
            </form>
            <p className="text-center border-t-1 border-gray-300/50 pt-7">
              Already have an account?
              <NavLink className="text-primary-600 underline" to={`/login`}>
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
