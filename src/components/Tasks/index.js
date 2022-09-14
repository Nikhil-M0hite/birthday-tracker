import SingleTask from "../SingleTask"

const Tasks = ({MyTasks,onDelete,onToggle}) => {
   
  return (
    <>
      {MyTasks.map((item ,index)=> (
        <SingleTask key={index} track={item} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks