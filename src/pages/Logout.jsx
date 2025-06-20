import { useNavigate, Link } from "react-router-dom";
import React, { useState  } from "react";
import { loginUser } from "../services/api";

const Logout = () => {
    const navigate = useNavigate();

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
};

export default Logout;