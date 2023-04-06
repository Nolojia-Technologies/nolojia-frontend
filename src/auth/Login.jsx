import React from 'react'
import students from "../assets/images/students.svg"
import logo from "../assets/images/words.png"
const Login = () => {
  return (
    <div className='flex flex-wrap justify-between'>
      <div className='w-2/5 p-4'>
        <img src={logo} alt="" className='w-full p-10 mx-auto my-6'/>

        <div className='flex flex-wrap justify-between gap-6 px-10 my-6'>
          <button className='w-24 bg-yellow-500 rounded w-py-2 hover:border-solid hover:border-slate-500 hover:border-2 hover:bg-slate-50'>Admin</button>
          <button className='w-24 py-2 bg-yellow-500 rounded hover:border-solid hover:border-slate-500 hover:border-2 hover:bg-slate-50'>Tutor</button>

          <button className='w-24 py-2 bg-yellow-500 rounded hover:border-solid hover:border-slate-500 hover:border-2 hover:bg-slate-50'>School</button>
          <button className='w-24 py-2 bg-yellow-500 rounded hover:border-solid hover:border-slate-500 hover:border-2 hover:bg-slate-50'>Student</button>
        </div>
        <div className='w-full mx-10 my-24'>
          <input type="text" className='w-full p-4 mb-6 border-2 border-solid rounded border-slate-300' placeholder='Username' />
          <input type="text" className='w-full p-4 mb-6 border-2 border-solid rounded border-slate-300' placeholder='Password' />
        </div>
      </div>
      <div className='w-2/5 p-4'>
        <img src={students} alt="" className='w-full mx-auto'/>
      </div>
    </div>
  )
}

export default Login