import { Link } from "react-router-dom";

function ListCart({ item, deleteItemCart, setAmount, amount, Plus, Minus }) {
  return (
    <div className="cart-product">
      <div className="row">
        <div className="image col-4">
          <img
            src={item.img}
            alt={item.name_product}
            className="img"
            width="100%"
          />
        </div>
        <div className="col-7">
          <div className="cart__product-name">
            <span>{item.name_product}</span>
          </div>
          <div className="cart__product-code">
            <span>{item.product_code}</span>
          </div>
          <div className="cart__product-price">
            <span>Giá: $ {item.price}</span>
          </div>
          <div className="btn-cartItem">
            <button onClick={() => Minus (item)} className="cartItem-btn">
              -

            </button>
            <span>{item.amount}</span>
            <button onClick={() => Plus(item)} className="cartItem-btn">
              +
            </button>
          </div>
        </div>
        <div className="col-1">
          <button
            className="remove-product"
            onClick={() => deleteItemCart(item)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListCart;
