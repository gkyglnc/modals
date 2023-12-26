import React from 'react'
import { modalStyle } from '../../styles/globalStyle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'



export const ExamModals = ({open , setOpen}) => {
  return (
<Modal 
open={open}
onClose={()=>setOpen(false)}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
> 
<Box
sx={modalStyle}
>
<TextField
type='text'
variant='outlined'
label="hello"
/>


</Box>






</Modal>
  )
}
