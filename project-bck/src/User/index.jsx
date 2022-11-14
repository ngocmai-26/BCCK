import { Link } from "react-router-dom";

function MenuLogin() {
    return (
      <div className="container">
        <div className="menu-select">
          <div className="row">
            <div className=" login col-6">
                <Link to="/loginUser"> Đăng nhập</Link>
              <span className="text-header">
                  Đăng nhập

              </span>
            </div>
  
            <div className="text-header register col-6">
            <span className="text-header">
                  Đăng kí
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MenuLogin;