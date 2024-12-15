import * as z from "zod"
const tokenSchema = z.object({
    token: z
        .string()
        .nonempty('Token Required')
})
type tokenFormValues = z.infer<typeof tokenSchema>

export { tokenSchema };
export type { tokenFormValues };
