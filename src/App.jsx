import Title from "./components/Title";
import Counter from "./components/Counter";
import Ano_novo from "./assets/Ano_novo.jpg";
import "./App.css";
import useCountdown from "./hooks/useCountdown";

function App() {
  const [day, hour, minute, second] = useCountdown("Dec 31, 2023 00:00:00");
  return (
    <div className="App" style={{ backgroundImage: `url(${Ano_novo})` }}>
      <div className='container'>
        <Title title="Contagem regressiva para 2023" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
