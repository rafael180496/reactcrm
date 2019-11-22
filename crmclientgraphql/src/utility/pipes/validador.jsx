import { ClienteFormat } from "../interface/cliente";

export const ValidarCliente = (cliente=ClienteFormat)=>{
    if(cliente==null){
        return true
    }
    if(cliente.empresa.trim()===""){
        return true
    }
    if(cliente.edad <=0){
        return true
    }
    if(cliente.tipo.trim()==="" || cliente.nombre.trim()==="" || cliente.apellido.trim()===""){
        return true
    }
    if(cliente.emails.length<=0){
        return true
    }
    let find=false
    cliente.emails.forEach(item=>{
        if(item.email.trim()===""){
            find=true
            return
        }
    })
    if(find){
        return find
    }
    return false
}


export const ParseQuerie=(Data)=>{
    const omitTypename = (key, value) => (key === '__typename' ? undefined : value)
   const NewData = JSON.parse(JSON.stringify(Data), omitTypename)
   return NewData
}