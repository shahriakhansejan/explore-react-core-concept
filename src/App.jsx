import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {

  function handleClick(){
    alert ('button clicked')
  }

  const handleClick2 = () =>{
    alert('button2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concept</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>
     
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click2</button>

      <button onClick={() => {alert('third button clicked')}}>third button</button>

      <button onClick={() => addToFive(3)}>Four button</button>
    </>
  )
}

export default App
