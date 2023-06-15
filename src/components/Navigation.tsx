'use client'
import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { Box, Drawer, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';

const styledMenuItem = {
  color: '#a7b1c2',
  '&:hover': {
    backgroundColor: '#293846',
    color: '#fff'
  }
}

const Navigation = () => {

  return (
    <Drawer variant='permanent'   PaperProps={{
      sx: {
        backgroundColor: "#2F4050",
        color: "#fff",
      }
    }} >
      <Typography variant='h3' sx={{backgroundColor: '#2F4050', borderBottom: '1px solid gray', padding: 2, fontSize: 20}}>TurkaPay</Typography>
      <MenuList sx={{backgroundColor: '#2F4050', width: 250 }}>
        <Link href='/'>
          <MenuItem  sx={styledMenuItem}>
            <HomeIcon sx={{ m: 1 }} />Главная
          </MenuItem>
        </Link>
        <Link href='/history'>
          <MenuItem sx={styledMenuItem} >
          <HistoryIcon sx={{ m: 1 }} /> История
          </MenuItem>
        </Link>
      </MenuList>
    </Drawer>
  )
}

export default Navigation