import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React , {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import Footer from '../../Shared/Footer/Footer';
import CheckoutFrom from './CheckoutFrom';


// const stripePromise = loadStripe('pk_test_51JvlaCChr92zkNjDrq9IWsxbTHEmS5eMDZnIvcG3Wiy9oG8JkUv2J7q7M6mLKoQEBB394VvhgLsJvlbjyRfvaATm00Plhjbli4')
 
const Payment = () => {
  const {productId} = useParams()
  const [details, setDetails] = useState([])
  const {user} = useAuth()

  useEffect(() => {
    fetch(`https://blooming-thicket-66783.herokuapp.com/ordersInfo`)
      .then((res) => res.json())
      .then((data) =>setDetails(data));
      // .then((data) =>console.log(data));

  }, []);

  const users = details?.find(use => use._id === productId);

    // useEffect( ()=> {
    //   if (payments?.length > 0) {
    //     const matchItam = payments.find(payment => payment._id === productId)
    //     setDetailsItam(matchItam);
    //     console.log(matchItam)
    //   }
  
    // }, [payments , productId])
    // console.log(detailsItam);
  
    
    const purchase = () => {
      const order = {
          cus_name:user?.displayName,
          cus_email:user?.email,
          product_name:users?.name,
          product_profile:users?.description1,
          product_image:users?.img,
          total_amount:users?.price,
        }
        // console.log(order)
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
        })
        
  }
    return (

        <>
           {/* <Navigation></Navigation>  */}
            <h2>this is payment {productId}</h2>
            <h3>pay : {users?.price}</h3>
            <h3>pay : {users?.name}</h3>
            <img src={users?.img} alt="" />
            <button onClick={purchase} style={{color:'whitesmoke', padding:'20px' , borderRadius:'10px' , background:'black'}}  >CheckOut-Payment</button>
            
        
          
        </>
    );
};

export default Payment;