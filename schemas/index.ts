import { z } from "zod"

export const EmployeeSchema = z.object({  //export means it can be imported
  firstname: z.string().min(2, {
      message: "firstname must be at least 2 characters.",
    }),
  lastname: z.string().min(2, {
      message: "lastname must be at least 2 characters.",
    }),
  email: z.string().email(), 
  phoneNumber: z.string().min(11, {
      message: "phoneNumber must be at least 11 characters.",}),
  
  })
  