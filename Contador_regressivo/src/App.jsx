import Title from "./components/Title";
import Counter from "./components/Counter";
import Ano_novo from "./assets/Ano_novo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Ano_novo})`}}>
      <div className='Container'>
        <Title title="Comtagem regressiva para 2023" />
        <div className="countdow-container">
          <Counter title = "Dias" number = {2} />
          <Counter title = "Horas" number = {2} />
          <Counter title = "Minutos" number = {2} />
          <Counter title = "Segundos" number = {2} />
        </div>
      </div>
    </div>
  );
}

export default App;
