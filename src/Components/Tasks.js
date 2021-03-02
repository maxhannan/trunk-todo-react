import Task from "./Task";

const Tasks = ({delfn, tasks, togFn}) => {
  
  return ( 
    <>
      {tasks.map(task => {
        return (
          <Task 
          key = {task.id}
          task = {task}
          delfn = {delfn}
          togFn = {togFn}
          />
        )
      })}
    </>
  );
}
 
export default Tasks;