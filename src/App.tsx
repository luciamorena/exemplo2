import React, { useState } from 'react'
import { Button } from './components/Button'
import { Button2 } from './components/Button2'

export default function App() {
  const [valor, setValor] = useState(0)

  const clicar = () => {
    alert(new Date().toLocaleTimeString())
  }

  return (
    <div className='pai'>
      <Button onClick={clicar} className='bg-red-600'>TESTE</Button>
      <Button onClick={clicar} className='bg-green-600'>TESTE</Button>
      <Button onClick={clicar} className='bg-blue-600'>TESTE</Button>
      <hr />
      <Button2 onClick={clicar} color='red'>TESTE OK</Button2>
      <Button2 onClick={clicar} color='green'>TESTE</Button2>
      <Button2 onClick={clicar} color='blue'>TESTE</Button2>
    </div>
  )
}