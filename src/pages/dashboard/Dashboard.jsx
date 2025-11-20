import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex justify-center items-center h-screen text-primary text-2xl bg-[#ecebe5] flex-col'>
      <h1>Welcome from our dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio
        voluptatum delectus ipsum officiis quis? Quia aliquam, incidunt
        veritatis saepe placeat rerum aliquid tempora earum consectetur,
        corporis ipsum aut praesentium!
      </p>
      <div className='flex items-center justify-center'>
        <button className='bg-blue-100 px-7 py-2 rounded-sm hover:opacity-75 text-base mx-2'>
          Contact me
        </button>{' '}
        <button className='bg-blue-100 px-7 py-2 rounded-sm hover:opacity-75 text-base mx-2'>
          Check now
        </button>
      </div>
    </div>
  )
}

export default Dashboard
