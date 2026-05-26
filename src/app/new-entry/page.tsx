"use client"

import {Heading2,Heading3} from '@/components/heading'
import Input from '@/components/ui/Input'
import {PageWrapper,LogsEntry} from '@/components/layout'
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
        <Input type='date' name='date' id='date' value={date} onChange={handleDateChange}/>
        <Heading3 title='Logs :' className='mt-4'/>
        <LogsEntry/>

    </PageWrapper>
  )
}

export default page