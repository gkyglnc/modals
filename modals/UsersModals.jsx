import React from 'react'
import { flex, flexw, halfWidth, modalStyle } from '../../styles/globalStyle'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'


export const UsersModals = ({openUsers , setOpenUsers}) => {

  return (
    <Modal 
    open={openUsers}
    onClose={()=>setOpenUsers(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    > 

    <Box sx={modalStyle}>

    <Box sx={flexw}>
    <TextField sx={flexw}
            fullWidth
            type='name'
            variant='outlined'
            label="Name"
        />

    <TextField sx={flexw}
        fullWidth
        type='surname'
        variant='outlined'
        label="Surname"
     />
    </Box>
    <Box sx={flexw}>
    <TextField sx={flexw}
          fullWidth
          type='email'
          variant='outlined'
          label="E-mail"
      />
      <TextField sx={flexw}
          fullWidth
          type='Identify number'
          variant='outlined'
          label="Identify Number"
      />
      <TextField sx={flexw}
          fullWidth
          type='social security number'
          variant='outlined'
          label="Social Security Number"
      />
      </Box>
      <Box sx={flexw}>
        <TextField sx={flexw}
            fullWidth
            label="Birth Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField sx={flexw}
            fullWidth
            type='birth Place'
            variant='outlined'
            label="Birth Place"
        />
      </Box>

      <Box sx={flexw}>
      <TextField sx={flexw}
            fullWidth
            type='address'
            variant='outlined'
            label="Address"
        />
      </Box>
      <Box sx={flexw}>
      <TextField sx={flexw}
            fullWidth
            type='home phone'
            variant='outlined'
            label="Home Phone"
      />
      <TextField sx={flexw}
            fullWidth
            type='gsm1'
            variant='outlined'
            label="GSM1"
      />
      <TextField sx={flexw}
            fullWidth
            type='gsm2'
            variant='outlined'
            label="GSM2"
      />   
      </Box>

  <Box sx={flexw}>
  <TextField sx={flexw}
        fullWidth
        type='education'
        variant='outlined'
        label="Education"
  /> 
  <TextField sx={flexw}
        fullWidth
        type='date'
        variant='outlined'
        label="Employment Date"
        InputLabelProps={{
          shrink: true,
        }}
  /> 
  <TextField sx={flexw}
        fullWidth
        type='date'
        variant='outlined'
        label="Termination Date"
        InputLabelProps={{
          shrink: true,
        }}
  /> 
  </Box>
 <Box sx={flexw}>
        <Box sx={halfWidth}>
        <TextField sx={flex}
              fullWidth
              type='driver licence'
              variant='outlined'
              label="Driver Licence"
        /> 
        <TextField sx={flex}
              fullWidth
              type='blood group '
              variant='outlined'
              label="Blood Group"
        /> 
        </Box>

        <Box sx={flexw}>
        <TextField
              fullWidth
              type='note'
              variant='outlined'
              label="Note"
              InputProps={{
                style: {
                    height:"8rem",
                    display:"flex",
                    marginBottom:"2rem",
                },
              }}
        /> 
        </Box>
  </Box>

    </Box>
    </Modal>
  )
}
