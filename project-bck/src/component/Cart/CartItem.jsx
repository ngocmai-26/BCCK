function CartItem({item, Cart, itemProduct}) {
    return ( <div className="product__content-btn">
    <div className="row">
        <div className="product__content--btn-buy col-6">
            <button className="btn-product" onClick={()=>Cart(item)}>Thêm vào giỏ</button>
        </div>
        <div className="product__content--btn-cart col-6">
            <button  className="btn-product" onClick={()=>itemProduct(item)} >Xem chi tiết</button>
        </div>
    </div>
</div> );
}

export default CartItem;