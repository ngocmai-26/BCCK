import {
  faCartArrowDown,
  faCircleXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import abc from "./img/logo.jpg";
import ListCart from "../Cart/ListCart";
import classNames from "classnames";

function Header({
  setSearch,
  onClickSearch,
  cart,
  deleteItemCart,
  setAmount,
  amount,
  Plus,
  Minus,
  onDeleteAccount,
  onRemoveSearch,
  search, 
  display,
  account
}) {

  var text = ''
  
  if(account.length === 0 ) {
    text = "ĐĂNG NHẬP"
  } else {
    text = account.map((item) => item.name)
  }
  
 var count= 0 
  cart.map((item)=> {
    count +=1
  })
  const [none, setNone] = useState(false);
  useEffect(() => {
    var a = 0;
    cart.map(() => {
      a += 1;
    });
    if (a > 0) {
      setNone(true);
    }
    if (a === 0) {
      setNone(false);
    }
  }, [cart]);
  return (
    <header>
      <div className="nav">
        <div className="container">
          <nav className="navbar sticky-100 nav-expand-md justify-content-end">
            <ul className="navbar-nav d-flex flex-row flex-wrap">
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link">
                  Thông báo
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/support" className="nav-link">
                  Hỗ Trợ
                </Link>
              </li>
              <li className="nav-item mx-2 dropdown">
                <Link
                  to="/login"
                  className={classNames({ display: display }, "nav-link")}
                >
                  {text}
                </Link>
                <Link
                  className={classNames(
                    { display: !display },
                    "nav-link nav-color dropdown_toggle"
                  )}
                  to="/account"
                >
                  {text}
                  <div className="dropdown_menu">
                    <button
                      className="dropdown_item"
                      onClick={() => onDeleteAccount()}
                    >
                      Đăng xuất
                    </button>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Link to="/" className="logo-link">
              <img src={abc} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="col-7 m-auto">
            <div className="row">
              <div className="col-9 p-0 search-item">
                <input
                  type="text"
                  className="search-item-input"
                  width="100%"
                  onChange={(e) => setSearch((prev) => (prev = e.target.value))}
                  value={search}
                />
                <div className="remove">
                  <button className="btn-remove" onClick={onRemoveSearch}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                </div>
              </div>

              <div className="col-2 p-0">
                <button className="btn-search">
                  <FontAwesomeIcon icon={faSearch} onClick={onClickSearch}/>
                </button>
              </div>
            </div>
          </div>
          <div className="col-2 m-auto cart">
            <div className="btn-iconCart">
              <FontAwesomeIcon icon={faCartArrowDown} />
              <div className={classNames({ display: !none }, "itemCart")}>
                {cart.map((item, key) => (
                  <ListCart
                    key={key}
                    item={item}
                    deleteItemCart={deleteItemCart}
                    setAmount={setAmount}
                    amount={amount}
                    Plus={Plus}
                    Minus={Minus}
                  />
                ))}
                <div className="pay">
                  <Link className="btn btn-primary btn-pay" to="/pay">
                    Thanh toán
                  </Link>
                </div>
              </div>
            </div>
            <span className="count">{count}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
