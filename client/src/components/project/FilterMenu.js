import "./styles/filterMenu.css";
import js_logo from "../../img/javascript_logo.png";

const FilterBar = ({ setWorkList }) => {
  return (
    <div className="filter">
      <ul className="filter_button_container">
        <li className="filter_button">
          <details className="filter_button">
            <summary>Language</summary>
            <ul>
              <li>
                <img src={js_logo} alt="" style={{ width: "10%" }} />
                Java Script
                <input type="checkbox" />
              </li>
              <li>
                Type Script
                <input type="checkbox" />
              </li>
              <li>
                Java
                <input type="checkbox" />
              </li>
            </ul>
          </details>
        </li>
        <li className="filter_button">
          <details className="filter_button">
            <summary>Project Size</summary>
            <ul>
              <li>
                Toy Project
                <input type="radio" /> Toy Project
                <input type="radio" /> Toy Project
                <input type="radio" />
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
