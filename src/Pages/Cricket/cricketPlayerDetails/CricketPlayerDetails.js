import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
=======
import { Button, Container, Modal } from "react-bootstrap";
import { Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
>>>>>>> 06d1a84120ba3c1d7637fcbef363b44126ba559e
import IosShareIcon from "@mui/icons-material/IosShare";
import StarIcon from "@mui/icons-material/Star";
import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addReview } from "../../../features/PlayerReviewSlice/PlayerReviewSlice";
import location from "../../../Images/Connting/819814.png";
import email from "../../../Images/Connting/email.png";
import phone from "../../../Images/Connting/phone-call.png";
import biograpy from "../../../Images/news_296_all-sports-banner_nq.png";
import PlayerReviwe from "../../PlayerReviwe/PlayerReviwe";
import Navigation from "../../Shared/Navigation/Navigation";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const CricketPlayerDetails = () => {
  let { id } = useParams();



  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [playerDetails, setPlayerDetails] = useState([]);
  const [detailsItam, setDetailsItam] = useState([]);
  
  const [cricketPlayers, setCricketPlayers] = useState([]);
  const [singleCricket, setSingleCricket] = useState({});
  /* const [quantity, setQuantity] = useState(1); */


  useEffect(() => {
    fetch("https://blooming-thicket-66783.herokuapp.com/cricketplayers")
      .then((res) => res.json())
      .then((data) => setCricketPlayers(data));
  }, []);
  useEffect(() => {
    const foundPlayers = cricketPlayers.find((player) => player.id === id);
    setSingleCricket(foundPlayers);
  }, [cricketPlayers, id]);

  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  const ininsialComment = {
    name: "",
    PlayerName: "",
    deatls: "",
    url: "",
    feedback: "",
    labels: "",
  };

  const [orderinfo, setOrderinfo] = useState(ininsialComment);

  const hendalOnBlure = (data) => {
    const filed = data.target.name;
    const value = data.target.value;
    const newValue = { ...orderinfo };
    newValue[filed] = value;
    setOrderinfo(newValue);
    console.log(newValue);
  };
  const hendalPalyer = (player) => {
    player.preventDefault();

    if (orderinfo === "") {
      alert("I CAmakd");
    }
  };

  
  const dispatch = useDispatch()
  const handelonSubmit = (data) => {
    data.preventDefault();
    orderinfo.PlayerName = singleCricket?.name
    const newDispalyReviwe = {
      ...orderinfo,PlayerName:singleCricket?.name
    };
    newDispalyReviwe.PlayerName = singleCricket?.name
    if (
      !newDispalyReviwe.email ||
      !newDispalyReviwe.name ||
      !newDispalyReviwe.feedback ||
      !newDispalyReviwe.PlayerName
    ) {
      alert(`All fields are required`);
      return;
    }
    
    // fetch("https://blooming-thicket-66783.herokuapp.com/review", {
    fetch("https://blooming-thicket-66783.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newDispalyReviwe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("comment successful!");
          dispatch(addReview(newDispalyReviwe));
        }
      });
  };


  return (
    <>
      <Navigation />
        <div className="details-player-main">
          <div className="details-player-bgimg"></div>
          <Container className="details-player-info">
            <div>
              <h1 className="details-player-title">{singleCricket?.name} </h1>


              



              
              
              
              
              <Button variant="primary" onClick={handleShow}>

              <p className="details-player-des">{singleCricket?.describe}</p>
              <Button
                className="details-connecting cart-btn"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >

                Conecting
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className='ContentsFullBanner' style={{margin: "0 auto", width: "1000px"}}  closeButton>
          <Modal.Title> 
          <h5 class="modal-titel1 mb-3">
                        Send Your Variable Messages{" "}
                      </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='ContentsFullBanner'  style={{width: "1000px"}}>



        <div className="text-center text-white">
                        <div style={{ display: "flex" }} className="PlayerIcon">
                          <div className="location">
                            <img
                              style={{ width: "100px", padding: "20px" }}
                              src={location}
                              alt=""
                            />

                            <h6>Mirpur 01, Dhaka, bd</h6>
                          </div>
                          <div className="email">
                            <img
                              style={{
                                width: "100px",
                                padding: "20px",
                                opacity: ".4",
                              }}
                              src={email}
                              alt=""
                            />
                            <h6>sport@gmail.com</h6>
                          </div>

                          <div className="phone">
                            <img
                              style={{ width: "100px", padding: "20px" }}
                              src={phone}
                              alt=""
                            />
                            <h6>01908145097</h6>
                          </div>
                        </div>

                        <form
                          style={{ marginTop: "100px" }}
                          onSubmit={hendalPalyer}
                        >
                          <br />
                          <input
                            type="text"
                            name="name"
                            onBlur={hendalOnBlure}
                            id=""
                            placeholder="Your Name"
                            required
                            style={{
                              width: "200px",
                              padding: "10px",
                              borderRadius: "05px",
                              margin: "20px",
                            }}
                          />
                          <input
                            type="text"
                            name="email"
                            onBlur={hendalOnBlure}
                            id=""
                            placeholder="Your Email"
                            required
                            style={{
                              width: "200px",
                              padding: "10px",
                              borderRadius: "05px",
                              margin: "20px",
                            }}
                          />
                          <input
                            name="PlayerName"
                            onBlur={hendalOnBlure}
                            defaultValue={singleCricket?.name}
                            type="text"
                            id=""
                            placeholder="Player Name"
                            required
                            style={{
                              width: "200px",
                              padding: "10px",
                              borderRadius: "05px",
                              margin: "20px",
                            }}
                          />
                          <textarea
                            className="textarea"
                            onBlur={hendalOnBlure}
                            type="text"
                            name="deatls"
                            placeholder="Type Your Feedback"
                            style={{
                              width: "400px",
                              padding: "10px",
                              borderRadius: "05px",
                              margin: "20px",
                            }}
                          />{" "}
                          <br />
                          <button class="modal-btn" type="button">
                            Send
                          </button>
                        </form>
                      </div>

        


        </Modal.Body>
        <Modal.Footer style={{margin: "0 auto", width: "1000px"}}  className='ContentsFullBanner'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal> 
              
              


                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="modal-btn"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button className="details-player-video">
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon={faVideo}
                />
                Play video
              </button>
            </div>
            <div>
              {/* <div className='details-single-img'></div> */}
              <img
                className="details-player-img"
                src={singleCricket?.img}
                alt=""
              />
            </div>
          </Container>
        </div>
      </>

      <div className="biography container">
        <div className="row">
          <div className="col-md-6">
            <div className="style-playerDetails">
              <h1
                style={{
                  marginBottom: "50px",
                  fontSize: "40px",
                  fontWeight: "700",
                }}
                className="playerHeading"
              >
                Biography
              </h1>
              <h2
                style={{
                  marginBottom: "40px",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                {singleCricket?.name}
              </h2>

              <p
                style={{
                  marginBottom: "10px",
                  fontSize: "20px",
                  fontWeight: "400",
                  width: "500px",
                }}
              >
                {singleCricket?.describe}
              </p>
              <p
                style={{
                  marginBottom: "10px",
                  fontSize: "20px",
                  fontWeight: "400",
                  width: "500px",
                }}
              >
                He has spent his entire professional career with Barcelona,
                where he has won a club-record 34 trophies, including ten La
                Liga titles, four UEFA Champions League titles and six Copas del
                Rey.
              </p>
              <p
                style={{
                  marginBottom: "40px",
                  fontSize: "20px",
                  fontWeight: "400",
                  width: "500px",
                }}
              >
                A prolific goalscorer and a creative playmaker, Messi holds the
                records for most goals in La Liga (419), a La Liga and European
                league season (50), most hat-tricks in the UEFA Champions League
                (8), and most assists in La Liga (169) and the Copa América
                (12). He has scored 698 senior career goals for club and
                country.
              </p>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "600", fontSize: "16px" }}>
                        <strong>Height</strong>
                      </td>
                      <td
                        style={{
                          color: "#dc3545",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        {singleCricket?.Height}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "600", fontSize: "16px" }}>
                        <strong>Weight</strong>
                      </td>
                      <td
                        style={{
                          color: "#dc3545",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        {singleCricket?.Weight}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "600", fontSize: "16px" }}>
                        <strong>Position</strong>
                      </td>
                      <td
                        style={{
                          color: "#dc3545",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        {singleCricket?.Position}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "600", fontSize: "16px" }}>
                        <strong>Nationality</strong>
                      </td>
                      <td
                        style={{
                          color: "#dc3545",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        {singleCricket?.Nationality}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6 banner">
            <img src={biograpy} alt="" />
          </div>
        </div>
      </div>

      <div className="playerman container">
        <h1 style={{ marginTop: "100px", marginBottom: "50px" }}>
          Player Say!
        </h1>
        <div className="player">
          <img src={singleCricket?.img} alt="" />
          <h2>{singleCricket?.name}</h2>
          <h4>{singleCricket?.Position}</h4>
          <p>{singleCricket?.describe}</p>
        </div>
      </div>

      <PlayerReviwe PlayerName={singleCricket?.name} />

      <Container className="Player-All">
        <div className="From-Main">
          <Button
            style={{
              background: "#dc3545",
              border: "none",
              padding: "10px 10px",
            }}
          >
            #Tell Us About Your Player Feedback{" "}
          </Button>

          <h2 style={{ marginBottom: "20px", marginTop: "50px" }}>
            About Your Feedback
          </h2>
          <div className="border"></div>

          <form className="From">
            <div className="Rating">
              <Typography sx={{ fontWeight: "700" }}>Your Rating</Typography>
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
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </div>

            <input
              className="textarea"
              onBlur={hendalOnBlure}
              type="text"
              name="deatls"
              placeholder="Type Your Feedback"
            />
            <br />
            <input
              type="text"
              name="name"
              onBlur={hendalOnBlure}
              id=""
              placeholder="Your Name"
            />

            <input
              type="text"
              name="email"
              onBlur={hendalOnBlure}
              id=""
              placeholder="Your Email"
            />

            <input
              name="PlayerName"
              onBlur={hendalOnBlure}
              defaultValue={singleCricket?.name}
              type="text"
              id=""
              placeholder="Player Name"
            />

            <input
              type="url"
              name="url"
              onBlur={hendalOnBlure}
              id=""
              placeholder="Type a Photo url"
            />

            <br />
            <br />
            <Button
              onClick={handelonSubmit}
              style={{
                background: "#dc3545",
                border: "none",
                padding: "10px 10px",
              }}
            >
              Submit <IosShareIcon />
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default CricketPlayerDetails;