import React from 'react';
// import axios from 'axios';
import './App.css'

function App() {
  const [fibonacciNo, setFibonacciNo] = React.useState(0)
  const [count, setCount] = React.useState(0);

  // const value = React.useState()

  React.useEffect(() => {
    fetch('/api/fibonacci-no/')
      .then(res => res.json())
      .then (result => {
        setFibonacciNo(result)
      })
  },[])

  React.useMemo(() => {
      fetch('/api/fibonacci-no/')
        .then(res => res.json())
        .then (result => {
          setFibonacciNo(result)
        })
  }, [count])

  const onClickUpdateFibonacci = (state) => {
    fetch(`/api/fibonacci-no/${state}`)
    const n = count + 1
    setCount(n)
  }  

  return (
    <div>
      <h1 className='text-2xl'>คำนวณ Fibonacci No.</h1>
      <div className='flex justify-evenly w-96 border text-2xl mt-4 py-3'>
        <p className={fibonacciNo?.length === 1 
          ? 'cursor-not-allowed bg-red-200 rounded-full pb-1.5 px-4'
          : 'cursor-pointer bg-red-200 hover:bg-red-300 text-center pb-1.5 px-4 rounded-full'} onClick={() => onClickUpdateFibonacci('del')}>-</p>
        <label className='w-52 text-center border'>{fibonacciNo[fibonacciNo?.length - 1]}</label>
        <p className='cursor-pointer bg-green-200 hover:bg-green-300 text-center pb-1.5 px-3 rounded-full' onClick={() => onClickUpdateFibonacci('add')}>+</p>
      </div>
    </div>
  )
}

export default App
