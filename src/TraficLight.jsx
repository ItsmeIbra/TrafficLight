import React, { useEffect, useState } from 'react'

const TraficLight = () => {
    const[light,setLight]= useState("red") 
    

    useEffect(()=>{
        const interval = setInterval(()=>{
            setLight((prevLight)=>{
                if(prevLight === "red") return "yellow";
                if (prevLight === "yellow") return "green";
                if (prevLight === "green") return "red";
            })
        },1000)
        return()=> clearInterval(interval)
    })
   const containerStyle ={
    backgroundColor: 'black',
    borderRadius: '10px',
    width:'50px', padding:'10px'
   }
   const lightStyle  ={
    width:'30px', height:'30px', borderRadius: '50px', margin:'10px'
   }
  return (
    <div className="d-flex flex-column align-items-center mt-5">
lightStyle
<h1 className="mb-5"> Traffic lights</h1>
<div style={containerStyle}>
    <div style={{...lightStyle, backgroundColor : light === 'red' ? 'red' : 'green'}}></div>
    <div style={{...lightStyle, backgroundColor : light === 'yellow' ? 'red' : 'green'}}></div>
    <div style={{...lightStyle, backgroundColor : light === 'green' ? 'red' : 'green'}}></div>
</div>

    </div>
  )
}

export default TraficLight