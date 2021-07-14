import AddTaskIcon from '@mui/icons-material/AddTask';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './AddTicketBooking.css';
import { Link } from 'react-router-dom';


const AddTicketBooking = () => {
  const [ticket, setTicket] = useState([])

  useEffect(() => {
    fetch("https://blooming-thicket-66783.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setTicket(data));
  }, []);

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if(proceed){
      const url = `https://blooming-thicket-66783.herokuapp.com/booking/${id}`;
    fetch(url,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=> {
     if(data.deletedCount > 0) {
       alert('Booking Succefully Deleted');
       const remaining = ticket.filter(order=> order._id !== id);
       setTicket(remaining);
       console.log(setTicket);
       
     }

     });
    }
  
  }




  const handleApprove = (id) => {
    console.log(id);

    fetch(`https://blooming-thicket-66783.herokuapp.com/update/${id}`, {
    method: "PUT"


    })
    .then(res=>res.json())
    .then(data => {
      const remaining = ticket.filter(order=> order._id !== id);
       setTicket(remaining);
    })


  }
  // console.log(ticket, 'ticket')



    return (
        <div >
          <h1 style={{margin: "50px" , color:'#ffffff', marginLeft:'0'}}> All Ticket Booking </h1>
           <Table className='ticket-table' striped bordered hover variant="white">
  <thead>
    <tr style={{color:'white'}}>
      <th>#</th>
      <th>First Name</th>
      <th className='th-display-block' >Email</th>
      <th>Number</th>
      <th className='th-display-block'>Date</th>
      <th className='th-display-block'>Payment</th>

      {/* <th className='th-display-block'>City</th> */}
      {/* <th className='th-display-block'>Address</th> */}
      <th style={{display:'inline-block'}}>Status</th>
    </tr>
  </thead>
  {
    ticket.map((pd, index) => (   
      <tbody>
      <tr>
      <td style={{color:'white'}}>{index}</td>
      <td style={{color:'white'}}>{pd.name}</td>
      <td style={{color:'white'}} className='th-display-block'>{pd.email}</td>
      <td style={{color:'white'}}>{pd.number}</td>
      <td style={{color:'white'}} className='th-display-block'>{pd.date}</td>
      {/* <td className='th-display-block'>{pd.city}</td> */}
      <td  className='th-display-block'> <Link to={`checkout/${pd._id}`}><button className='shop-data-shadow'>Payment</button></Link> </td>
      <button onClick={()=> handleDelete(pd._id)} className="btn text-white p-2 shop-data-shadow">Delete</button>
{pd.status === "pending" ? <button onClick={()=> handleApprove(pd._id)} className="btn bg-danger p-2">Approve</button>: <span><AddTaskIcon style={{
  color: "dc3545", fontSize: "20px"
}} /></span>}
      
      </tr>
      </tbody>
   ))}
  
  
</Table>
        </div>
    );
};

export default AddTicketBooking;