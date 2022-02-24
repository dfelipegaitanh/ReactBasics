import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      console.log(this.cbRef);
      this.cbRef.focus();
    }
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} placeholder="Older" />
        <input type="text" ref={this.setCbRef} placeholder="nuevo" />
        <button onClick={this.clickHandler}>Fetch Data</button>
        <br />
      </div>
    );
  }
}

export default RefDemo;
