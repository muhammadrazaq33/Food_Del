import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {
  const {cartItem,food_list, removeFromCart} = useContext(StoreContext)
  return (
    <div className="mt-[100px]">
      <div>
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className="cart-item-title cart-item">
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr className="h-[1px]  border-none bg-[#e2e2e2]" />
              </div>
            );
          }
        })}
      </div>
      {/* total price - side bar */}
      <div className="mt-[80px] flex md:flex-row flex-col-reverse  justify-between sm:gap-[12vw] gap-[20px]">
        <div className="flex-1 flex flex-col gap-[20px]">
          <h1>Cart Totals</h1>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button className="cart-btn">PROCEED TO CHECKOUT</button>
        </div>
        {/* promo code */}
        <div className="flex-1   ">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
              <input
                className="border-none outline-none pl-[10px] bg-transparent"
                type="text"
                placeholder="promo code"
              />
              <button className="promo-btn">Submit</button>
            </div>
          </div>
        </div>
        {/* end of promo code */}
      </div>
    </div>
  );
}

export default Cart
