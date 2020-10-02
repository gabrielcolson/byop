import * as z from "zod"

export const CreateTaskInput = z.object({
  imageURL: z.string().nonempty()
})
export type CreateTaskInputType = z.infer<typeof CreateTaskInput>
