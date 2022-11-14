import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;


function Login({ listUsers, setUserName, setPassWord, onClickSubmit, error }) {
  return (
    <div className="container">
      <div className="menu-select">
        <div className="row">
          <div className="border_bt login col-6">
            <Link to="/login" className="text-header">
              {" "}
              Đăng nhập
            </Link>
          </div>

          <div className="text-header register col-6">
            <Link to="/register" className="text-header">
              {" "}
              Đăng Ký
            </Link>
          </div>

          <div className="col-12">
            <div className="form">
              <div className="username">
                <input
                  type="text"
                  name="username"
                  className="username text-input"
                  placeholder="Tên đăng nhập"
                  onChange={(e) =>
                    setUserName((prev) => (prev = e.target.value))
                  }
                />
                {error.isErrUsernameLogin && (
                  <ErrorText className="form-text danger">
                    {error.messageErrUsernameLogin}
                  </ErrorText>
                )}
              </div>
              <div className="password">
                <input
                  type="text"
                  name="password"
                  className="password text-input"
                  placeholder="Mật Khẩu"
                  onChange={(e) =>
                    setPassWord((prev) => (prev = e.target.value))
                  }
                />
                {error.isErrPasswordLogin && (
                  <ErrorText className="form-text danger">
                    {error.messageErrPasswordLogin}
                  </ErrorText>
                )}
              </div>
              <button
                className="text-input btn-submit"
                onClick={() => onClickSubmit()}
              >
                Đăng Nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
