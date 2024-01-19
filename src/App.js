import { Navbar, Timer, Todo } from './components/index.js'

function App() {
  return (
    <div className='App'>
      <div className="Navigation">
        <Navbar />
      </div>
      <div className='TodoList'>
        <Todo />
        <Timer />
      </div>
    </div >
  );
}

export default App;
