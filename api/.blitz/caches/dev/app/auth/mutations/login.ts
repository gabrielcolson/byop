
import {getIsomorphicRpcHandler} from '@blitzjs/core'
const resolverModule = require('app/_resolvers/auth/mutations/login')
export default getIsomorphicRpcHandler(
  resolverModule,
  'app/_resolvers/auth/mutations/login',
  'login',
  'mutation',
) as typeof resolverModule.default
