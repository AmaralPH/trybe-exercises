// import logo from './logo.svg';
import './App.css';

const taskList = ['Lavar a louça', 'Andar de bike', 'Terminar projeto', 'Ler 1h', 'Meditar']

const task = (value) => {
  return (
    value.map((tarefa) => {
      return <li>{tarefa}</li>
    })
  );
}

function App() {
  return (
    task(taskList)
  );
}

export default App;
