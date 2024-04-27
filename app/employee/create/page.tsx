import { FormWrapper } from '@/components/ui/Form-wrapper'
import { EmployeeForm } from '@/components/ui/employee-form'
import React from 'react'


const EmployeeCreatePage = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
<FormWrapper title="create a new employee">
<EmployeeForm/>
</FormWrapper>
</div>
  )
}

export default EmployeeCreatePage