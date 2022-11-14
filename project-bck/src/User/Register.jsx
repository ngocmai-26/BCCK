import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;
function Register({
  setUserNameRegis,
  setName,
  setPassWordRegis,
  setPhone,
  setEmail,
  onClickRegister,
  error
}) {
  return (
    <div className="container">
      <div className="menu-select">
        <div className="row">
          <div className="login col-6">
            <Link to="/login" className="text-header">
              {" "}
              Đăng nhập
            </Link>
          </div>

          <div className="border_bt register col-6">
            <Link to="/register" className="text-header">
              {" "}
              Đăng Ký
            </Link>
          </div>

          <div className="col-12">
            <div className="form">
              <div className="name">
                <input
                  type="text"
                  name="name"
                  className="name text-input"
                  placeholder="Họ và Tên"
                  onChange={(e) => setName((prev) => (prev = e.target.value))}
                />
              </div>
              <div className="email">
                <input
                  type="text"
                  name="email"
                  className="email text-input"
                  placeholder="Email"
                  onChange={(e) => setEmail((prev) => (prev = e.target.value))}
                />
                {error.isErrorEmail && (
                  <ErrorText className="form-text danger">
                    {error.messageErrorEmail}
                  </ErrorText>
                )}
              </div>
              <div className="phone">
                <input
                  type="text"
                  name="phone"
                  className="phone text-input"
                  placeholder="Số điện thoại"
                  onChange={(e) => setPhone((prev) => (prev = e.target.value))}
                />
              </div>
              <div className="username">
                <input
                  type="text"
                  name="username"
                  className="username text-input"
                  placeholder="Tên đăng nhập"
                  onChange={(e) =>
                    setUserNameRegis((prev) => (prev = e.target.value))
                  }
                />
              </div>
              <div className="password">
                <input
                  type="text"
                  name="password"
                  className="password text-input"
                  placeholder="Mật Khẩu"
                  onChange={(e) =>
                    setPassWordRegis((prev) => (prev = e.target.value))
                  }
                />
                {error.isErrorPassword && (
                  <ErrorText className="form-text danger">
                    {error.messageErrorPassword}
                  </ErrorText>
                )}
              </div>
              <button
                className="text-input btn-submit"
                onClick={() => onClickRegister()}
              >
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
