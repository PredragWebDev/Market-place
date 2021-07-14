import {
    faVideo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PlayerDetailsBanner.css';
const PlayerDetailsBanner = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([])
    const [playerDetails, setPlayerDetails] = useState([]);


    useEffect(() => {

        fetch('https://blooming-thicket-66783.herokuapp.com/players')
          .then(res => res.json())
          .then(data => {
            console.log(data);
          });
      }, []);
    
    const product = playerDetails.find(pd => pd._id == id)
    console.log(product)
    return (
        <div className='details-player-main' >
            <div className='details-player-bgimg'></div>
            <div className='details-player-info'>
                <div>
                    <h1 className='details-player-title'>{product?.name}</h1>

                    <p className='details-player-des'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At</p>
                    <button className='details-connecting cart-btn'
                    type='button' data-bs-toggle="modal" data-bs-target="#exampleModal"
                    
                    >Conecting</button>

                   
















                    <button className='details-player-video'><FontAwesomeIcon style={{marginRight:'5px'}}  icon={faVideo} />Play video</button>
                </div>
                <div>
                    {/* <div className='details-single-img'></div> */}
                    <img className='details-player-img' src="https://a6e8z9v6.stackpathcdn.com/bigslam/homepages/soccer01/wp-content/uploads/sites/2/2019/10/Joe-Gomez-700x577.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PlayerDetailsBanner;