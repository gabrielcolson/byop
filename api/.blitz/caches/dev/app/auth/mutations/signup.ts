
import {getIsomorphicRpcHandler} from '@blitzjs/core'
const resolverModule = require('app/_resolvers/auth/mutations/signup')
export default getIsomorphicRpcHandler(
  resolverModule,
  'app/_resolvers/auth/mutations/signup',
  'signup',
  'mutation',
) as typeof resolverModule.default
