import React, { Component } from "react";

export default class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>page not found </h2>
      </div>
    );
  }
}
