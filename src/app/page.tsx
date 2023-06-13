'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@mui/material/Button';
import AddCardIcon from '@mui/icons-material/AddCard';
import { useState } from 'react';
import BasicModal from '@/components/BasicModal';

export default function Home() {
  const [haveACard, setHaveACard] = useState(false)

  return (
    <main className={styles.main}>
      <div>
        {!haveACard ?
        <BasicModal/> :
        <div>Здесь будет карта</div>} 
      </div>
    </main>
  )
}
