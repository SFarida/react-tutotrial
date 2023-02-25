import './App.css';
import './styles/app.css';
import Header from './components/Header';
import TodosLogic from './components/TodosLogic';
import Modal from './components/Modal';

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <Modal />
        <TodosLogic />
      </div>
    </div>
  );
}

export default App;
