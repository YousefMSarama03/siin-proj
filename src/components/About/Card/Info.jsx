import React from 'react'
// import Social from './Social'


const Info = ({employees}) => {
  return (
    <>
    {employees.map((employee, index) => (
      <div key={employee.id} className='group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-slate-50 dark:hover:bg-slate-800 h-full min-h-[260px] max-h-[320px]'>
        <div className='flex flex-col items-center justify-center p-6 h-full'>
          <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-3 border-white dark:border-slate-700 shadow-lg hover:scale-110 transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-400 flex items-center justify-center mb-5'>
            <span className='text-xl font-bold text-white'>
              {employee.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <h3 className='mb-3 text-lg font-bold text-slate-900 dark:text-white text-center leading-tight'>{employee.name}</h3>
          <p className='bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 text-xs px-4 py-2 rounded-full text-center font-semibold shadow-sm hover:shadow-md transition-all duration-300'>
            {employee.job}
          </p>
        </div>
        {/* <Social /> */}
      </div>
    ))}
    </>
  )
}

export default Info
