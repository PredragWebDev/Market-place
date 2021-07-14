import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Slider from "react-slick/lib/slider";
import Player from "../Player/Player";
import "./ControledSlider.css";

export default class ControledSlider extends Component {
  state = {
    players: [],
  };

  componentDidMount() {
    fetch("https://blooming-thicket-66783.herokuapp.com/players")
      .then((response) => response.json())
      .then((playersList) => {
        this.setState({ players: playersList });
      });
  }

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      pauseOnHover: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      <div className="container AllPlayer">
        <div className="my-5">

          <h1 style={{marginBottom: "50px", marginTop: "100px"}}>OUR TEAM</h1>
          <FontAwesomeIcon
            className="me-2"
            onClick={this.previous}
            icon={faArrowLeft}
          />
          <FontAwesomeIcon
            className="me-2"
            onClick={this.next}
            icon={faArrowRight}
          />
        </div>

        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {this.state.players.map((players) => (
            <Player key={players._id} player={players} />
          ))}
        </Slider>
      </div>
    );
  }
}
