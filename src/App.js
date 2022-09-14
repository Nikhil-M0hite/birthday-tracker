import axios from 'axios'
import { useState ,useEffect } from 'react'
import AddTask from './components/AddTaskForm'
import Header from './components/Header'
import Tasks from './components/Tasks'

 const App = () => {
  const [showAdd,setShowAdd] = useState(false)
  const [MyTasks,setMyTasks] = useState([])

     const addTask = async (task) => {
      const result = await axios.post('http://localhost:5000/MyTasks',task,{
        headers:{
          'Content-type':'application/json',
       
        },
      })

      setMyTasks([...MyTasks,result.data])
     
     }

     const deleteTask = async (id) => {
      await axios.delete(`http://localhost:5000/MyTasks/${id}`)

        setMyTasks(MyTasks.filter(item => item.id !== id))
     }

     const toggleReminder = async(id) => {
      const taskToggle = await fetchMyTask(id)
      const updTask ={...taskToggle, reminder:!taskToggle.reminder}

      const res = await axios.put(`http://localhost:5000/MyTasks/${id}`,updTask,{
        headers:{
          'Content-type':'application/json'
        }
      })

       setMyTasks(MyTasks.map(item => 
        item.id ===id ? {...item, reminder:!res.data.reminder} : item
       ))
     }
     useEffect(() => {
        const getTask = async () => {
          const taskFromServer = await fetchTask()
          setMyTasks(taskFromServer)
        }
      getTask()
     },[])
     const fetchTask = async () => {
      const result = await axios('http://localhost:5000/MyTasks')
      console.log(result)
      return result.data
    }
    const fetchMyTask = async (id) => {
      const result = await axios(`http://localhost:5000/MyTasks/${id}`)
      console.log(result)
      return result.data
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