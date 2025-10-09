import React from 'react'
import Header from '../Other/Header'

function AdminDashboard() {
    return (
        <div className='h-screen w-ful p-10'>
            <Header />
            <div>
                <form className='flex w-full bg-red-300 items-start justify-center'>
                    <div>
                        <div>
                            <h3>Task Title</h3>
                            <input type="text" placeholder='Make a UI design' />
                        </div>
                        <div>
                            <h3>Date</h3>
                            <input type="date" />
                        </div>
                        <div>
                            <h3>Assign to</h3>
                            <input type="text" placeholder='Employee name' />
                        </div>
                        <div>
                            <h3>Ctegory</h3>
                            <input type="text" placeholder='Design,dev,etc..' />
                        </div>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <button>Create Task</button>
                </form>
            </div>
        </div>
    )
}

export default AdminDashboard