'use client'
import styles from './page.module.css'
import { useState } from 'react';
import BasicModal from '@/components/BasicModal';
import { Box, Typography } from '@mui/material';
import Visa from '../../public/visa.svg'
import Image from 'next/image';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const styledCard = {
  position: 'relative',
  width: 320,
  height: 200,
  borderRadius: '10%',
  background: `linear-gradient( 45deg, transparent, rgb(170, 90, 90) ) rgb(28, 42, 55);`,
  color: 'white',
  textShadow: '1px 1px 2px black, 0 0 1em white, 0 0 0.2em black',
  p: 3,
  fontSize: 20,
}

const styledMenuCard = {
  display: 'flex',
  justifyContent: 'space-around',
  width: 550,
  height: 100,
  backgroundColor: '#2F4050',
  borderRadius: 4,
  mt: 3,
  color: '#a7b1c2',
  alignItems: 'end'
}

const styledMenuCardItem = {
  textAlign: 'center',
  fontSize: 8,
  p: 1.8,
  '&:hover': {
    backgroundColor: '#293846',
    color: '#fff'
  }
}

const styledMenuCardIcom = {
  fontSize: 45
}



export default function Home() {
  const [haveACard, setHaveACard] = useState(true)

  return (
    <main className={styles.main}>
      <Box>
        {haveACard ?
          <Box sx={styledCard}>
            <Box>TurkaPay</Box>
            <Box sx={{mt: 9}}>0000 0000 0000 0001</Box>
            <Box sx={{position: 'absolute', ml: 'auto', left: 225, bottom: -10}}>
              <Image src={Visa} alt='visa' width={80} height={80}/>
            </Box>
            
          </Box> :
          <BasicModal/>
        } 
      </Box>
      <Box sx={styledMenuCard}>
        <Box sx={styledMenuCardItem}>
          <AddCircleIcon sx={styledMenuCardIcom} />
          <Typography>Пополнить счёт</Typography>
        </Box>
        <Box sx={styledMenuCardItem} >
          <AccessTimeFilledIcon sx={styledMenuCardIcom} />
          <Typography>Увеличить время</Typography>
        </Box>
        <Box sx={styledMenuCardItem}>
          <CancelIcon sx={styledMenuCardIcom} />
          <Typography>Закрыть карту</Typography>
        </Box>
          
      </Box>
    </main>
  )
}
