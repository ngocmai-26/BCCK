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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header/Header'
import HomeProduct from './component/Product/HomeProduct'
import Login from './User/Login'
import Register from './User/Register'
import validator from 'validator'
import BearCute from './component/Body/BearCute'
import BearBlankets from './component/Body/BearBlankets'
import BearU from './component/Body/BearU'
import Account from './User/Account'
import ForgetPass from './User/FogetPass'
import Footer from './component/Footer/footer'

function App() {
  const [listProducts, setListProduct] = useState(listProduct)
  const [listUsers, setUser] = useState(listUser)
  const [listBearCutes, setBearCute] = useState(listBearCute)
  const [listBearUs, setBearU] = useState(listBearU)
  const [listBearBlankets, setBearBlankets] = useState(listBearBlanket)
  const [bills, setBill] = useState(listBill)


  
  const [cart, setCart] = useState([])
  const [account, setAccount] = useState([])
  const [search, setSearch] = useState('')
  const [itemPro, setItemPro] = useState([])
  const [count, setCount] = useState(0)
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
  const [display, setDisplay] = useState(false)
  const [sumPrice, setSumPrice] = useState(0)

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

  useEffect(() => {
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

  const onClickSubmit = () => {
    listUsers.filter((el) => {
      if (el.username === username) {
        if (error.isErrPasswordLogin === false) {
          setText(el.name)
          setDisplay(true)
          setAccount(el)
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

  const onDeleteAccount = () => {
    setText('Đăng nhập')
    setDisplay(false)
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
    if (check_cart.length === 0 ) {
      setCart([
        ...cart,
        {
          ...item,
          amount,
        },
      ])
    } else {
      check_cart.map((item)=> {
        item.amount +=1
      })
    }
    setCount(count + 1)
  }

  //Xử lý xóa sản phẩm trong giỏ hàng
  const deleteItemCart = (item) => {
    const itemCart = cart.filter((e) => e !== item)
    setCart(itemCart)
    setCount(count - 1)
  }

  //Xử lý khi tắt xem thêm
  const deleteItem = (item) => {
    const items = itemPro.filter((e) => e !== item)
    setItemPro(items)
  }

  const itemProduct = (item) => {
    setItemPro([item])
  }

  const onClickSearch = () => {
    console.log(search)
    const result = listProducts.filter((el)=> el.name_product=== search)
    setListProduct(result)
    // let resultSearch = []
    // const result = listProduct.filter((el, index) => {
    //   const resultFindProduct = el.products.filter((item) => {
    //     if (item.name_product === search) {
    //       if (!resultSearch[index]) {
    //         resultSearch[index] = {}
    //         resultSearch[index].products = []
    //       }
    //       resultSearch[index].products = resultSearch[index]?.products?.concat([
    //         item,
    //       ])
    //     }
    //     if (item.name_product !== search) {
    //       setListProduct(listProducts)
    //     }
    //     return item.name_product === search
    //   })
    //   if (resultFindProduct.length > 0) {
    //     resultSearch[index].id = el.id
    //     resultSearch[index].name = el.name
    //     return true
    //   }
    //   return false
    // })
    // if (result.length === 0) {
    //   setListProduct(listProduct)
    // } else {
    //   setListProduct(resultSearch)
    // }
  }

  const onRemoveSearch = () => {
    setListProduct(listProduct)
    setSearch('')
    console.log(search)
  }

  const onClickPay = () => {
    var id = bills.length
    listBill.map((item) => {
      return (id += 1)
    })
    console.log(validator.isEmail(email))
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
    }
  }

  var price = 0
  useEffect(() => {
    cart.map((item) => {
      price += item.amount * item.price
      setSumPrice(price)
    })
  }, [cart])

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          listProducts={listProducts}
          setSearch={setSearch}
          onClickSearch={onClickSearch}
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
          onRemoveSearch={onRemoveSearch}
          search={search}
        />
        <Menu />
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
                setUserName={setUserName}
                setPassWord={setPassWord}
                onClickSubmit={onClickSubmit}
                error={error}
              />
            }
          />
          <Route
            path="/register"
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
            path="/pay"
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
              />
            }
          />
          <Route
            path="/bear-cute"
            element={
              <BearCute
                listBearCutes={listBearCutes}
                Cart={Cart}
                itemProduct={itemProduct}
              />
            }
          />
          <Route
            path="/bear-U"
            element={
              <BearU
                listBearUs={listBearUs}
                Cart={Cart}
                itemProduct={itemProduct}
              />
            }
          />
          <Route
            path="/bear-blankets"
            element={
              <BearBlankets
                listBearBlankets={listBearBlankets}
                Cart={Cart}
                itemProduct={itemProduct}
              />
            }
          />
          <Route path='/account' element={<Account account={account}/>} />
          <Route path='/forget_password' element={<ForgetPass />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <ProductItem itemPro={itemPro} deleteItem={deleteItem} Cart={Cart} />
    </div>
  )
}

export default App
