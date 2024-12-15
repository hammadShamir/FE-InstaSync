import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from 'lucide-react'

import { Button } from "../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { tokenFormValues, tokenSchema } from "../utils/schemas/Post"
import { uploadToken } from "../Services/APIs/post"

export function TokenForm({ onSuccess }: { onSuccess: () => void }) {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<tokenFormValues>({
        resolver: zodResolver(tokenSchema),
        defaultValues: {
            access_token: "",
        },
    })

    async function onSubmit(values: tokenFormValues) {
        try {
            setIsLoading(true)
            const res = await uploadToken(values);
            if (res) {
                onSuccess();
            }
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <main className="h-[calc(100vh-200px)] flex justify-center items-center">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Submit Your Meta Account Token</CardTitle>
                    <CardDescription>
                        Please enter the token generated from your Meta account below to authenticate.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="access_token"
                                render={({ field }) => (
                                    <FormItem className="text-left">
                                        <FormLabel>Token</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Meta account token" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            A unique token that allows access to your Meta account services.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {isLoading ? "Submitting..." : "Submit Token"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </main>
    )
}

