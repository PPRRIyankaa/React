import React from 'react'
import '../App.css'
export default function Header() {
  return (
    <>
        <div className='header'>
        
            <img className='img' src={require('./Logo.png')} alt="Logo" />
            <h1 style={{color:'#ff4500',fontSize:49,margin:20,marginLeft:-20}}>Notes</h1>
        </div>

    </>
  )
}
