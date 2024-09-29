import { useState } from 'react'
import './App.css'
import fuhadShiblu_usersData from './UsersAPI'
import { FaHeart } from "react-icons/fa6";

function App() {
  const [fuhadShiblu_data] = useState(fuhadShiblu_usersData)
  
  return (
    <>
    <div className="container mx-auto m-10">
      <div className="flex flex-wrap justify-center gap-10 overflow-x-scroll w-full h-screen">
        {
          fuhadShiblu_usersData.map((fuhadShiblu_usersDataItem)=>(
            <div key={fuhadShiblu_usersDataItem.user_id} className="p-5 bg-[#7FA1C3] rounded-xl flex flex-col items-center gap-10">
              <img className='w-full rounded-full' src={fuhadShiblu_usersDataItem.photo} alt="User" />
              <div className="flex flex-col gap-5">
                <p className='text-sm font-bold'>Name: <span className='font-light'>{fuhadShiblu_usersDataItem.fullname}</span></p>
                <p className='text-sm font-bold'>User Id: <span className='font-light'>{fuhadShiblu_usersDataItem.user_id}</span></p>
                <p className='text-sm font-bold'>E-Mail: <span className='font-light'>{fuhadShiblu_usersDataItem.email}</span></p>
                <p className='text-sm font-bold'>Gender: <span className='font-light'>{fuhadShiblu_usersDataItem.gender}</span></p>
                <p className='text-sm font-bold'>Country: <span className='font-light'>{fuhadShiblu_usersDataItem.country}</span></p>
                <p className='text-sm font-bold'>Designation <span className='font-light'>{fuhadShiblu_usersDataItem.designation}</span></p>
              </div>
            </div>
          ))
        }
      <footer className='text-xl flex mb-10 items-center gap-1 font-semibold'>Created with <FaHeart className='text-[#ff1414]'/> by <a className='font-bold text-[#3366d4]' href='https://github.com/fuhad-shiblu' target='_blank'>Fuhad Hasan Shiblu</a></footer>
      </div>
    </div>
    </>
  )
}

export default App
