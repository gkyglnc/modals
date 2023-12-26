import React from 'react'
import { flex, flexw, modalStyle } from '../../styles/globalStyle'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { perm , title } from '../../helper/data'

export const BranchTypeModals = ({open , setOpen}) => {

  return (
    <Modal 
    open={open}
    onClose={()=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    > 

    <Box sx={modalStyle}>
        <Box>
            <TextField sx={flexw}
            fullWidth
            type='type'
            variant='outlined'
            label="Type"
            />
        </Box>

        <Box sx={flexw} fullWidth>
        <FormControl fullWidth>
            <InputLabel>Perm</InputLabel>
            <Select label="perm">
            {perm.map((i)=>{
                return(
                    <MenuItem key={i?.id} value={i.id}>
                        {i?.label?.toUpperCase()}
                    </MenuItem>
                )
            })}
            </Select>
        </FormControl>
        
        <FormControl fullWidth>
            <InputLabel>Title</InputLabel>
            <Select label="title">
            {title.map((i)=>{
                return(
                    <MenuItem key={i?.id} value={i.value}>
                        {i?.label?.toUpperCase()}
                    </MenuItem>
                )
            })}
            </Select>
        </FormControl>
        </Box>
    </Box>
    </Modal>
  )
}
