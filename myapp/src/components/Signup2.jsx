import { TextField ,Button} from '@mui/material'
import React from 'react'

export const Signup2 = () => {
  return (
    <div>
          <TextField variant='outlined' label='name'/><br />
          <TextField variant='outlined' label='age'/><br />
          <TextField variant='outlined' label='number'/><br />
          <TextField variant='outlined' label='password' /><br />
      <Button variant='contained'>SUBMIT</Button>
    </div>
  )
}

export default Signup2
