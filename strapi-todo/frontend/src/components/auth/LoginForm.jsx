import React from "react";
// import GoogleSignUpButton from "./GoogleSignUpButton";
import FormInput from "./FormInput";

const LoginForm = ({ email, password, dispatch, handleClick }) => {
  return (
    <main>
      <FormInput
        type="email"
        // name="email"
        id="email"
        value={email}
        placeholder="Email Address"
        onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
      />
      <FormInput
        type="password"
        // name="password"
        id="password"
        value={password}
        placeholder="Password"
        onChange={(e) => dispatch({ type: "password", payload: e.target.value })}
      />
      <div className="my-6">
        <button
          type="submit"
          onClick={(e) => handleClick(e)}
          className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
        >
          Login
        </button>
      </div>
    </main>
  );
};

export default LoginForm;
