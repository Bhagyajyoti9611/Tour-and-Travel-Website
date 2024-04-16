import "./DestinationStyles.css";
import { Component } from "react";
import Mountain1 from "../assets/img10.jpg";
import Mountain2 from "../assets/img5.jpg";
import Mountain3 from "../assets/img6.jpg";
import Mountain4 from "../assets/img2.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.image1} alt="img" />
          <img src={this.props.image2} alt="img" />
        </div>
      </div>
    );
  }
}
export default DestinationData;
