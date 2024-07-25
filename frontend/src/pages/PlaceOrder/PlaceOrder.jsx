import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form>
      {/* left side*/}
      <div>
        <p>Delivery Information</p>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div>
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      {/* end of left side */}
      {/* right side */}
      <div>
        <div className="flex-1 flex flex-col gap-[20px]">
          <h1>Cart Totals</h1>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className="cart-btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
      {/*end of right side */}
    </form>
  );
}

export default PlaceOrder
