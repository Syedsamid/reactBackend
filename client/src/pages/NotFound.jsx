import React from 'react'

function NotFound() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm w-full text-center">
                    <h2 className='text-xl font-semibold text-gray-800'>404 - Not Found</h2>
                    <p className='text-gray-600 mt-2'>Oops! The page you are looking for does not exist</p>
                </div>
            </div>
        </>
    )
}

export default NotFound