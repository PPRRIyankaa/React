import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function Notes(props) {
  const deleteNote = () =>{
    props.deleteItem(props.id);

  }
  return (
    
    <div className='con'>
    <div className='notes'>
    <p className='text title'>{props.title}</p>
    <p className='text content'>{props.content}</p>
    <div className='delcon'>
    <button className='del' onClick={deleteNote}>
      <DeleteIcon className='deleteicon'/>
      </button>
      </div>
    </div>
    </div>
     
  )
}
