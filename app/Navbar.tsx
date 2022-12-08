import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import "./global.css";

const Navbar = () => {
  return (
    <div>
      <div className=" navbar bg-base-100 ">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            Lobby
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li className="">
              <Link className="btn" href="/login">
                Login
              </Link>
            </li>

            <li className="mx-2">
              <Link className="btn" href="/signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
