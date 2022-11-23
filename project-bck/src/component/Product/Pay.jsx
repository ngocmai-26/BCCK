import { useEffect, useState } from "react";
import "./Product.css";
import styled from "styled-components";
import classNames from "classnames";

const ErrorText = styled.div`
  color: red;
  text-align: start;
`;

function Pay({
  cart,
  onClickPay,
  setName,
  setPhone,
  setEmail,
  setAddress,
  setNote,
  sumPrice,
  provisionals,
  error,
  successful,
  noClick,
  setTextVoucher,
  onClickVoucher,
  voucher
}) {
  return (
    <>
      <div className="checkout-page container sty-none">
        <div className={classNames({ successful: successful }, 'successfuls')}>
          Đặt hàng thành công
        </div>
        <div className="formCheckOut formAcount validate">
          <div className="row">
            <div className="col-checkout col-left col-xl-5 col-lg-6 col-12 ">
              <h4 className="col-title">
                <samp className="d-inline-flex align-items-center justify-content-center">
                  1
                </samp>
                Thông tin khách hàng
              </h4> 
              <div className="mt-2">
                Hãy nhập đầy đủ thông tin nhé. Nếu không sẽ đặt hàng không được bạn nhé!!!!!!!!
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="validate form-control "
                  placeholder="Họ tên (*)"
                  onChange={(e) => setName((prev) => (prev = e.target.value))}
                />{error.isName && (
                  <ErrorText className="form-text danger">
                    {error.messageErrNamePay}
                  </ErrorText>
                )}
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="validate form-control "
                  placeholder="Điện thoại (*)"
                  onChange={(e) => setPhone((prev) => (prev = e.target.value))}
                />
                {error.isErrorPhonePay && (
                  <ErrorText className="form-text danger">
                    {error.messageErrPhonePay}
                  </ErrorText>
                )}
              </div>
              
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="validate form-control "
                  placeholder="Email (*)"
                  onChange={(e) => setEmail((prev) => (prev = e.target.value))}
                />
                {error.isErrorEmailPay && (
                  <ErrorText className="form-text danger">
                    {error.messageErrorEmailPay}
                  </ErrorText>
                )}
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="validate form-control "
                  placeholder="Địa chỉ chi tiết (*)"
                  onChange={(e) =>
                    setAddress((prev) => (prev = e.target.value))
                  }
                />{error.isAddress && (
                  <ErrorText className="form-text danger">
                    {error.messageErrAddressPay}
                  </ErrorText>
                )}
              </div>

              <div className="input-group mt-3 ">
                <textarea
                  rows="6"
                  placeholder="Ghi chú"
                  onChange={(e) => setNote((prev) => (prev = e.target.value))}
                ></textarea>
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
                            <strong>$ {item.price}</strong>
                          </div>
                        </td>
                        <td className="text-center">{item.amount}</td>
                        <td className="text-right">$ {item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="table table-checkout" cellPadding="10">
                  <tfoot>
                    <tr>
                      <td colSpan="2">
                        <strong>Tạm tính</strong>
                      </td>
                      <td className="text-right">${provisionals}</td>
                    </tr>
                    <tr>
                      <td colSpan="2">Phí vận chuyển</td>
                      <td className="text-right">0đ</td>
                    </tr>
                    <tr className="formCode form-group">
                      <td className="d-block  ml-2">Nhập mã ưu đãi</td>
                      <td className="input-group">
                        <input
                          type="text"
                          className="validate form-control"
                          placeholder="Mã giảm giá"
                          onChange={(e) =>
                            setTextVoucher((prev) => (prev = e.target.value))
                          }
                        />
                        <p className="input-group-btn">
                          <button className="btn-voucher" type="button" onClick={onClickVoucher}>
                            Áp dụng
                          </button>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <strong>Mã giảm giá</strong>
                      </td>
                      <td className="text-right">{voucher}đ</td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <strong>Tổng cộng</strong>
                      </td>
                      <td className="text-right">$ {sumPrice}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="row">
                <div className="col-lg-8 col-md-10"></div>
                <div
                  className={classNames(
                    { noClick: noClick },
                    "add col-lg-4 col-md-2"
                  )}
                >
                  <button
                    className="addto"
                    width="100%"
                    onClick={onClickPay}
                    disabled={noClick}
                    type="button"
                  >
                    <h4 className="pay text-center">Đặt Hàng</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pay;
