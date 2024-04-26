import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div><h1></h1>
    <Button asChild>
      <Link href={"/employee.create"}>
        
      </Link>
    </Button>
    </div>
  )
}

export default page