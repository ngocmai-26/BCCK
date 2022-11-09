import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
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
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bear-cute" className="nav-link active">
                    Gấu bông Cute
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bear-U" className="nav-link active">
                    Gấu bông chữ U
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bear-blankets" className="nav-link active">
                    Gấu bông và chăn mềm
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
