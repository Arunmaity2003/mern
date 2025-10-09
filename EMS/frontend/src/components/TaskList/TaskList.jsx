import React from 'react'

function TaskList() {
  return (
    <div id='taskList' className='h-[55%] overflow-auto flex items-center justify-start gap-5 w-full flex-nowrap py-5 mt-10'>
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-zinc-500 rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4>07 Oct 2025</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt praesentium magnam molestias earum minus illum vero aperiam quis, tenetur suscipit quas rerum adipisci? Temporibus numquam veniam distinctio laboriosam vel animi id!</p>
        </div>
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-500 rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4>07 Oct 2025</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt praesentium magnam molestias earum minus illum vero aperiam quis, tenetur suscipit quas rerum adipisci? Temporibus numquam veniam distinctio laboriosam vel animi id!</p>
        </div>
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-500 rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4>07 Oct 2025</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt praesentium magnam molestias earum minus illum vero aperiam quis, tenetur suscipit quas rerum adipisci? Temporibus numquam veniam distinctio laboriosam vel animi id!</p>
        </div>
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-500 rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4>07 Oct 2025</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt praesentium magnam molestias earum minus illum vero aperiam quis, tenetur suscipit quas rerum adipisci? Temporibus numquam veniam distinctio laboriosam vel animi id!</p>
        </div>
        <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-500 rounded-xl">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4>07 Oct 2025</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt praesentium magnam molestias earum minus illum vero aperiam quis, tenetur suscipit quas rerum adipisci? Temporibus numquam veniam distinctio laboriosam vel animi id!</p>
        </div>
    </div>
  )
}

export default TaskList