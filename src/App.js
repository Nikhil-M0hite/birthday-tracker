import { useState } from 'react'
import AddTask from './components/AddTaskForm'
import Header from './components/Header'
import Tasks from './components/Tasks'

 const App = () => {
  const [showAdd,setShowAdd] = useState(false)
  const [MyTasks,setMyTasks] = useState(
    [
     {
         id:1,
         name:"Nikhil Mohite",
         day:"Apr 2nd ",
         reminder:true
     },
     {
         id:2,
         name:"Harish Nalavade",
         day:"Apr 14th ",
         reminder:true
     },
     {
         id:3,
         name:"Kunal Lotankar",
         day:"May 12th ",
         reminder:true
     }
   ]
     )

     const addTask =(task) => {
      const id =Math.floor(Math.random() * 10000) + 1

      const newTask ={ id, ...task}
      setMyTasks([...MyTasks,newTask])
     }

     const deleteTask =(id) =>{
        setMyTasks(MyTasks.filter(item => item.id !== id))
     }

     const toggleReminder =(id) => {
       setMyTasks(MyTasks.map(item => 
        item.id ===id ? {...item, reminder:!item.reminder} : item
       ))
     }
  return (
    <div className='container'>
       <Header title="BirthDay Tracker" onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd}/>
       {showAdd && <AddTask  onAdd={addTask}/>}
       {MyTasks.length > 0 ? <Tasks  MyTasks={MyTasks} onDelete={deleteTask} onToggle={toggleReminder} />: (
       ' No Birthday Remaining' 
       )}
    </div>
  )
   
}
export  default App