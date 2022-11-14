import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Menu from "./component/Menu";
import Login from "./User/Login";
import Register from "./User/Register";
import Pay from "./component/Product/Pay";
import HomeProduct from "./component/Product/HomeProduct";

function RouterDemo({
  listProducts,
  onSearch,
  onClick,
  count,
  cart,
  deleteItemCart,
  Cart,
  itemProduct,
  setAmount,
  amount,
  Plus,
  Minus,
  listUsers,
  onUserName,
  onPassword,
  onClickSubmit,
  text,
  display,
  onDeleteAccount
}) {
  return (
    <BrowserRouter>
      <Header
        listProducts={listProducts}
        onSearch={onSearch}
        onClick={onClick}
        count={count}
        cart={cart}
        deleteItemCart={deleteItemCart}
        setAmount={setAmount}
        amount={amount}
        Plus={Plus}
        Minus={Minus}
        onDeleteAccount={onDeleteAccount}
        text={text}
        display={display}
      />
      <Menu data={listProducts} />
      <Routes>
        <Route
          path="/"
          element={
            <HomeProduct
              listProducts={listProducts}
              Cart={Cart}
              itemProduct={itemProduct}
            />
          }
        />
        <Route path="/support" />
        <Route
          path="/login"
          element={
            <Login
              listUsers={listUsers}
              onUserName={onUserName}
              onPassword={onPassword}
              onClickSubmit={onClickSubmit}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/pay" element={<Pay cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterDemo;
