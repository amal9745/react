import { Button ,TextField, Typography } from '@mui/material' 
import React, { useState } from 'react'


const State = () => {
    var [val, setval] = useState("Jishnu")
    var [name, setname] = useState()
    
    const handleinput = (e) => {
        setval(e.target.value)
        console.log(e.target.value)
    }
    const submit = () => {
        setname(val)
    }
  return (
    <div>
          <Typography variant='h3'>WELCOME {name}</Typography> <br />
          <TextField variant='outlined' label="enter your name" onChange={handleinput}/><br /><br />
          <Button variant='contained' onClick={submit}>SUBMIT</Button>
    </div>
  )
}

export default State