import React, { Component } from "react";

const WeddingCard1 = ({
  brideName,
  imageName,
  groomName,
  place,
  time,
  imagePath,
  imageStyle
}) => (
  <div className={"wedding-card " + imageName}>
    <img className="wedding-card-image " src={imagePath} alt="the card" />
    <div className={"wedding-card-text " + imageStyle}>
      <h2 className="bride">{brideName}</h2>
      <h3 className="and">and</h3>
      <h2 className="groom">{groomName}</h2>
      <h3 className="pleasure">
        have the pleasure <br /> to invite you to
      </h3>
      <h2 className="place">{place}</h2>
      <h2 className="time">{time}</h2>
    </div>
  </div>
);

export default class WeddingEditor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      brideName: "Ms Bride",
      groomName: "Mr Groom",
      place: "Place",
      time: "Time"
    };
  }
  onChangePlace = evt => {
    const place = evt.target.value;
    this.setState({ place: place });
  };
  onChangeTime = evt => {
    const time = evt.target.value;
    this.setState({ time: time });
  };

  onChangeBrideName = evt => {
    const brideName = evt.target.value;
    this.setState({ brideName: brideName });
  };
  onChangeGroomName = evt => {
    const groomName = evt.target.value;
    this.setState({ groomName: groomName });
  };
  render() {
    console.log(this.props.location);
    const image = this.props.location.pathname;
    const imageStyle = this.props.location.state.imageStyle;
    const arr = image.split("/");
    const imageName = arr[2];
    const imagePath = "/images/" + imageName + ".jpg";
    return (
      <div className="flex two">
        <div>
          <div className="left">
            <WeddingCard1
              imageStyle={imageStyle}
              imageName={imageName}
              imagePath={imagePath}
              groomName={this.state.groomName}
              brideName={this.state.brideName}
              place={this.state.place}
              time={this.state.time}
            />
          </div>
        </div>
        <div>
          <div className="right" id="card_info">
            <input placeholder="bride name" onChange={this.onChangeBrideName} />
            <input placeholder="groom name" onChange={this.onChangeGroomName} />
            <input placeholder="place" onChange={this.onChangePlace} />
            <input placeholder="time" onChange={this.onChangeTime} />
          </div>
        </div>
      </div>
    );
  }
}
