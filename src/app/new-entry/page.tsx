import Heading2 from '@/components/ui/heading/Heading2'
import Heading3 from '@/components/ui/heading/Heading3'
import InputBox from '@/components/ui/InputBox'
import PageWrapper from '@/components/ui/PageWrapper'

const page = () => {
  return (
    <PageWrapper>
        <Heading2 title='Create New Entry'/>
        <Heading3 title='Date :'/>
        <InputBox/>
    </PageWrapper>
  )
}

export default page