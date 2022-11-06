import { useEffect, useState } from "react";
import "./Product.css";

function Pay({ cart }) {
  const [sumPrice, setSumPrice] = useState(0);
  var price = 0;
  useEffect(() => {
    cart.map((item) => {
      price += item.amount * item.price;
      setSumPrice(price);
    });
  }, [cart]);

  return (
    <>
      <div className="checkout-page container sty-none">
        <form className="formCheckOut formAcount validate">
          <div className="row">
            <div className="col-checkout col-left col-xl-5 col-lg-6 col-12 ">
              <h4 className="col-title">
                <samp className="d-inline-flex align-items-center justify-content-center">
                  1
                </samp>
                Thông tin khách hàng
              </h4>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="validate form-control "
                  placeholder="Họ tên (*)"
                />
              </div>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="validate form-control "
                  placeholder="Điện thoại (*)"
                />
              </div>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="validate form-control "
                  placeholder="Email (*)"
                />
              </div>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="validate form-control "
                  placeholder="Địa chỉ chi tiết (*)"
                />
              </div>

              <div className="input-group mt-3 ">
                <textarea rows="6" placeholder="Ghi chú"></textarea>
              </div>
              <div className="mt-2">
                Đơn hàng trên website được xử lý trong giờ hành chính
              </div>
              <div className="mb-4">
                Vui lòng liên hệ fanpage ngoài khung giờ trên để được hỗ trợ
              </div>
            </div>

            <div className="col-checkout col-right col-xl-7 col-lg-12 col-12">
              <h4 className="col-title">
                <samp className="d-inline-flex align-items-center justify-content-center">
                  3
                </samp>
                Thông tin giỏ hàng
              </h4>
              <div className="table-responsive scrollModal">
                <table className="table table-checkout" cellPadding="10">
                  <thead>
                    <tr>
                      <th className="text-left" width="45%">
                        Tên sản phẩm
                      </th>
                      <th className="text-center" width="25%">
                        Số lượng
                      </th>
                      <th className="text-right" width="30%">
                        Thành tiền
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, key) => (
                      <tr className="cartItem" key={key}>
                        <td>
                          <span className="text">{item.name_product}</span>
                          <div className="clearfix">
                            Đơn giá:
                            <strong>{item.price}</strong>
                          </div>
                        </td>
                        <td className="text-center">{item.amount}</td>
                        <td className="text-right">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="table table-checkout" cellPadding="10">
                  <tfoot>
                    {/* <tr>
                      <td colSpan="2">
                        <strong>Tạm tính</strong>
                      </td>
                      <td className="text-right">${sumPrice}</td>
                    </tr>
                    <tr>
                      <td colSpan="2">Phí vận chuyển</td>
                      <td className="text-right">0đ</td>
                    </tr> */}

                    <tr>
                      <td colSpan="2">
                        <strong>Tổng cộng</strong>
                      </td>
                      <td className="text-right">${sumPrice}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="row">
                <div className="col-lg-8 col-md-10"></div>
                <div className="add col-lg-4 col-md-2">
                  <a
                    className="addto"
                    href=""
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    <h4 className="pay text-center ">Đặt Hàng</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Pay;
