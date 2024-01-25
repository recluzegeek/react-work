import React from "react";
// import GoogleSignUpButton from "./GoogleSignUpButton";
import FormInput from "./FormInput";

const SignUpForm = ({ email, username, password, cfmPassword, dispatch, handleClick }) => {
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
        type="text"
        // name="username"
        id="username"
        value={username}
        placeholder="Username"
        onChange={(e) => dispatch({ type: "username", payload: e.target.value })}
      />
      <FormInput
        type="password"
        // name="password"
        id="password"
        value={password}
        placeholder="Password"
        onChange={(e) => dispatch({ type: "password", payload: e.target.value })}
      />
      <FormInput
        type="password"
        // name="cfmPassword"
        id="cfmPassword"
        value={cfmPassword}
        placeholder="Confirm Password"
        onChange={(e) => dispatch({ type: "cfmPassword", payload: e.target.value })}
      />
      <div className="my-6">
        <button
          type="submit"
          onClick={(e) => handleClick(e)}
          className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </main>
  );
};

export default SignUpForm;
