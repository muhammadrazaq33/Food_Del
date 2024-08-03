import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ item }) => {
  // const [itemCount, setItemCount] = useState(0);
  const { removeFromCart, addToCart,cartItem, setCartItem,url } = useContext(StoreContext);
  const { _id, name, image, price, description } = item;
  
  return (
    <div className="food_item">
      {/* item img */}
      <div className="relative">
        <img className="rounded-t-[15px] w-[100%]" src={url+"/images/"+image} alt="" />
        {!cartItem[_id] ? (
          <img
            className="w-[35px] absolute bottom-[15px] right-[15px] rounded-[50%] cursor-pointer"
            onClick={() => addToCart(_id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] bg-[white] p-[6px] rounded-[50px] " >
            <img className='w-[30px]'
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[_id]}</p>
            <img className='w-[30px]'
              onClick={() => addToCart(_id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      {/* item info */}
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-[tomato] text-[22px] my-[10px] font-medium">
          ${price}
        </p>
      </div>
    </div>
  );
}

export default FoodItem
