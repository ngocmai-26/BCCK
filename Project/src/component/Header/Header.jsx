import { faCartArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import abc from "./img/logo.jpg";
import ListCart from "../Cart/ListCart";
import classNames from "classnames";

function Header({
  listProducts,
  setSearch,
  onClick,
  count,
  cart,
  deleteItemCart,
  setAmount,
  amount,
  Plus,
  Minus,
  onDeleteAccount,
  text,
}) {
  // const [display, setDisplay] = useState(false);
  // useEffect(()=> {
  //   if(account.length >0) {
  //     account.map((item)=> setText(item.name))

  //   } else {
  //     setText("Đăng nhập")
  //   }
  // }, [])
  // console.log(text)
  const [display, setDisplay] = useState(false);
  console.log(display)
  useEffect(() => {
    var a = 0;
    cart.map(() => {
      a += 1;
    });
    if (a > 0) {
      setDisplay(true);
    } if (a=== 0) {
      setDisplay(false);
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
                <Link to="/login" className= {classNames({ display: display }, "nav-link")} >
                  {text}
                </Link>
                <Link  className= {classNames({ display: !display }, "nav-link nav-color dropdown_toggle")}>
                  {text}
                  <div className="dropdown_menu">
                   <button className="dropdown_item" onClick={()=>onDeleteAccount()}>Đăng xuất</button>
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
              <div className="col-9 p-0">
                <input
                  type="text"
                  className="search-item"
                  width="100%"
                  onChange={(e) => setSearch((prev) => prev = e.target.value)}
                />
              </div>
              <div className="col-2 p-0">
                <button className="btn-search" onClick={onClick}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-2 m-auto cart">
            <div className="btn-iconCart">
              <FontAwesomeIcon icon={faCartArrowDown} />
              <div className={classNames({ display: !display }, "itemCart")}>
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
