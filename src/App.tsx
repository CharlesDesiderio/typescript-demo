import { FC, useState } from 'react'
import Counter from './components/Counter'

const App: FC = () => {

  const [count, setCount] = useState(0)

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
