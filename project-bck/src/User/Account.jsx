import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Account({ account, setUser, setAccount }) {
  const [username, setUsername] = useState("");
  const [passOld, setPassOld] = useState("");
  const [passNew, setPassNew] = useState("");
  const listUsers = JSON.parse(localStorage.getItem("listUsers"));
  const onClickChange = (item) => {
    if (username === item.username) {
      if (passOld === item.password) {
        item.password = passNew;
        
        listUsers.filter((el) => {
          if(el.id === item.id) {
            el.password  = passNew
          }
        })
        localStorage.setItem('listUsers', JSON.stringify(listUsers))
        localStorage.setItem('account', JSON.stringify(account))
      } else {
        alert("Password không đúng");
      }
    } else {
      alert("Username sai");
    }
    setAccount(account)
  };


  return (
    <article className="container py-3 main">
      <div className="row">
        <div className="blk-user col-md-12">
          <div className="row">
            {account.map((item, key) => (
              <div className="col-md-12 col-sm-12" key={key}>
                <div className="blk-user-right blk-user-bor full d-block">
                  <header>
                    <h2>Hồ sơ của tôi</h2>
                    <div className="content">
                      <h5>Quản lý thông tin hồ sơ để bảo mật tài khoản</h5>
                    </div>
                  </header>
                  <div className="formAcount validate clearfix">
                    <div className="blk-user-avatar">
                      <img src={item.avatar} alt="avatar" />
                    </div>
                    <div className="row">
                      <div className="form-group clearfix col-6">
                        <div className="row">
                          <label className="col-md-3 control-label">
                            Họ tên:
                            <samp>(*)</samp>
                          </label>
                          <div className="col-lg-6 col-md-9">
                            <span>{item.name}</span>
                          </div>
                        </div>
                        <div className="form-group clearfix">
                          <div className="row">
                            <label className="col-md-3 control-label">
                              Điện thoại:
                              <samp>(*)</samp>
                            </label>
                            <div className="col-lg-6 col-md-9">
                              <span>{item.phone}</span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group clearfix">
                          <div className="row">
                            <label className="col-md-3 control-label">
                              Email:
                              <samp>(*)</samp>
                            </label>
                            <div className="col-lg-6 col-md-9">
                              <span>{item.email}</span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group clearfix">
                          <div className="row">
                            <label className="col-md-3 control-label">
                              Địa chỉ:
                              <samp>(*)</samp>
                            </label>
                            <div className="col-lg-6 col-md-9">
                              <span>{item.address}</span>
                            </div>
                          </div>
                        </div>
                        {/* <div className="form-group clearfix">
                        <div className="row ">
                          <label className="col-md-3 control-label"></label>
                          <div className="col-lg-6 col-md-9">
                            <div className="add col-lg-4 col-md-2 text-center">
                              <a className="addto" href="">
                                Cập nhật
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      </div>
                      <div className="form-group clearfix col-6">
                        <h4>Cập nhật mật khẩu</h4>
                        <div className="form-group clearfix mt-2">
                          <div className="row">
                            <label className="col-md-3 control-label">
                              Tên đăng nhập:
                              <samp>(*)</samp>
                            </label>
                            <div className="col-lg-6 col-md-9">
                              <input
                                type="text"
                                className="validate form-control "
                                placeholder="Tên đăng nhập"
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group clearfix mt-2">
                          <div className="row">
                            <label className="col-md-3 control-label">
                              Mật khẩu cũ:
                              <samp>(*)</samp>
                            </label>
                            <div className="col-lg-6 col-md-9">
                              <input
                                type="text"
                                className="validate form-control "
                                placeholder="Mật khẩu cũ"
                                onChange={(e) => setPassOld(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group clearfix mt-2">
                          <div className="row">
                            <label className="col-md-3 control-label">
                              Mật khẩu mới:
                              <samp>(*)</samp>
                            </label>
                            <div className="col-lg-6 col-md-9">
                              <input
                                type="text"
                                className="validate form-control "
                                placeholder="Mật khẩu mới"
                                onChange={(e) => setPassNew(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group clearfix">
                          <div className="row ">
                            <label className="col-md-3 control-label"></label>
                            <div className="col-lg-6 col-md-9">
                              <div className="add col-lg-4 col-md-2 text-center">
                                <button
                                  className="addto"
                                  onClick={() => onClickChange(item)}
                                >
                                  Cập nhật
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Account;
