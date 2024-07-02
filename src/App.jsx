import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function NameList(){
  const [list, setList] = useState(["Jack", "Nard", "John"])
  const [name, setName] = useState(() => "Jack");
  const addName = () =>{
   setList([...list, name]) 
  }
  return(
    <div>
      <ul>
        {list.map((name)=> (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input type="text" name="" value={name} id="" onChange={(e) => setName(e.target.value)}/>
      <button onClick={addName}>Add Name</button>
    </div> 
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  function addOne(){
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={addOne}>Count = {count}</button>
    </>
  )
}

function App(){
  return (
    <div>
      <Counter/>
  
      <NameList/>
    </div>
  )
}

export default App
