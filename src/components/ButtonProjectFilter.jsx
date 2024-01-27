import React from "react";

const ButtonProjectFilter = ({ title, onClick, isSelected }) => {
  const active = isSelected
    ? "bg-gradient-to-br from-[#2A076C] to-red-500 py-3 px-8 rounded-full"
    : "py-1 px-1 rounded-full bg-gradient-to-br from-[#2A076C] to-red-500";
  const activeSpan = isSelected
    ? ""
    : "block py-2 px-7  bg-[#131313] rounded-full";

  return (
    <div>
      <button onClick={() => onClick(title)} className={`${active}`}>
        <span className={`font-sans ${activeSpan}`}>{title}</span>
      </button>
    </div>
  );
};

export default ButtonProjectFilter;
