import { useState } from "react";
import css from "./Dropdown.module.css";

const Dropdown = ({ label, data, onItemClick }) => {
  const [activeState, setActiveState] = useState(false);

  function handleItemClick(item) {
    setActiveState(!activeState);
    onItemClick(item);
  }

  return (
    <div className={css.dropdown}>
      <button
        data-testid="dropdownButton"
        onClick={() => setActiveState(!activeState)}
        className={`${css.dropbtn} ${activeState ? css.active : ""}`}>
        {label}
      </button>
      <div
        className={css.dropdownContent}
        style={activeState ? { display: "block" } : {}}>
        {data?.map((item, key) => (
          <a
            data-testid="dropdownItem"
            className={`${css[item.size]} ${item.divider ? css.divider : ""}`}
            key={key}
            onClick={() => handleItemClick(item)}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
