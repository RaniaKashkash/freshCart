import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { VerifyResetCode } from "../../services/auth-service";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";

export default function VerifyCodeSimple() {
  const [checkCode, setCheckCode] = useState(null);
  const [codeInputs, setCodeInputs] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  function handleChange(e, index) {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return;

    const newInputs = [...codeInputs];
    newInputs[index] = value;
    setCodeInputs(newInputs);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace" && !codeInputs[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const resetCode = codeInputs.join("");
    if (resetCode.length < 6) {
      setCheckCode("Code must be 6 digits");
      return;
    }

    try {
      const response = await VerifyResetCode({ resetCode });
      if (response.success) {
        navigate("/reset-password");
      }
    } catch (error) {
      setCheckCode(error.message || "Something went wrong");
    }
  }

  return (
    <>
      <Pagemetadata title="Verify Email" />
      <div className="flex items-center justify-center bg-gray-100/30 p-4">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full my-10">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-green-100 text-green-600 p-3 rounded-full mb-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Verify your email</h2>
            <p className="text-sm text-gray-500 mt-2 text-center">
              We’ve sent a verification code to your email address. <br />
              Please enter the code below to verify your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-3">
              {codeInputs.map((val, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  inputMode="numeric"
                  value={val}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputsRef.current[index] = el)}
                  className="w-12 h-12 text-center border rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              ))}
            </div>

            {checkCode && (
              <p className="text-red-500 text-sm text-center">* {checkCode}</p>
            )}

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
