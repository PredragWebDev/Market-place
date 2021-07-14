import IosShareIcon from '@mui/icons-material/IosShare';
import StarIcon from '@mui/icons-material/Star';
import { Box, Button, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';
import './AddProduct.css';




const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};





const AddProduct = () => {
  // const { user } = useAuth();


  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);


  const productInfo = { name: '', price: '', tags: '', category: '', feedback: "", img: "", description1: "", id: ""};

  const [productData, setOrderinfo] = useState(productInfo);

  const hendalOnBlure = data => {

    const filed = data.target.name;
    const value = data.target.value;
    const newValue = { ...productData };
    newValue[filed] = value;
    setOrderinfo(newValue);
    console.log(newValue);

  }

  const onSubmit = (data) => {
    console.log(data);

    const newDispalyReviwe = {
      ...productData
    }


    fetch('https://blooming-thicket-66783.herokuapp.com/other', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newDispalyReviwe)
    })
      .then(res => res.json())
      .then(data => console.log(data));

  }


  return (
    <div>
      <div>
        <h1 className="mt-5 text-center add-product "><i><b>Please Add Product</b></i></h1>
        <div className=" w-25 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form className='ProductFrom' >


                

                
               
                <input
                  type="text"
                  name='name'
                  onBlur={hendalOnBlure}
                  id=""
                  placeholder='Product Name'
                  style={{padding: "10px", margin: "10px", borderRadius: "05px", width: "300px"}}
                />

<input
                  name='price'
                  onBlur={hendalOnBlure}
                  type="text"
                  id=""
                  placeholder='Price'
                  style={{padding: "10px", margin: "10px", borderRadius: "05px", width: "100px"}}
                />

                <input
                  type="text"
                  name='tags'
                  onBlur={hendalOnBlure}
                  id=""
                  placeholder='Product tags'
                  style={{padding: "10px", margin: "10px", borderRadius: "05px"}}
                />

                <input
                  type="text"
                  name='category'
                  onBlur={hendalOnBlure}
                  id=""
                  placeholder='Product Category'
                  style={{padding: "10px", margin: "10px", borderRadius: "05px"}}
                />



                

                <input
                  type="url"
                  name="img"
                  onBlur={hendalOnBlure}
                  id=""
                  placeholder='Type a img url'
                  style={{padding: "10px", margin: "10px", borderRadius: "05px", width: "300px"}}
                />

<input
                  name='id'
                  onBlur={hendalOnBlure}
                  type="Number"
                  id=""
                  placeholder='ID'
                  style={{padding: "10px", margin: "10px", borderRadius: "05px", width: "100px"}}
                />

<textarea
                  className='textarea'
                  onBlur={hendalOnBlure}
                  type="text"
                  name='description1'
                  placeholder='Type Your Description'
                  style={{padding: "10px", margin: "10px", borderRadius: "05px", width: "425px"}}
                />

<div className="ProductRating">
                  <Typography sx={{ fontWeight: '700' }} >Your Rating</Typography>

                  {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}

                </div>
                <Rating
                  name="feedback"
                  onBlur={hendalOnBlure}
                  value={value}
                  precision={0.5}

                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />

                <br /><br />
                <Button onClick={onSubmit}

                  style={{ background: "black", border: "none", padding: "10px 10px", color:'gold' }} >Submit <IosShareIcon /></Button>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;