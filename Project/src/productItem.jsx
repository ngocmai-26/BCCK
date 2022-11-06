import { useState } from "react";
import { useEffect } from "react";
import classNames from "classnames";

function ProductItem({ itemPro, deleteItem, Cart }) {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    var a = 0;
    itemPro.map((item) => {
      a += 1;
    });
    if (a !== 0) {
      setDisplay(!display);
    }
  }, [itemPro]);

  return (
    <>
      <div className={classNames({ display: display }, "product__cart-item")}>
        <div className="product-item">
          <button className="btn-closeItem" onClick={() => deleteItem(itemPro)}>
            X
          </button>
          <div className="item-pro">
            {itemPro.map((item) => (
              <div className="row">
                <div className="col-4">
                  <img
                    src={item.img}
                    alt=""
                    className="proItem__img"
                    width="100%"
                  />
                </div>
                <div className="col-8">
                  <div className="name_productIem">
                    <h4>{item.name_product}</h4>
                  </div>
                  <p>{item.product_code}</p>
                  <div className="price_productItem">
                    <span>Giá: </span>
                    <span>{item.price}</span>
                  </div>
                  <button className="btn-product" onClick={() => Cart(item)}>
                    Thêm vào giỏ
                  </button>
                </div>
                <div className="col-12 pt-3">
                  <h5>Thông tin sản phẩm</h5>
                  <span>Chất liệu: {item.material}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
