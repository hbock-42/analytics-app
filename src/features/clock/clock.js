import React from "react";
import { StyledClock } from "./styled-clock";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
    this.state = { date: new Date(), componentSize: 0, darkTheme: false };
    this.switchTheme = this.switchTheme.bind(this);
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

  switchTheme() {
    this.setState({
      darkTheme: !this.state.darkTheme
    });
  }

  render() {
    return (
      <StyledClock
        ref={this.componentRef}
        containerSize={this.state.componentSize}
        mainColor={this.state.darkTheme ? "dark" : ""}
        hours={this.state.date.getHours()}
        minutes={this.state.date.getMinutes()}
        seconds={this.state.date.getSeconds()}
        onClick={this.switchTheme}
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
