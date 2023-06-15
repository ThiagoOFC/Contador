import { useState } from "react"
import "./App.css"

function App() {
  const [contador, setCount] = useState(0)
  const Clicando = () => {
    setCount(contador + 1)
  }
  const desfazer = (event) => {
   event.stopPropagation();
   setCount(contador - 1)

  }

  return (
    <div id="pagina" onClick={Clicando}>
      <button onClick={desfazer}> desfazer </button>
      <h1 onClick={desfazer}>Contador de Cliques</h1>
      <p onClick={desfazer}>Contagem de cliques: {contador}</p>
      <span className="ponto"></span>
    </div>
  )
}

export default App
