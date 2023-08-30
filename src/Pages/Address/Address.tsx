import { useEffect, useState } from "react"
import { AddressForm } from "../../components/AddressForm/AddressForm"

export interface AddressProps{
    cep: String
    street: String
    neighborhood:String
    city:String
    state:String
}
export const Address = ()=>{
    const[AddressData, setAddressData]= useState({} as AddressProps)
    useEffect(()=> {
        fetch("https://brasilapi.com.br/api/cep/v1/{05358130}")
        .then((response)=>{
            console.log(response)
            if(response.ok){
                return response.json()
            }
        }).then((data) =>{
            setAddressData(data)
        })
    }, [])
    return(
        <AddressForm AddressData={{AddressData}} />
    )
}
   