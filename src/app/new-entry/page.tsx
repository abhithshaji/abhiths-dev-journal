"use client"

import Heading2 from '@/components/ui/heading/Heading2'
import Heading3 from '@/components/ui/heading/Heading3'
import InputBox from '@/components/ui/InputBox'
import LogBox from '@/components/ui/LogBox'
import PageWrapper from '@/components/ui/PageWrapper'
import { useState } from 'react'

const page = () => {

  const today = new Date().toISOString().split('T')[0];
  const [date,setDate] = useState(today);

  const handleDateChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setDate(event.target.value);
  }

  return (
    <PageWrapper>
        <Heading2 title='Create New Entry'/>
        <Heading3 title='Date :' />
        <InputBox type='date' name='date' id='date' value={date} onChange={handleDateChange}/>
        <Heading3 title='Logs :' className='mt-4'/>
        <LogBox/>

    </PageWrapper>
  )
}

export default page