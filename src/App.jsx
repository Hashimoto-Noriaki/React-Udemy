import { useState } from 'react'
import './styles.css'

export default function App() {
  const [count,setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(count+1);
  }

  const onClickCountDown = () => {
    setCount(count -1)
  }

  return (
    <din>
      <h1>Reactの練習</h1>
      <h2>Reactをスタート</h2>
      <p>{count}</p>
      <button className="btn-red" onClick={onClickCountUp}>+ボタン</button>
      <button className="btn-blue" onClick={onClickCountDown}>-ボタン</button>
    </din>
  )
}
