import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import {
  listBearBlanket,
  listBearCute,
  listBearU,
  listBill,
  listProduct,
  listUser,
} from './data.js'
import Menu from './component/Menu'
import Pay from './component/Product/Pay'
import ProductItem from './productItem'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './component/Header/Header'
import HomeProduct from './component/Product/HomeProduct'
import Login from './User/Login'
import Register from './User/Register'
import validator from 'validator'
import BearCute from './component/Body/BearCute'
import BearBlankets from './component/Body/BearBlankets'
import BearU from './component/Body/BearU'
import Account from './User/Account'
import Footer from './component/Footer/footer'
import { PATH_ROUTER } from './constant'

function App() {
  //Các useState và localStorage
  const [listProducts, setListProduct] = useState([])
  const [listUsers, setUser] = useState([])
  const [listBearCutes, setBearCute] = useState([])
  const [listBearUs, setBearU] = useState([])
  const [listBearBlankets, setBearBlankets] = useState([])
  const [bills, setBill] = useState(listBill)
  const [cart, setCart] = useState([])
  const [account, setAccount] = useState([])

  const [search, setSearch] = useState('')
  const [itemPro, setItemPro] = useState([])
  const [amount, setAmount] = useState(1)
  const [username, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const [usernameRegis, setUserNameRegis] = useState('')
  const [passwordRegis, setPassWordRegis] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [note, setNote] = useState('')
  const [text, setText] = useState('Đăng nhập')
  const [display, setDisplay] = useState()
  const [successful, setSuccessful] = useState(true)
  const [noClick, setNoClick] = useState(false)
  const [sumPrice, setSumPrice] = useState(0)

  //Lấy dữ liệu về từ trong localStorage
  useEffect(() => {
    const listProducts = JSON.parse(localStorage.getItem('listProducts'))
    const listUsers = JSON.parse(localStorage.getItem('listUsers'))
    const listBearCutes = JSON.parse(localStorage.getItem('listBearCutes'))
    const listBearUs = JSON.parse(localStorage.getItem('listBearUs'))
    const listBearBlankets = JSON.parse(
      localStorage.getItem('listBearBlankets'),
    )
    const account = JSON.parse(localStorage.getItem('account'))
    setAccount(account)
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (listProducts) {
      setListProduct(listProducts)
    }
    if (cart) {
      setCart(cart)
    }
    if (listUsers) {
      setUser(listUsers)
    }
    if (listBearUs) {
      setBearU(listBearUs)
    }
    if (listBearCutes) {
      setBearCute(listBearCutes)
    }
    if (listBearBlankets) {
      setBearBlankets(listBearBlankets)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('listProducts', JSON.stringify(listProduct))
    localStorage.setItem('listUsers', JSON.stringify(listUser))
    localStorage.setItem('listBearCutes', JSON.stringify(listBearCute))
    localStorage.setItem('listBearUs', JSON.stringify(listBearU))
    localStorage.setItem('listBearBlankets', JSON.stringify(listBearBlanket))
  }, [listProducts, listUsers, listBearCutes, listBearUs, listBearBlankets])

  //set các error cho các form

  const [error, setError] = useState({
    isErrorUserName: false,
    isErrorPassword: false,
    isErrorEmail: false,
    isErrUsernameLogin: false,
    isErrPasswordLogin: false,
    messageErrorUserName: '',
    messageErrorEmail: '',
    messageErrorPassword: '',
    messageErrUsernameLogin: '',
    messageErrPasswordLogin: '',
  })

  //Bắt sự thay đổi của account
  useEffect(() => {
    var a = JSON.parse(localStorage.getItem('account'))
    if (a.length === 0) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
    if (!passwordRegis.trim().length) {
      return setError(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPassword: true,
          }),
      )
    }
    if (passwordRegis.trim().length < 8 && passwordRegis.trim().length > 0) {
      return setError(
        (pre) =>
          (pre = {
            ...pre,
            isErrorPassword: true,
            messageErrorPassword: 'Password have less 8 characters',
          }),
      )
    }

    return setError(
      (pre) =>
        (pre = {
          ...pre,
          isErrorPassword: false,
          isErrorEmail: false,
          messageErrorPassword: '',
          messageErrorEmail: '',
        }),
    )
  }, [email, passwordRegis])

  //Đăng ký
  const onClickRegister = () => {
    var id = 1
    listUsers.map((item) => {
      return (id += 1)
    })
    if (!validator.isEmail(email)) {
      return setError(
        (pre) =>
          (pre = {
            ...pre,
            isErrorEmail: true,
            messageErrorEmail: 'Email không chính xác',
          }),
      )
    }
    if (error.isErrorPassword === false && error.isErrorEmail === false) {
      setUser([
        ...listUsers,
        {
          id,
          name,
          email,
          phone,
          username,
          password,
        },
      ])
    }
  }

  //Đăng nhập
  const onClickSubmit = () => {
    listUsers.filter((el) => {
      if (el.username === username) {
        if (error.isErrPasswordLogin === false) {
          setDisplay(true)
          setAccount([el])
        }
        if (el.password !== password) {
          return setError(
            (pre) =>
              (pre = {
                ...pre,
                isErrPasswordLogin: true,
                messageErrPasswordLogin: 'mật khẩu sai',
              }),
          )
        }
        return setError(
          (pre) =>
            (pre = {
              ...pre,
              isErrPasswordLogin: false,
              messageErrPasswordLogin: '',
            }),
        )
      }
      // else if(el.username !== username) {
      //   alert('ádsa')
      //   // return setError(
      //   //   (pre) =>
      //   //     (pre = {
      //   //       ...pre,
      //   //       isErrUsernameLogin: true,
      //   //       messageErrUsernameLogin: 'Tài khoản không tồn tại',
      //   //     }),
      //   // )
      // }
      // return setError(
      //   (pre) =>
      //     (pre = {
      //       ...pre,
      //       isErrUsernameLogin: false,
      //       messageErrUsernameLogin: '',
      //     }),
      // )

      // alert('Tài khoản không tồn tại')
    })
  }

  //Lưu tài khoản đã đăng nhập
  useEffect(() => {
    localStorage.setItem('account', JSON.stringify(account))
  }, [account])

  //Đăng xuất
  const onDeleteAccount = () => {
    setText('Đăng Nhập')
    setDisplay(false)
    setAccount([])
  }

  //Xử lý trong giỏ hàng
  const Plus = (item) => {
    var plus = cart.filter((x) =>
      x.name_product === item.name_product ? (x.amount += 1) : x.amount,
    )
    setCart(plus)
  }

  const Minus = (item) => {
    var minus = cart.filter((x) =>
      x.name_product === item.name_product ? (x.amount -= 1) : x.amount,
    )
    setCart(minus)
  }
  const Cart = (item) => {
    var check_cart = cart.filter((a) => a.name_product === item.name_product)
    if (check_cart.length === 0) {
      setCart([
        ...cart,
        {
          ...item,
          amount,
        },
      ])
    } else {
      check_cart.map((item) => {
        item.amount += 1
        setCart(cart)
        localStorage.setItem('cart', JSON.stringify(cart))
      })
    }
  }

  //Xử lý xóa sản phẩm trong giỏ hàng
  const deleteItemCart = (item) => {
    const itemCart = cart.filter((e) => e !== item)
    setCart(itemCart)
  }

  //Lưu giỏ hàng
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  //Xử lý khi tắt xem thêm
  const deleteItem = (item) => {
    const items = itemPro.filter((e) => e !== item)
    setItemPro(items)
  }

  const itemProduct = (item) => {
    setItemPro([item])
  }

  //Search sản phẩm
  const { pathname } = useLocation()
  useEffect(() => {
    setSearch('')
    if (pathname === PATH_ROUTER.HOME) {
      setListProduct(listProduct)
    } else if (pathname === PATH_ROUTER.BEAR_CUTE) {
      setListProduct(listBearCutes)
    } else if (pathname === PATH_ROUTER.BEAR_U) {
      setListProduct(listBearUs)
    } else if (pathname === PATH_ROUTER.BEAR_BLANKETS) {
      setListProduct(listBearBlankets)
    }
  }, [pathname])
  const onClickSearch = () => {
    const result = listProducts.filter((el) => el.name_product.includes(search))
    setListProduct(result)
  }

  const onRemoveSearch = () => {
    setListProduct(listProduct)
    setSearch('')
  }


  //Thanh toán đơn hàng
  const onClickPay = () => {
    var id = bills.length
    listBill.map((item) => {
      return (id += 1)
    })
    if (
      name !== '' &&
      phone !== '' &&
      email !== '' &&
      address !== '' &&
      error.isErrorEmail === false &&
      sumPrice !== 0
    ) {
      setBill([
        ...bills,
        {
          id,
          name,
          phone,
          email,
          address,
          note,
          cart,
          sumPrice,
        },
      ])
      setSuccessful(false)
      setCart([])
      setSumPrice(0)
    }

    if (validator.isEmail(email) === false) {
      return setError(
        (pre) =>
          (pre = {
            ...pre,
            isErrorEmail: true,
            messageErrorEmail: 'Email không chính xác',
          }),
      )
    } else if (validator.isEmail(email) !== false) {
      return setError(
        (pre) =>
          (pre = {
            ...pre,
            isErrorEmail: false,
            messageErrorEmail: '',
          }),
      )
    }
  }
  var price = 0
  useEffect(() => {
    var cart = JSON.parse(localStorage.getItem('cart'))
    cart.map((item) => {
      price += item.amount * item.price
      setSumPrice(price)
    })
    if (cart.length === 0) {
      setNoClick(true)
    } else {
      setNoClick(false)
    }
  }, [cart])

  useEffect(() => {
    localStorage.setItem('bills', JSON.stringify(bills))
  }, [bills])


  //Trả về giao diện
  return (
    <div className="App">

      {/* Header bao gồm đăng nhập đăng kí search giỏ hàng */}
      <Header
        listProducts={listProducts}
        setSearch={setSearch}
        onClickSearch={onClickSearch}
        cart={cart}
        deleteItemCart={deleteItemCart}
        setAmount={setAmount}
        amount={amount}
        Plus={Plus}
        Minus={Minus}
        onDeleteAccount={onDeleteAccount}
        text={text}
        display={display}
        onRemoveSearch={onRemoveSearch}
        search={search}
        account={account}
      />

      {/* Menu của trang web */}
      <Menu />

      {/* Trả về các giao diện khác */}
      <Routes>
        <Route
          path={PATH_ROUTER.HOME}
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
          path={PATH_ROUTER.LOGIN}
          element={
            <Login
              listUsers={listUsers}
              setUserName={setUserName}
              setPassWord={setPassWord}
              onClickSubmit={onClickSubmit}
              error={error}
            />
          }
        />
        <Route
          path={PATH_ROUTER.REGISTER}
          element={
            <Register
              setName={setName}
              setPassWordRegis={setPassWordRegis}
              setUserNameRegis={setUserNameRegis}
              setEmail={setEmail}
              setPhone={setPhone}
              onClickRegister={onClickRegister}
              error={error}
            />
          }
        />
        <Route
          path={PATH_ROUTER.PAY}
          element={
            <Pay
              cart={cart}
              error={error}
              setEmail={setEmail}
              setPhone={setPhone}
              setName={setName}
              setAddress={setAddress}
              setNote={setNote}
              onClickPay={onClickPay}
              sumPrice={sumPrice}
              successful={successful}
              noClick={noClick}
            />
          }
        />
        <Route
          path={PATH_ROUTER.BEAR_CUTE}
          element={
            <BearCute
              listBearCutes={listProducts}
              Cart={Cart}
              itemProduct={itemProduct}
            />
          }
        />
        <Route
          path={PATH_ROUTER.BEAR_U}
          element={
            <BearU
              listBearUs={listProducts}
              Cart={Cart}
              itemProduct={itemProduct}
            />
          }
        />
        <Route
          path={PATH_ROUTER.BEAR_BLANKETS}
          element={
            <BearBlankets
              listBearBlankets={listProducts}
              Cart={Cart}
              itemProduct={itemProduct}
            />
          }
        />
        <Route
          path={PATH_ROUTER.ACCOUNT}
          element={
            <Account
              account={account}
              setUser={setUser}
              setAccount={setAccount}
            />
          }
        />
      </Routes>
      <Footer />

      <ProductItem itemPro={itemPro} deleteItem={deleteItem} Cart={Cart} />
    </div>
  )
}

export default App
