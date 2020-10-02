import { SessionContext } from "blitz"
import db from "db"
import { CreateTaskInput, CreateTaskInputType } from "../validations"

export default async function createTask(
  input: CreateTaskInputType,
  ctx: { session?: SessionContext } = {}
) {
  ctx.session!.authorize()

  const { imageURL } = CreateTaskInput.parse(input)

  const task = await db.task.create({
    data: {
      imageURL: imageURL,
      status: "PENDING",
      owner: { connect: { id: ctx.session!.userId } }
    }
  })

  // TODO: start task

  return task
}
