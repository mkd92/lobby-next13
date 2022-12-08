import React from "react";

const LoginForm = () => {
  return (
    <div className=" flex justify-center">
      <form className="form-control w-2/4 max-w-sm p-10 card shadow-lg">
        <input type="text" placeholder="Email" className="input w-full mt-4" />
        <input
          type="password"
          placeholder="Password"
          className="input w-full mt-4"
        />
        <button className="btn mt-4">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
