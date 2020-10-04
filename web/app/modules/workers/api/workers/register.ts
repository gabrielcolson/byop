import { BlitzApiRequest, BlitzApiResponse } from "blitz"
import db from "db"

export default async function registerWorker(req: BlitzApiRequest, res: BlitzApiResponse) {
  const ip = req.connection.remoteAddress
  if (!ip) {
    return res.status(400).send("no ip address available")
  }

  const pendingTasks = await db.task.findMany({
    where: {
      status: "PENDING"
    }
  })

  if (pendingTasks.length === 0) {
    return res.status(401).end()
  }
  const task = pendingTasks[0]
  await db.task.update({
    where: { id: task.id },
    data: {
      status: "STARTED",
      worker: {
        create: {
          ip,
          status: "WORKING"
        }
      }
    }
  })
  return res.status(200).json({ imageURL: task.imageURL })
}
