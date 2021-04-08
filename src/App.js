import logo from './logo.svg';
import './App.css';
import Todoinput from './compoents/todoinput';
import Todolist from './compoents/todolist';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">

      <Todoinput/>
      <Todolist/>
     
    </div>
  );
}

export default App;
