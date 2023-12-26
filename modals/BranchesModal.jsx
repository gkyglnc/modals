import React from 'react'
import { flex, flexw, modalStyle } from '../../styles/globalStyle'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { type , parent } from '../../helper/data'


export const Branches = ({openBranch , setOpenBranch}) => {

    return (
      <Modal 
      open={openBranch}
      onClose={()=>setOpenBranch(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      > 
  
      <Box sx={modalStyle}>
          <Box>
              <TextField sx={flexw}
              fullWidth
              type='name'
              variant='outlined'
              label="Name"
              />
          </Box>
  
          <Box sx={flexw} fullWidth>
          <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select label="Type">
              {type.map((i)=>{
                  return(
                      <MenuItem key={i?.value} value={i.value}>
                          {i?.label?.toUpperCase()}
                      </MenuItem>
                  )
              })}
              </Select>
          </FormControl>

          <FormControl fullWidth>
              <InputLabel>Parent</InputLabel>
              <Select label="Parent">
              {parent.map((i)=>{
                  return(
                      <MenuItem key={i?.value} value={i.value}>
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