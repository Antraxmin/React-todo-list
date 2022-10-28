import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([])    // array 관리, 초기에는 비어있는 배열값 가짐
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {  // input 입력값이 비어있다면 함수 종료되도록
      return;
    }
    setToDos(currentArray=>[toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Do list({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder='Write your to do...'/>
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App;
