import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { Checkbox } from "../../components/ui/checkbox"
import { signUpFormValues, signUpSchema } from '../../utils/schemas/Auth'
import { Link, useNavigate } from 'react-router-dom'
import { routePath } from '../../route/routePath'
import { registerUser } from '../../Services/APIs/auth'


export default function SignUp() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false)

    const form = useForm<signUpFormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            termsAccepted: false,
        },
    })

    async function onSubmit(values: signUpFormValues) {
        try {
            setIsLoading(true);
            const result = await registerUser(values)
            if (result) {
                navigate('/login')
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center p-4">
            <Card className="w-full max-w-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                    <CardDescription className="text-center">Enter your information to sign up</CardDescription>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <CardContent className="space-y-4 text-left">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="john@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='w-full flex flex-col md:flex-row items-center justify-between md:gap-x-4 gap-y-4 md:gap-y-0'>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Enter your password"
                                                        {...field}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? (
                                                            <EyeOffIcon className="h-4 w-4" />
                                                        ) : (
                                                            <EyeIcon className="h-4 w-4" />
                                                        )}
                                                        <span className="sr-only">
                                                            {showPassword ? "Hide password" : "Show password"}
                                                        </span>
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        placeholder="Confirm your password"
                                                        {...field}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    >
                                                        {showConfirmPassword ? (
                                                            <EyeOffIcon className="h-4 w-4" />
                                                        ) : (
                                                            <EyeIcon className="h-4 w-4" />
                                                        )}
                                                        <span className="sr-only">
                                                            {showConfirmPassword ? "Hide password" : "Show password"}
                                                        </span>
                                                    </Button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="termsAccepted"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                I accept the <a href="#" className="text-primary hover:underline">terms and conditions</a>
                                            </FormLabel>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter className="flex flex-col space-y-4">
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Signing up" : "Sign Up"}
                            </Button>
                            <div className="text-sm text-center text-gray-500">
                                Already have an account?{" "}
                                <Link to={routePath.login} className="text-primary hover:underline">
                                    Sign in
                                </Link>
                            </div>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    )
}

