import SingleTask from "../SingleTask"

const Tasks = ({MyTasks,onDelete,onToggle}) => {
   
  return (
    <>
      {MyTasks.map(item => (
        <SingleTask key={item.id} track={item} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks