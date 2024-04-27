"use server";
import { db } from "@/lib/db";
import { EmployeeSchema } from "@/schemas";
import { z } from "zod";
//server action to create employee
export const createEmployee = async (values: z.infer<typeof EmployeeSchema>) => {
    console.log(values);

    //server side validation
    const validatedFields = EmployeeSchema.safeParse(values);

    if (!validatedFields.success) {
        return {
            error: "Invalid Fields"
        }
    }

    const employee = await db.employee.create({
        data: {
            firstname: validatedFields.data?.firstname,
            lastname: validatedFields.data?.lastname,
            email: validatedFields.data?.email,
            phone: validatedFields.data?.phoneNumber,

        },
    });
    console.log(employee);
}