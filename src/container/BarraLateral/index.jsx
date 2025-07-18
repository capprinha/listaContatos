import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { adicionar } from '../../store/reducers/contato'
import {Lista, Campo, Botao, Titulo} from './styles'

function BarraLateral() {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[tel, setTel] = useState(0)

    function pegaDados(){
        dispath(adicionar({
            nome,
            email,
            tel
        }))
    
    }
    const dispath = useDispatch()
    return(
        <Lista>
            <Titulo>Lista de contatos</Titulo>
            <Campo type="text" placeholder="Digite o nome" onChange={e => setNome(e.target.value)} />
            <Campo type="email" placeholder="Digite o e-mail" onChange={e => setEmail(e.target.value)} />
            <Campo type="number" placeholder="Digite o telefone" onChange={e => setTel(e.target.value)}/>
            <Botao onClick={pegaDados}>Adicionar</Botao>
        </Lista>
    )
}
export default BarraLateral