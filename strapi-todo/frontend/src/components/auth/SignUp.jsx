import React, { useReducer } from "react";
import axios from "axios";
import AuthError from "./AuthError";
import GoogleSignUpButton from "./GoogleSignUpButton";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  username: "",
  password: "",
  cfmPassword: "",
  fetchingErr: false,
  success: false,
  errors: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "username":
      return { ...state, username: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "cfmPassword":
      return { ...state, cfmPassword: action.payload };
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

const SignUp = () => {
  const [
    { email, username, password, cfmPassword, fetchingErr, success, errors },
    dispatch,
  ] = useReducer(reducer, initialState);

  const handleClick = async (e) => {
    e.preventDefault();
    if (password !== cfmPassword) {
      // console.log("password mismatched...");
      return;
    }
    const data = JSON.stringify({ email, username, password });
    try {
      console.log('Signup', import.meta.env.VITE_REACT_APP_BACKEND);
      // const backend = import.meta.env.VITE_REACT_APP_BACKEND;
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND}/api/auth/local/register`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: "fetchingErr", payload: false });
      dispatch({ type: "success", payload: true });
      // console.log(response);
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
    const colorClass =
      result === "failure"
        ? "bg-orange-100 border-orange-500 text-orange-700"
        : "bg-green-100 border-green-500 text-green-700";
    const txtHeading = result === "failure" ? "Be Warned!" : "Success!";

    return (
      <div className={`border-l-4 mt-1 p-4 ${colorClass}`} role="alert">
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
          <h1 className="text-3xl font-semibold text-gray-900">
            Start your Development journey here!
          </h1>
          <GoogleSignUpButton text={"Signup with Google"} />
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a className="text-xs text-center text-gray-500 uppercase">
              or Register with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
        </div>
        {fetchingErr && <AuthError error={errors} />}
        {success &&
          RenderMessage(
            "Registered Successfully. Login to continue.",
            "success"
          )}
        {password !== cfmPassword &&
          RenderMessage("Passwords doesn't matches.")}
        <div className="mt-5">
          <SignUpForm
            email={email}
            username={username}
            password={password}
            cfmPassword={cfmPassword}
            dispatch={dispatch}
            handleClick={handleClick}
          />
          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to="/login"
              className="font-semibold ml-1 text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
            >
              Login here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
