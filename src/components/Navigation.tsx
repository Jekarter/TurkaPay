'use client'
import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { Drawer } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';

const Navigation = () => {

  return (
    <Drawer variant='permanent' >
      <MenuList sx={{ width: 250 }}>
        <Link href='/'>
          <MenuItem>
            <HomeIcon sx={{ mx: 1}}  />Главная
          </MenuItem>
        </Link>
        <Link href='/history'>
          <MenuItem>
          <HistoryIcon sx={{ mx: 1}} /> История
          </MenuItem>
        </Link>
      </MenuList>
    </Drawer>
  )
}

export default Navigation