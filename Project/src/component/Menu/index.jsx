import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({ data }) {
  return (
    <div className="nav">
      <div className="container">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav m-auto">
                {data.map((item, key) => (
                  <li className="nav-item" key={key}>
                    <a href={"#" +item.id} className="nav-link">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
