import { useState } from 'react'
const AddTask = ({open, onAdd, openFn}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    openFn()
    onAdd(e, {text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)
  }
  return ( 
    <form 
    className="add-form"
    onSubmit = {onSubmit}
    style = {open? {}: {display: 'none'}}
    >
      <div className="form-control">
        <label>Task</label>
        <input 
        type="text" 
        placeholder = 'Add Task'
        value = {text}
        onChange = {(e) => setText(e.target.value)}
        required
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input 
        type="text" 
        placeholder = 'Add Time'
        value = {day}
        onChange = {(e) => setDay(e.target.value)}
        required
        />
      </div>
      <div className="form-control 
      form-control-check">
        <label>Set Reminder</label>
        <input 
        type="checkbox"
        checked = {reminder}
        value = {reminder}
        onChange = {(e) => setReminder(e.target.checked)}
        />
      </div>
      <input type = 'submit' value = 'save task' className = 'btn btn-block'/>
    </form>
   );
}
 
export default AddTask;