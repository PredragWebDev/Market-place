import React from 'react';
import { useNavigate } from 'react-router-dom';

const BaseketBallPlayer = (props) => {

    console.log(props.player);

    const {name, img, position, nationality, id} = props.player;
console.log( props.player);


    const navigate = useNavigate();
  
    function detailsPlayer() {
      navigate(`/basketBallPlayer/${id}`);
    }
  

    return (
        <div className='card-style' onClick={
            () => {
                detailsPlayer(id);
            }}>
            <img className="card-img-top" src={img} alt="" />


            <div className='card-body card-style'>

                <div className="player-number">
                    <h1>{id}</h1>
                </div>
                <div>
                    <h3 className="card-title player-name">{name}</h3>
                    <p className="card-text player-title">{position || nationality}</p>

                </div>

            </div>



        </div>
    );
};

export default BaseketBallPlayer;