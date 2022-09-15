import axios from 'axios'
import { useState ,useEffect } from 'react'
import AddTask from './components/AddTaskForm'
import Header from './components/Header'
import Tasks from './components/Tasks'

 const App = () => {
  const [showAdd,setShowAdd] = useState(false)
  const [MyTasks,setMyTasks] = useState([
    {
      id:1,
      name:'Brad Pitt',
      day: '2nd April',
      reminder:true
    },
    {
      id:2,
      name:'Tony Stark',
      day: '5th April',
      reminder:true
    },
    {
      id:3,
      name:'Ant Man',
      day: '4th April',
      reminder:false
    },
    {
      id:4,
      name:'Steve Rogers',
      day: '22nd April',
      reminder:true
    }

  ])

    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id,...task}
      setMyTasks([...MyTasks,newTask])
    }

    //  const addTask = async (task) => {
      
    //   const result = await axios.post('http://localhost:5000/MyTasks',task,{
  
    //   })

    //   setMyTasks([...MyTasks,result.data])
     
    //  }

    const deleteTask = (id) =>{
      setMyTasks(MyTasks.filter(item => item.id !== id))
    }
    //  const deleteTask = async (id) => {
    //   await axios.delete(`http://localhost:5000/MyTasks/${id}`)

    //     setMyTasks(MyTasks.filter(item => item.id !== id))
    //  }

    const toggleReminder = (id) => {
         setMyTasks(MyTasks.map(item => item.id === id ? {...item,reminder:!item.toggleReminder} : item))
    }
    //  const toggleReminder = async(id) => {
    //   const taskToggle = await fetchMyTask(id)
    //   const updTask ={...taskToggle, reminder:!taskToggle.reminder}

    //   const res = await axios.put(`http://localhost:5000/MyTasks/${id}`,updTask,{
    //     headers:{
    //       'Content-type':'application/json'
    //     }
    //   })

      //  setMyTasks(MyTasks.map(item => 
      //   item.id ===id ? {...item, reminder:!res.data.reminder} : item
      //  ))
    //  }
    //  useEffect(() => {
    //     const getTask = async () => {
    //       const taskFromServer = await fetchTask()
    //       setMyTasks(taskFromServer)
    //     }
    //   getTask()
    //  },[])
    //  const fetchTask = async () => {
    //   const result = await axios('http://localhost:5000/MyTasks')
    //   console.log(result)
    //   return result.data
    // }
    // const fetchMyTask = async (id) => {
    //   const result = await axios(`http://localhost:5000/MyTasks/${id}`)
    //   console.log(result)
    //   return result.data
    // }
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