import './App.css';
import DadosCarros from './components/DadosCarros';
import DetalhesUsuario from "./components/DetalhesUsuario"
function App() {
  const estilo = {
    fontFamily: "'Dancing Script', cursive",
  };
  return (
    <div className="App" style={estilo}>
      <h1>Ex 1</h1>
      <DetalhesUsuario/>
      <h1>Ex 2</h1>
      <DadosCarros/>
    </div>
  );
}

export default App;
