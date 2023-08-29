import {useLayoutEffect, useState} from "react"

export const Form = () => {
    const [name, setName]= useState("")
    const [sobrenome, setSobrenome]= useState("")
    const [dataNascimento, setDataNascimento]= useState("")
    const [estadoCivil, setEstadoCivil]= useState("")
    const [cpf, setCpf]= useState(false)
    const [documento, setDocumento]= useState(false)
    const [termos, setTermos]= useState(false)


    const handleChangeName =(event) =>{
        setName(event.target.value)
    }

    const handleChangeSobrenome =(event) =>{
        setSobrenome(event.target.value)
    }

    const handleChangeDataNascimento =(event) =>{
        setDataNascimento(event.target.value)
    }

    const handleChangeEstadoCivil =(event) =>{
        setEstadoCivil( event.target.value)
    }
    const handleChangeCpf =(event) =>{
        setCpf( event.target.value)
    }
    const handleChangeDocumento =(event) =>{
        setDocumento( event.target.value)
    }
    const handleChangeTermos =(event) =>{
        setTermos( event.target.check)
    }
    const handleSave = ()=> {
        const payload ={
            nome: name, 
            surname: sobrenome, 
            estado_civil: estadoCivil,
            data_nascimento: dataNascimento,
            documento: cpf ? 'RG': 'CPF',
            terms: termos, 

        }
        console.log(payload)
    }

    useLayoutEffect( () => {
        console.log('USE LAYOUT EFFECT')
    }, [])


    return (
        <form>
            <div>
                <h3>{name}, {sobrenome}, {dataNascimento}</h3>
            </div>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" onChange={handleChangeName} />
                </div>
                <div>
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input type="text" id="sobrenome" onChange={handleChangeSobrenome} />
                </div>
                
                <div>
                    <label htmlFor="dataNascimento">Data Nascimento</label>
                    <input type="date" id="dataNascimento" onChange={handleChangeDataNascimento} />
                </div>
                
                <div>
                    <label htmlFor="estadoCivil">Estado Civil</label>
                    <select name ="estadoCivil" id="estadoCivil">
                    <option value="solteiro">Solteiro</option>
                    <option value="casado">Casado</option>
                    <option value="viuvo">Viuvo</option>
                    <option value="divorciado">Divorciado</option>
                    </select>
                </div>

                <div>
                    <fieldset>
                        <legend>Documento</legend>
                        <label htmlFor="cpf">CPF</label>
                        <input type="radio" id="cpf" name="documento" onChange={handleChangeCpf}/>

                        <label htmlFor="rg">RG</label>
                        <input type="radio" id="rg" name="documento" onChange={handleChangeDocumento}/>
                    </fieldset>

                    <input type="checkbox" id="termos" name="termos" onChange={handleChangeTermos}/>
                    <label htmlFor="termos">Eu, aceito os termos de uso</label><br />
                    
                    <button type="button" onClick={handleSave}>salvar</button>
                        
                </div>
        </form>
    );
}