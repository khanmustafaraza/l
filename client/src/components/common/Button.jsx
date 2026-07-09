import React from "react";

const Button = ({ name }) => {
  return (
    <button
      type="submit"
      className="  px-4 py-3 cursor-pointer
                rounded
               bg-pink-800
                font-semibold
                text-white
               
               
                transition
              "
    >
      {name}
    </button>
  );
};

export default Button;
