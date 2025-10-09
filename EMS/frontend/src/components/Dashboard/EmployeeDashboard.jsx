import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header />
        <TaskListNumber />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard