import CartItem from "../Cart/CartItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

function BearCute({ listBearCutes, Cart, itemProduct }) {



  return (
    <div className="container mt-4">
      <div className="row">
        {listBearCutes.map((item, key) => (
        
          <div className="col-sm-12 col-md-4 col-lg-25" key={key}>
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
  );
}

export default BearCute;
