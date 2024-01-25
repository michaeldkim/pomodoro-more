import { Navbar, Todo } from './components/index.js'

function App() {
  return (
    <div className='App'>
      <div className="Navigation">
        <Navbar />
      </div>
      <div className='TodoList'>
        <Todo />
      </div>
    </div >
  );
}

export default App;
