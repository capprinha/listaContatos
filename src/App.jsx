import { Provider } from 'react-redux'
import {store} from './store'
import BarraLateral from './container/BarraLateral'
import ListaContatos from './container/ListaContatos'
import * as S from './styles/index'
function App() {
  return(
    <Provider store={store}>
      <S.EstiloGlobal/>
      <S.MainContainer>
        <BarraLateral/>
        <ListaContatos/>
      </S.MainContainer>
    </Provider>
  )
}

export default App
