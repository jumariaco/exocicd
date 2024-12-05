import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter.jsx';
import Filters from './components/Filters.jsx';

function App() {
  const [filter, setFilter] = useState('All');
  return (
    <div className="app">
      <h1 className="app-title">React Todo List</h1>
      <div className="controls">
        <Counter />
        <Filter filter={filter} onFilterChange={setFilter} />
      </div>
      <TodoList filter={filter} />
      <TodoList />
    </div>
  );
}

export default App;
