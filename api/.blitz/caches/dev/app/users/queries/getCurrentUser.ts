
import {getIsomorphicRpcHandler} from '@blitzjs/core'
const resolverModule = require('app/_resolvers/users/queries/getCurrentUser')
export default getIsomorphicRpcHandler(
  resolverModule,
  'app/_resolvers/users/queries/getCurrentUser',
  'getCurrentUser',
  'query',
) as typeof resolverModule.default
