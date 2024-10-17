import React from 'react'

const Notfound = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen bg-gray-900'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[150px]  font-bold text-gray-900 dark:text-white'>404</h1>
                <p className='text-[50px] font-bold text-gray-900 dark:text-white'>Not Found</p>
            </div>
        </div>
    )
}

export default Notfound