import { FaTimes } from 'react-icons/fa';
const Task = ({delfn, task, togFn}) => {
  return ( 
    <div className = {`task ${task.reminder ? 'reminder' : ''}`}
    onDoubleClick = {() => togFn(task.id)}>
      <h3>
        {task.text} 
        <FaTimes 
        onClick = {() => delfn(task.id)}
        style = {{
          color: 'red', 
          cursor: 'pointer'
        }}/>
      </h3>
      <p>{task.day}</p>
    </div>
   );
}
 
export default Task;