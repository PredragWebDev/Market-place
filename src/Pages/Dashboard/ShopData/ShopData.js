import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShopData.css'

const ShopData = () => {


    const [ordersInfo, setOrdersInfo] = useState([])

    useEffect(() => {
      fetch("https://blooming-thicket-66783.herokuapp.com/ordersInfo")
        .then((res) => res.json())
        .then((data) => setOrdersInfo(data));
    }, []);



    return (
        <div >
          <h1 style={{margin: "50px" , color:'white', marginLeft:'0' }}> All shop payment system </h1>
           <Table className='shop-data-main' striped bordered hover >
  <thead>
    <tr style={{color:'white'}}>
      <th className='shop-data-cat'>#</th>
      <th>Product Name</th>      
      <th>Price</th>
      <th className='shop-data-cat'>Category</th>
      <th className='shop-data-cat'>Tags</th>
      <th>Payment System</th>
    </tr>
  </thead>
  {
    ordersInfo.map((pd, index) => (   
      <tbody style={{color:'white'}}>
      <tr style={{color:'white'}}>
      <td style={{color:'white'}} className='shop-data-cat'>{index}</td>
      <td style={{color:'white'}}>{pd.name}</td>
      <td style={{color:'white'}}>{pd.price}</td>
      <td style={{color:'white'}} className='shop-data-cat'>{pd.category}</td>
      <td style={{color:'white'}} className='shop-data-cat'>{pd.tags}</td>
      <td style={{color:'white'}}>{pd.payment ? 
      'Paid' : 
      <Link style={{textDecoration: "none", margin: "10px"}} to={`/dashboard2/payment/${pd._id}`}>
      <button  className="btn text-white  p-2 shop-data-shadow">Payment </button>
      </Link>
      }
      {/* box-shadow: blue 0px 0px 15px 2px; */}
       </td>
      

      {/* <Link style={{textDecoration: "none", margin: "10px"}} to="/payment">
      <button className="btn bg-danger p-2">Payment </button>
      </Link> */}
      </tr>
      </tbody>
   ))}
  
  
</Table>
        </div>
    );
};

export default ShopData;