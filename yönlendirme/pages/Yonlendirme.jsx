import * as React from 'react';
import { body, navbar, yonlendirmekutu, yonlendirmekutuFlex } from '../styles/globalStyle'
import { Box, Button } from '@mui/material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ConstructionIcon from '@mui/icons-material/Construction';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import logo from '../image/lego.svg'
import "./style.css"

export const Yonlendirme = ()=> {

return(
<>
    <Box sx={body}>

    <Box sx={navbar}>
       <Box sx={{width:'140px',height:'140px',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2rem'}}><img src={logo} className='makxlogo' style={{objectFit:'cover',width:'130px',height:'130px'}}/></Box> 
    </Box>

<Box sx={yonlendirmekutuFlex} className='yetkili'>
    <Button sx={yonlendirmekutu}>
         <SupervisorAccountIcon sx={{width:'2.5rem',height:'2.5rem'}}/>
            <h3>Yetkili</h3>
           
    </Button>

    <Button sx={yonlendirmekutu} className='teknik-servis'>
           <ConstructionIcon sx={{width:'2.5rem',height:'2.5rem'}}/>
            <h3>Teknik Servis</h3>
         
    </Button>

    <Button sx={yonlendirmekutu} className='stok-takip' >
        <InventoryIcon sx={{width:'2.5rem',height:'2.5rem'}}/>
            <h3>Stok Takip</h3>
            
    </Button>

    <Button sx={yonlendirmekutu} className='üretim'>
          <AddCircleOutlineIcon sx={{width:'2.5rem',height:'2.5rem'}}/>
            <h3>Üretim</h3>
          
    </Button>
</Box>

<Box sx={{fontSize:'1.1rem',display:'flex',justifyContent:'center',alignItems:'center',gap:'2%',height:'5.3rem'}} className='footer-yazi'><ArrowUpwardIcon/><p>Gitmek istediğiniz birimi seçiniz</p><ArrowUpwardIcon/></Box>


    </Box>

    
    
</>




)
  
}