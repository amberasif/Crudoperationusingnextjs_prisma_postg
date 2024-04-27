import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'


const EmployeePage = () => {
  return (
    <div className='flex flex-col gap-4 mt-4 max-w-[1000px] justify-center items-center' >
        <h1 className='text-4xl font-bold'>Crud operation using nextjs, prisma ,postg</h1>
        <Button asChild>
            <Link href='/employee/create'>
                Create
            </Link>
        </Button>
</div>
  )
}

export default EmployeePage