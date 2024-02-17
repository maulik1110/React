import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent='space-around' sx={{gap:{sm:"122px",xm: "40px"},mt:{sm:"32px",xs:"20px"},justifyContent: "none",px:"20px"}}>
      <Link to="/">
        <img
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
          src={Logo}
          alt=""
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "2px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
