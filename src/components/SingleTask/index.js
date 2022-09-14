import React from 'react'
import {FaTimes} from 'react-icons/fa'
 const SingleTask = ({track,onDelete,onToggle}) => {
  return (
    <div className={`task ${track.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(track.id)}>
        <h3>{track.name} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() =>onDelete(track.id) } /></h3>
        <p>{track.day}</p>
        </div>
  )
}
export default SingleTask
