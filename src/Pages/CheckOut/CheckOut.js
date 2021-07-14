import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';


const CheckOut = () => {
    const {serviceId} =useParams();
    
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`https://blooming-thicket-66783.herokuapp.com/booking`)
        .then(res => res.json())
        .then(data => setDetails(data))
        // .then(data => console.log(data))
  
    },[])
    const users = details?.find(use => use._id === serviceId);
    

    const {user} = useAuth()

    const purchase = () => {
        const order = {
            cus_name:user?.displayName,
            cus_email:user?.email,
            product_name:users?.name,
            total_amount:users?.price,
          }
          fetch(`http://localhost:5000/init`, {
            method:'POST',
            headers:{
              "content-type": "application/json"
            },
            body:JSON.stringify(order)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
          } )
    }



    return (
        <div>

            
            <div className="card w-50">
  <div className="card-body">
    <h3 className="card-title">{users?.name}</h3>
    <h4>{users?.email}</h4>
    <h4>{users?.number}</h4>
    <h4>{users?.date}</h4>


    <button onClick={purchase} style={{color:'whitesmoke', padding:'20px' , borderRadius:'10px' , background:'black'}}  >CheckOut-Payment</button>
  </div>
</div>




        </div>
    );
};

export default CheckOut;