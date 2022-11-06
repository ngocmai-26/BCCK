import Product from "./Product";
import Menu from "../Menu";

function HomeProduct({ listProducts, Cart, itemProduct }) {
  return (
    <>
      <div className="container">
        {listProducts.map((item, key) => (
          <div className="" id={item.id} key={key}>
            <h3>{item.name}</h3>
            <Product
              data={item.products}
              Cart={Cart}
              itemProduct={itemProduct}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeProduct;
