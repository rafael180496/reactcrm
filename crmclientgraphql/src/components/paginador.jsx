import React, { Component } from "react";

class Paginacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginas:0
    };
  }
  static getDerivedStateFromProps(nextProps) {
    const { paginas, actual, pagControl } = nextProps;
      if (paginas < actual) {
        pagControl(false);
      }
    return {
      paginas: paginas
    };
  }

  render() {
    const {actual,paginas}=this.props
    const btnAnt =(actual > 1)? (
        <button className="btn btn-success mr-2" onClick={()=>this.props.pagControl(false)} type="button">
          &laquo; Anterior
        </button>
    ):(
      ""
    )
    const btnSig =(actual !== paginas)? (
      <button className="btn btn-success mr-2" onClick={()=>this.props.pagControl(true)} type="button">
         Siguiente &raquo;
      </button>
    ):(
      ""
    )
    return (
      <div className="mt-5 d-flex justify-content-center">
       {btnAnt}
       {btnSig}
      </div>
    )
  }
}
export default Paginacion;
