import React from "react";
import "./FilterButton.css";
import { motion } from "framer-motion";

const FilterButton = ({ categoria }) => {
  return (
    <div className="filter__button__container">
      <motion.button className="filter__button" whileHover={{ scale: 1.1 }}>
        {categoria}
      </motion.button>
    </div>
  );
};

export default FilterButton;
