import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItem, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error...");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  return (
    <form
      onSubmit={placeOrder}
      className="flex items-start  justify-between mt-[100px] gap-[50px]"
    >
      {/* left side*/}
      <div className="place-order-left">
        <p className="text-[30px] mb-[30px] font-semibold">
          Delivery Information
        </p>
        <div className="flex gap-[10px]">
          <input
            className="p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]"
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            className="p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]"
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]"
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email address"
        />
        <input
          className="p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]"
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-[10px]">
          <input
            className="p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]"
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            className="p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]"
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-[10px]">
          <input
            className="p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]"
            required
            name="zipCode"
            onChange={onChangeHandler}
            value={data.zipCode}
            type="text"
            placeholder="Zip code"
          />
          <input
            className="p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]"
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="p-[10px] mb-[12px] w-[100%] border border-[#555] rounded-[4px] outline-[tomato]"
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
      </div>
      {/* end of left side */}
      {/* right side */}
      <div className="place-order-right">
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
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="submit" className="cart-btn mt-[30px]">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
      {/*end of right side */}
    </form>
  );
};

export default PlaceOrder;
