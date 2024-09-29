import { useState } from 'react'
import './App.css'
import allusersapi from './UsersAPI'
import usersData from './UsersAPI'

function App() {
  const [data , setData] = useState(usersData)
  
  return (
    <>
    <div className="container mx-auto m-10">
      <div className="flex flex-wrap justify-center gap-10 overflow-x-scroll w-full h-screen">
        {
          data.map((item)=>(
            <div key={item.user_id} className="p-5 bg-[#7FA1C3] rounded-xl flex flex-col items-center gap-10">
              <img className='w-full rounded-full' src={item.photo} alt="User" />
              <div className="flex flex-col gap-5">
                <p className='text-sm font-bold'>Name: <span className='font-light'>{item.fullname}</span></p>
                <p className='text-sm font-bold'>User Id: <span className='font-light'>{item.user_id}</span></p>
                <p className='text-sm font-bold'>E-Mail: <span className='font-light'>{item.email}</span></p>
                <p className='text-sm font-bold'>Gender: <span className='font-light'>{item.gender}</span></p>
                <p className='text-sm font-bold'>Country: <span className='font-light'>{item.country}</span></p>
                <p className='text-sm font-bold'>Designation <span className='font-light'>{item.designation}</span></p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default App
