
import './App.css'
import Evento from './components/Evento'
import Galeria from './components/Galeria'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
function App() {

  return (
    <>
    <Cabecalho />
    <Evento
    titulo={'Evento do senai'}
      descricao={'Descrição do evento'}
      horario={'Dia 9 as 12h'}
      local={'Sala de aula'}
    />
    <Galeria />
    <Rodape />
    </>
  )
}

export default App
