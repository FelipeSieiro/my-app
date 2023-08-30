import { useEffect, useState } from "react"
import { AddressProps } from "../../Pages/Address/Address"

interface AddressDataProps{
    AddressData:AddressProps
}

export const AddressForm = ({AddressData}: AddressDataProps) => {
    const [PostalCode, setPostalCode] = useState(AddressData.cep)
    const [StreetName, setStreetName] = useState(AddressData.street)
    const [NeighborhoodName, setNeighborhoodName] = useState(AddressData.neighborhood)
    const [CityName, setCityName] = useState(AddressData.city)
    const [StateName, setStateName] = useState(AddressData.state)
    
    useEffect(()=>{
        setPostalCode(AddressData.cep)
        setStreetName(AddressData.street)
        setNeighborhoodName(AddressData.neighborhood)
        setCityName(AddressData.city)
        setStateName(AddressData.state)
    }, [AddressData])

    return(
        <form >
            <h1>ENDEREÇO</h1>
            <div>
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" value={PostalCode}/>
            </div>

            <div>
                <label htmlFor="logradouro">Logradouro</label>
                <input type="text" id="logradouro" value={StreetName}/>
            </div>

            <div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" value={NeighborhoodName}/>
            </div>

            <div>
                <label htmlFor="cidade">CIDADE</label>
                <input type="text" id="cidade" value={CityName}/>
            </div>

            <div>
                <label htmlFor="estado">Estado</label>
                <input type="text" id="estado" value={StateName}/>
            </div>
        </form>
    
    );
}