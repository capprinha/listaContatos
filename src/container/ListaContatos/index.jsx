import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { remover, editar } from '../../store/reducers/contato'
import * as S from './styles'

function ListaContatos() {
    const itens = useSelector(state => state.contato.usuarios)
    const dispatch = useDispatch()

    const [editando, setEditando] = useState(null) // tel do contato sendo editado
    const [form, setForm] = useState({
        nome: '',
        email: '',
        tel: ''
    })

    function iniciarEdicao(contato) {
        setEditando(contato.tel)
        setForm({
        nome: contato.nome,
        email: contato.email,
        tel: contato.tel
        })
    }

    function salvarEdicao() {
        dispatch(
        editar({
            telAntigo: editando,
            novoContato: {
            nome: form.nome,
            email: form.email,
            tel: form.tel
            }
        })
        )
        setEditando(null)
    }

    return (
        <S.Lista>
            {itens.map((t) => (
                <S.Card key={t.tel}>
                {editando === t.tel ? (
                    <>
                        <S.Campo
                            type="text"
                            value={form.nome}
                            onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        />
                        <S.Campo
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        <S.Campo
                            type="text"
                            value={form.tel}
                            onChange={(e) => setForm({ ...form, tel: e.target.value })}
                        />
                        <S.Botao onClick={salvarEdicao}>Salvar</S.Botao>
                        <S.Botao onClick={() => setEditando(null)}>Cancelar</S.Botao>
                    </>
                ) : (
                    <>
                        <S.Foto/>
                        <S.ListaDados>
                            <h2>Nome: {t.nome}</h2>
                            <h2>Email: {t.email}</h2>
                            <h2>Telefone: {t.tel}</h2>
                            <S.Botao onClick={() => dispatch(remover(t.tel))}>Remover</S.Botao>
                            <S.Botao onClick={() => iniciarEdicao(t)}>Editar</S.Botao>
                        </S.ListaDados>
                    </>
                    )}
                </S.Card>
            ))}
        </S.Lista>
    )
}

export default ListaContatos