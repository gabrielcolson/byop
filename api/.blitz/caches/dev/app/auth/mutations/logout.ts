
import {getIsomorphicRpcHandler} from '@blitzjs/core'
const resolverModule = require('app/_resolvers/auth/mutations/logout')
export default getIsomorphicRpcHandler(
  resolverModule,
  'app/_resolvers/auth/mutations/logout',
  'logout',
  'mutation',
) as typeof resolverModule.default
