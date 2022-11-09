import Product from "./Product";
import Menu from "../Menu";
import CartItem from "../Cart/CartItem";

function HomeProduct({ listProducts, Cart, itemProduct }) {
  return (
    <>
      <div className="container">
      <div className="product__content mt-4">
      <div className="row">
        {listProducts.map((item, key) => (
          <div className=" col-sm-12  col-md-4 col-lg-25" key={key}>
            <div className="product">
              <div className="product__content-image">
                <img
                  src={item.img}
                  alt={item.name_product}
                  className="image w-100"
                />
              </div>
              <div className="product__content-des">
                <div className="product__content-name">
                  <span>{item.name_product}</span>
                </div>
                <div className="product__content-price">
                  <span>{item.price} đ</span>
                </div>
                <div className="product__content-btn">
                  <CartItem item={item} Cart={Cart} itemProduct={itemProduct} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </>
  );
}

export default HomeProduct;
