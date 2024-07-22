import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {
  const {cartItem,food_list, removeFromCart} = useContext(StoreContext)
  return (
    <div>
      <div>
        <div>
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
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>{item.price * cartItem[item._id]}</p>
                <p>x</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  )
}

export default Cart
