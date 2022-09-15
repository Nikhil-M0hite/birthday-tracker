import { useState } from "react"

 const AddTask = ({ onAdd}) => {
    const [name,setName] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit =(e) => {
        e.preventDefault();
        if(!name){
            alert("please enter correct name")
            return
        }
        onAdd({name,day,reminder})
        setName("")
        setDay("")
        setReminder(false)


    }
  return (
    <form className="add-form"  onSubmit={onSubmit}>
       <div className="form-control">
        <label>Add Your Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='add your name'/>
       </div>
       <div className="form-control">
        <label>Day & Time</label>
        <input type='text' value={day} onChange={(e) => setDay(e.target.value)} placeholder='add your birth date'/>
       </div>
       <div className="form-control form-control-check">
        <label>set reminder</label>
        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
       </div>
       <input value='add value'  className="btn btn-block" type='submit'/>
    </form>
  )
}
export default AddTask