import * as z from "zod"
const tokenSchema = z.object({
    access_token: z
        .string()
        .nonempty('Token Required')
})
type tokenFormValues = z.infer<typeof tokenSchema>


const uploadPostSchema = z.object({
    caption: z.string().min(1, 'Caption is required').max(2200, 'Caption must be 2200 characters or less'),
    image_url: z.string().nonempty("Image Required")
})
type uploadPostFormValues = z.infer<typeof uploadPostSchema>

export { tokenSchema, uploadPostSchema };
export type { tokenFormValues, uploadPostFormValues };
