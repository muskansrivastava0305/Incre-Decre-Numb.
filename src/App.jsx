import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { inCreament, deCreament } from './actions/action';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();


  return (
    <div className=' flex flex-col justify-center items-center h-screen gap-10 '>
      <div className=' flex flex-col gap-5'>
        <h1 className=' font-bold text-2xl'>Increament/Decrement counter</h1>
        <p className=' font-semibold text-xl text-center'>using React and Redux</p>
      </div>

      <div className=' border border-blue-950'>
        <button className=' bg-slate-300 p-2 w-12 text-2xl border border-e-blue-950 hover:bg-slate-500'
        onClick={ () => dispatch(deCreament())}>−</button>

        <input name='quantity' type='text' value={myState} className=' w-16 text-center text-xl'/>

        <button className=' bg-slate-300 p-2 w-12 text-2xl border border-s-blue-950 hover:bg-slate-500'
         onClick={ () => dispatch(inCreament(5)) }>+</button>
      </div>
    </div>
  )
}

export default App