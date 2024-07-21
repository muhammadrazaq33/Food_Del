import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';
// import { food_list } from '../../assets/assets'

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-[30px]">
      <h1 className="Food-display-heading">Top dishes near you</h1>
      <div className="Food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category){
            return <FoodItem key={item._id} item={item} />;
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay
