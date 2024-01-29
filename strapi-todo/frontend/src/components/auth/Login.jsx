import React, { useReducer } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import AuthError from "./AuthError";
import GoogleSignUpButton from "./GoogleSignUpButton";
import LoginForm from "./LoginForm";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  fetchingErr: false,
  success: false,
  errors: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "fetchingErr":
      return { ...state, fetchingErr: action.payload };
    case "success":
      return { ...state, success: action.payload };
    case "errors":
      return { ...state, errors: action.payload };
    default:
      throw new Error("unknown action type...");
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [{ email, password, fetchingErr, success, errors }, dispatch] =
    useReducer(reducer, initialState);

  const handleClick = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({ identifier: email, password: password });
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND}/api/auth/local/`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: "fetchingErr", payload: false });
      dispatch({ type: "success", payload: true });
      const token = response.data.jwt;
      // const user = response.data.user;
      Cookies.set("jwt_token", token, { expires: 7, secure: true });
      navigate('/to-dos')
      // Cookies.set("user_details", user, { expires: 7, secure: true });

      // console.log(response.data.jwt);
    } catch (error) {
      // console.error(
      //   "Error while making POST request (detailed):",
      //   error.response.data.error
      // );
      dispatch({ type: "errors", payload: error.response.data.error });
      dispatch({ type: "fetchingErr", payload: true });
      dispatch({ type: "success", payload: false });
    }
  };

  function RenderMessage(msgs, result = "failure") {
    const color = result === "failure" ? "orange" : "green";
    const txtHeading = result === "failure" ? `Be Warned!` : `Success!`;
    return (
      <div
        className={`bg-${color}-100 border-l-4 mt-1 border-${color}-500 text-${color}-700 p-4`}
        role="alert"
      >
        <p className="font-bold">{txtHeading}</p>
        <p>
          {result === "failure" ? `${msgs} which is not ideal.` : `${msgs}`}
        </p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">Welcome Back</h1>
          <GoogleSignUpButton text={"Login with Google"} />
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a className="text-xs text-center text-gray-500 uppercase">
              or Login with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
        </div>
        {fetchingErr && <AuthError error={errors} />}
        {success && RenderMessage("Login Successful. Welcome Back.", "green")}
        <div className="mt-5">
          <LoginForm
            email={email}
            password={password}
            dispatch={dispatch}
            handleClick={handleClick}
          />
          <p className="text-center text-sm text-gray-500">
            Don't have an account yet?
            <Link
              to="/register"
              className="font-semibold ml-1 text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
