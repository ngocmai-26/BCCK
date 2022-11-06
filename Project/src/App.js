import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import { listProduct, listUser } from './data.js'
import Menu from './component/Menu'
import Product from './component/Product/Product'
import RouterDemo from './Router'
import Pay from './component/Product/Pay'
import ProductItem from './productItem'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header/Header'
import HomeProduct from './component/Product/HomeProduct'
import Login from './User/Login'
import Register from './User/Register'
import validator from 'validator'

function App() {
  const [listProducts, setListProduct] = useState(listProduct)
  const [listMenu, setMenu] = useState(listProduct)
  const [listUsers, setUser] = useState(listUser)
  const [a, setA] = useState(listUser)
  const [cart, setCart] = useState([])
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
  const [text, setText] = useState('Đăng nhập')
  const [display, setDisplay] = useState(false)

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
    var a = cart.filter((x) =>
      x.name_product === item.name_product ? (x.amount += 1) : x.amount,
    )
    setCart(a)
  }

  const Minus = (item) => {
    var a = cart.filter((x) =>
      x.name_product === item.name_product ? (x.amount -= 1) : x.amount,
    )
    setCart(a)
  }
  const Cart = (item) => {
    setCart([
      ...cart,
      {
        ...item,
        amount,
      },
    ])

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

  console.log(search)

  const onClick = () => {
    let resultSearch = [];
    const result = listProduct.filter((el, index) => {
      const resultFindProduct = el.products.filter((item) => {
        if (item.name_product === search ) {        
            if(!resultSearch[index]) {
                resultSearch[index] = {}
                resultSearch[index].products = []
            }
          resultSearch[index].products = resultSearch[index]?.products?.concat([item])
        }if (item.name_product !== search) {
          setListProduct(listProducts)
        }
        return item.name_product === search;
      });
      if (resultFindProduct.length > 0) {
        resultSearch[index].id = el.id;
        resultSearch[index].name = el.name;
        return true;
      }
      return false;
    });
    if(result.length === 0) {
      setListProduct(listProduct)
    } else {
      setListProduct(resultSearch)
    }
    console.log(result.length)
    console.log(listProducts)
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Header
          listProducts={listProducts}
          setSearch={setSearch}
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
        <Menu data={listMenu} />
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
          <Route path="/pay" element={<Pay cart={cart} />} />
        </Routes>
      </BrowserRouter>

      {/* <Menu data={listProducts} /> */}

      <ProductItem itemPro={itemPro} deleteItem={deleteItem} Cart={Cart} />
    </div>
  )
}

export default App
