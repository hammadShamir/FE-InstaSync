import * as z from 'zod'


// SignIn
const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})
type loginFormValues = z.infer<typeof LoginSchema>

// SignUp
const signUpSchema = z.object({
    fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
    role: z.string().min(1, { message: "Please select a role" }),
    termsAccepted: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions" })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type signUpFormValues = z.infer<typeof signUpSchema>




export {
    LoginSchema,
    loginFormValues,
    signUpSchema,
    signUpFormValues
}