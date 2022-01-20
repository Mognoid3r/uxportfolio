import React from "react";
import "./MainNav.css";
import Title from '../Title/Title'
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// import PortfolioContainer from "../../PortfolioContainer/PortfolioContainer"
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const MainNav = () => {
  return (
      
        <div className="buttonContainer">
          
          <NavLink to="/about">
            <motion.button whileHover={{ scale: 1.05 }}
            >
              <Title text="About"></Title>
            </motion.button>
          </NavLink>


          <motion.button whileHover={{ scale: 1.05 }}
            >
            <NavLink to="/skills">
              <Title text="Skills" />
            </NavLink>
            </motion.button>


        </div>
  );
}

export default MainNav
