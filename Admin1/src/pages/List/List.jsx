import React, { useEffect, useState } from 'react'
import "./List.css"
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {

  const [list, setList] = useState([]);

    const url = "http://localhost:4000";

  const fetchData = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
      // toast.success("Successfully Listed")
    } else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div className="list add flex-col1">
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item) => {
          return (
            <div key={item._id} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{ item.name}</p>
              <p>{ item.category}</p>
              <p>{ item.price}</p>
              <p>X</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default List
