import  React,{ Fragment } from "react";


export const AlertaMenjs =({menjs})=>{

    return(
        <Fragment>
             <p className="alert alert-danger p3 text-center">{menjs===""?"Colocar mensaje.":menjs}</p>
        </Fragment>
    )
}