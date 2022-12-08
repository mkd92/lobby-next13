import React from "react";

const SignupForm = () => {
  return (
    <div className=" flex justify-center">
      <form className="form-control w-2/4 max-w-sm p-10 card shadow-lg">
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="input w-full mt-4"
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          className="input w-full mt-4"
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          className="input w-full mt-4"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input w-full mt-4"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="input w-full mt-4"
        />
        <button className="btn mt-4">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
