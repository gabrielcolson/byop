import db from "db"
import { SessionContext } from "blitz"
import { hashPassword } from "app/modules/auth/auth-utils"
import { RegisterInput, RegisterInputType } from "app/modules/auth/validations"

export default async function register(
  input: RegisterInputType,
  ctx: { session?: SessionContext } = {}
) {
  // This throws an error if input is invalid
  const { email, password } = RegisterInput.parse(input)

  const hashedPassword = await hashPassword(password)
  const user = await db.user.create({
    data: { email: email.toLowerCase(), hashedPassword, role: "user" },
    select: { id: true, name: true, email: true, role: true },
  })

  await ctx.session!.create({ userId: user.id, roles: [user.role] })

  return user
}
