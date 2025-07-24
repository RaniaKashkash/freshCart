import { useContext, useEffect, useState } from "react";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";
import { AuthContext } from "../../context/Auth.context";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { resetPassword } from "../../services/auth-service";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const [isShown, setIsShown] = useState(false);
  const { setToken } = useContext(AuthContext);

  function togglePassword() {
    setIsShown(!isShown);
  }
  const { userEmail } = useContext(AuthContext);
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const navigate = useNavigate();

  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema,
    onSubmit: handleChangePassword,
  });

  async function handleChangePassword() {
    try {
      const response = await resetPassword(userEmail, formik.values.password);
      if (response.success) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        toast.success("Welcome Back!");
        localStorage.removeItem("userEmail");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Pagemetadata title="Reset Password" />
      <div className="flex items-center justify-center bg-gray-100/30 p-4">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full my-10">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-100 text-green-600 p-3 rounded-full mb-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Reset Password</h2>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Enter your new password to complete the reset process
              <br />
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
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
                  value={userEmail}
                  autoComplete="email"
                  placeholder="Enter your email"
                  readOnly
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
                  onChange={formik.handleChange}
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

            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
