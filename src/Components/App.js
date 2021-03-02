import { useState } from 'react'
import uniqid from "uniqid";

import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 7th at 12:30pm",
      reminder: false
    }
  ])
  const [formOpen, setFormOpen] = useState(false)

  const openForm = () => {
    setFormOpen(!formOpen)
  }
  const onAdd = (e, task) => { 
    setTasks([...tasks, {id: uniqid(), ...task,}])
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => {
      return task.id !== id
    }))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? 
      {...task, reminder: !task.reminder}: task))
  }

  return (
    <div className="container">
      <Header onOpen = {openForm} title = 'Task Tracker'/>
      <AddTask open = {formOpen}  openFn = {openForm} onAdd = {onAdd}/>
      {tasks.length > 0 ? 
      <Tasks 
      delfn = {handleDelete} 
      tasks = {tasks}
      togFn = {toggleReminder}
      />
      : 
      <h3 style = {{ color: 'gray' }}>No tasks to show</h3>}
    </div>
  );
}


