import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className='flex items-start  justify-between mt-[100px] gap-[50px]'>
      {/* left side*/}
      <div className='place-order-left'>
        <p className='text-[30px] mb-[30px] font-semibold'>Delivery Information</p>
        <div className='flex gap-[10px]'>
          <input className='p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]' type="text" placeholder="First Name" />
          <input className='p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]' type="text" placeholder="Last Name" />
        </div>
        <input className='p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]' type="email" placeholder="Email address" />
        <input className='p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]' type="text" placeholder="Street" />
        <div className='flex gap-[10px]'>
          <input className='p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]' type="text" placeholder="City" />
          <input className='p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]' type="text" placeholder="State" />
        </div>
        <div className='flex gap-[10px]'>
          <input className='p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]' type="text" placeholder="Zip code" />
          <input className='p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]' type="text" placeholder="Country" />
        </div>
        <input className='p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]' type="text" placeholder="Phone" />
      </div>
      {/* end of left side */}
      {/* right side */}
      <div className='place-order-right'>
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
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className="cart-btn mt-[30px]">PROCEED TO PAYMENT</button>
        </div>
      </div>
      {/*end of right side */}
    </form>
  );
}

export default PlaceOrder
