
// This imports the isomorphicHandler
import resolverModule from 'app/users/queries/getCurrentUser'
import {getAllMiddlewareForModule} from '@blitzjs/core'
import {rpcApiHandler} from '@blitzjs/server'
import path from 'path'

// Ensure these files are not eliminated by trace-based tree-shaking (like Vercel)
path.resolve("next.config.js")
path.resolve("blitz.config.js")
path.resolve(".next/__db.js")
// End anti-tree-shaking

let db: any
let connect: any
try {
  db = require('db').default
  connect = require('db').connect ?? (() => db.$connect ? db.$connect() : db.connect())
}catch(err){}
export default rpcApiHandler(
  resolverModule,
  getAllMiddlewareForModule(resolverModule),
  () => db && connect(),
)
export const config = {
  api: {
    externalResolver: true,
  },
}
