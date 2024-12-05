import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter.jsx';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">React Todo List</h1>
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
