import React from "react";

export const InputEmail = ({ index,quitarCampo,obtenerCampo,text}) => {
  let EnviarIndex=(e)=>{
    quitarCampo(index)
  }
  let EnviarText=(e)=>{
    obtenerCampo(index,e.target.value)
  }

  return (
    <div className="form-group col-md-12">
      <label>Correo {index + 1}:</label>
      <div className="input-group">
        <input type="email" placeholder="Email" className="form-control" value={text} onChange={EnviarText}/>
        <div className="input-group-append">
            <button className="btn btn-danger" type="button" onClick={EnviarIndex}>
               &times; Eliminar
            </button>
        </div>
      </div>
    </div>
  );
};
