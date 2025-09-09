import React from 'react'
import Yousef from './yousef.jpeg'
import Social from './Social'


const Info = ({employees}) => {
  return (
    <>
    {employees.map((employee, index) => (
  <div key={employee.id} className='bg-white text-black dark:bg-[#0F0F0F] dark:text-white rounded-xl border border-gray-200 dark:border-[#8e8b8b2d] hover:border-blueSiin/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:bg-gray-50 dark:hover:bg-[#18181b]'>
  <div className='flex flex-col items-center justify-center p-4'>
          <img src={Yousef} alt={`${employee.name} profile`} className='mt-12 w-[65px] h-[65px] object-cover rounded-full border-2 border-gray-300 dark:border-gray-500 hover:scale-110 transition duration-300' />
          <h3 className='pt-12 pb-6 text-[22px] font-semibold capitalize text-gray-900 dark:text-white'>{employee.name}</h3>
          <p className='w-auto bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800 h-auto text-lg px-5 py-1 rounded-full text-center font-medium shadow-sm'>{employee.job}</p>
        </div>
        <Social />
      </div>
    ))}
    </>
  )
}

export default Info
