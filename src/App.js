import './App.css';
import Header from './components/Header';
import TodosLogic from './components/TodosLogic';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Header />
      <Modal />
      <TodosLogic />
    </>
  );
}

export default App;
