import { useContext } from 'react';
import "./Toggle.css";
import Sun from "../../IMG/sun.png";
import Moon from "../../IMG/moon.png";
import { ThemeContext } from "../../Context";


const Toggle = () => {
    
const Theme = useContext(ThemeContext);
    
const handleClick = () => {
Theme.dispatch({ type: "TOGGLE" });
}

  
  return (
      <>
    <div className="t">
      <img src={Sun} alt="light" className="t-icon" />
      <img src={Moon} alt="dark" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: Theme.state.darkMode ? 0 : 25 }}
      >
      </div>
    </div>
    </>
  );
}

export default Toggle;