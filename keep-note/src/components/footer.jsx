import React from 'react'

export default function Footer() {
    const year = new Date();
    // console.log(year.getFullYear())
  return (
    <>
        <div className="footer"><h4 >copyright © {year.getFullYear()}</h4></div>
    </>
  )
}
