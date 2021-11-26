import { useState } from 'react'
import Counter from './components/Counter'

const App = () => {

  const [count, setCount] = useState<number>(0)

  const addNumber = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={addNumber}>Up!</button>
      <Counter num={count} />
    </div>
  )
}

export default App;
