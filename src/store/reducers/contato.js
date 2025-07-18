import { createSlice } from "@reduxjs/toolkit";


const contatoSlice = createSlice({
    name:'contato',
    initialState:{
        usuarios: [{
            nome:'Gian',
            email:'gian@gamil.com',
            tel: 1234567890
        }]
    },
    reducers:{
        adicionar: (state, action) =>{
            const jaExiste = state.usuarios.some((usuario) => usuario.tel === action.payload.tel)
            const verificaNumero = action.payload.tel 
            if(jaExiste){
                alert('Usuario ja existe')
                return
            } else if(String(verificaNumero).length <= 8) {
                alert('Número imcompleto')
            } else {
                state.usuarios.push(action.payload)
            }
        }, 
        remover: (state, action) => {
            state.usuarios = state.usuarios.filter(usuario => usuario.tel !== action.payload)
        },
        editar: (state, action) => {
            const {telAntigo, novoContato} = action.payload
            const indexUsuario = state.usuarios.findIndex(usuario => usuario.tel === telAntigo)
            if( indexUsuario !== -1){
                state.usuarios[indexUsuario] ={...state.usuarios[indexUsuario], ...novoContato}
            } else {
                alert('Contato não encontrado')
            }
        }
    }
})

export const { adicionar, remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
