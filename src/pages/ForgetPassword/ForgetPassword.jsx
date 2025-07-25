import { useContext, useEffect, useState } from "react";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";
import { AuthContext } from "../../context/Auth.context";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forgetPassword } from "../../services/auth-service";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ForgetPassword() {
  const [notExistEmail, setNotExistEmail] = useState(null);
  const { userEmail, setUserEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string().email("Email is invalid").required("Email is required"),
  });

  function handleInputChange(e) {
    if (notExistEmail) {
      setNotExistEmail(null);
    }
    formik.handleChange(e);
  }
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: handleForgetPassword,
  });

  async function handleForgetPassword() {
    try {
      const response = await forgetPassword(formik.values);
      if (response.success) {
        localStorage.setItem("userEmail", formik.values.email);
        setUserEmail(localStorage.getItem("userEmail"));
        navigate("/verify-email");
      }
    } catch (error) {
      setNotExistEmail(error.message || "Something went wrong");
    }
  }
  return (
    <>
      <Pagemetadata title="Forget password" />
      <div className="flex items-center justify-center bg-gray-100/30 p-4">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full my-10">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-100 text-green-600 p-3 size-12 flex items-center justify-center rounded-full mb-3">
              <FontAwesomeIcon icon={faUser} className="text-lg" />
            </div>
            <h2 className="text-xl font-semibold">Forget Password</h2>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Enter your email address to send a verification code
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

              {notExistEmail && (
                <p className="text-red-500">*{notExistEmail}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition"
            >
              Verify Email
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
