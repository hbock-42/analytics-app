import React from "react";
import { StyledClock } from "./styled-clock";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.state = { date: new Date(), componentSize: 0 };
  }

  componentDidMount() {
    this.setState({
      componentSize: this.getWorkSpaceSize(this.componentRef)
    });
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  getWorkSpaceSize(componentRef) {
    return Math.min(
      componentRef.current.clientWidth,
      componentRef.current.clientHeight
    );
  }

  render() {
    return (
      <StyledClock
        ref={this.componentRef}
        containerSize={this.state.componentSize}
        mainColor=""
        hours={this.state.date.getHours()}
        minutes={this.state.date.getMinutes()}
        seconds={this.state.date.getSeconds()}
      >
        <div className="container">
          <div className="outer-circle">
            <div className="time-marks">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="inner-circle"></div>
          <div className="clock-hands">
            <div className="seconds"></div>
            <div className="minutes"></div>
            <div className="hours"></div>
          </div>
        </div>
      </StyledClock>
    );
  }
}

export default Clock;
