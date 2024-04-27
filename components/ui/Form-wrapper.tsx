import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  interface FormWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;   //optional
  
  }
  
export const FormWrapper = ({children,title,description}:FormWrapperProps) => {
    return(
    
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
{children}
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}

export default FormWrapper

