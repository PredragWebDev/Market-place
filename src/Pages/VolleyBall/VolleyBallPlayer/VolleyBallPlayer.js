import React from 'react';
import { useNavigate } from 'react-router-dom';

const VolleyBallPlayer = (props) => {

    console.log(props.player);

    const {name, img, Position, Nationality, id} = props.player;


    const navigate = useNavigate();
  
    function detailsPlayer() {
      navigate(`/volleyballplayer/${id}`);
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
                    <p className="card-text player-title">{Position || Nationality}</p>

                </div>

            </div>



        </div>
    );
};

export default VolleyBallPlayer;