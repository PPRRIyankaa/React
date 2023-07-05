import React, {useState} from 'react'
import Header from './components/header'
import CreateNote from './components/createnote'
import Footer from './components/footer'
import Notes from './components/notes'

export default function App() {
  const [additem,setadditem] = useState([])
  const addnote = (note) =>{
    // alert("I am clicked")
    setadditem((prevData)=>{
      return [...prevData, note]
    });
  };
  const onDelete = (id) =>{
    setadditem((olditem)=> olditem.filter((olditem,index)=>{
      return id!==index;
    })
    )
  }
  return (
    <>
      <Header/>
      <CreateNote passnote={addnote}/>
      <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
      {additem.map((val,index)=>{
        return <Notes
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={(id)=>onDelete(id)}
        />}
      )}
      </div>
      <Footer/>
    </>
  )
}

