import { SessionContext } from "blitz"
import db from "db"

export default async function getTasks(
  input = null,
  ctx: { session?: SessionContext } = {}
) {
  ctx.session!.authorize()

  const tasks = await db.task.findMany({
    where: {
      owner: { id: ctx.session!.userId }
    }
  })

  return tasks
}
