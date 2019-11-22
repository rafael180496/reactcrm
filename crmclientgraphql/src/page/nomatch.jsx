import React, { Component } from "react";

class NotMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: 404
    };
  }

  componentDidMount() {
    let cod = this.props.match.params.cod;
    if (cod === undefined) {
      cod = 404;
    }
    this.setState({
      codigo: cod
    });
  }

  render() {
    const { codigo } = this.state;
    return (
      <div className="text-center">
        <h1>Lo sentimos error {codigo}</h1>
      </div>
    );
  }
}
export default NotMatch;
