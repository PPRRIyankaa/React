import {React,useState} from 'react'
import AddIcon from '@mui/icons-material/Add';

export default function CreateNote(props) {
    const [note,setnote] = useState({
        title:"",
        content:""
    })

    const InputEvent = (event) =>{
        // const value = event.target.value;
        // const name = event.target.name;

        // This is Object destructuring 
        const {name,value} = event.target;

        setnote((prevData)=>{
            return{
                ...prevData,
                [name]: value,
            }
        })
    }

    const addEvent = (e) =>{
        e.preventDefault()
        props.passnote(note);
        setnote({
            title:"",
            content:""
        })
    }
  return (
    <>
    <div>
    <div className='container con1'>
      <form action="submitform" className='main-root'>
        <input className='items' type="text" name='title' id="title" value={note.title} onChange={InputEvent} placeholder='tile'/>
        <textarea className='items' name="content" id="content" value={note.content} onChange={InputEvent} rows='4' placeholder='Make a note'></textarea>
        <div className='delcon'>
        <button className='plus' onClick={addEvent}>
            <AddIcon />
        </button>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}
