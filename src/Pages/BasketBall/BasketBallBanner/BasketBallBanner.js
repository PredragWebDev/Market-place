import React from 'react';
import './BasketBallBanner.css';
import { Button, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';

const BasketBallBanner = () => {
    return (
        <div className='BasketBallBanner'>
            <Container>
            <div className="Shap">

            </div>
            <div className="Text">
                <h1>Find and Download Free Graphic Resources for Football Banner</h1>
                <p>Football Schedule · English Premier League · Spanish LaLiga · Italian Serie A · German Bundesliga · French Ligue 1 · English League Championship ·</p>


                <Link style={{textDecoration: "none"}} to="/booking"><Button>NEXT MATCH</Button></Link>
                
                <Button className='details-player-video'><div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" style={{color:'ButtonText'}} id="exampleModalToggleLabel">Player details video</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       {/* <video src={video}></video> */}
       <iframe width="455" height="250" src="https://www.youtube.com/embed/387782CRNQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
     
    </div>
  </div>
</div>

<a className='player-details-video' data-bs-toggle="modal" href="#exampleModalToggle" role="button">FULL TABLE</a></Button>




            </div>
            </Container>
        </div>
    );
};

export default BasketBallBanner;