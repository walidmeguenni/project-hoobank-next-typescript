import React from "react";
type buttonType = {
  styles: any;
};
const Button: React.FC<buttonType> = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 bg-blue-gradient text-primary text-[18px] font-poppins font-medium outline-none ${styles}`}
  >
    Get Started
  </button>
);
export default Button;
