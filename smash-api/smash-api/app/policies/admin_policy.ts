// import User from '#models/user'
// import { BasePolicy } from '@adonisjs/bouncer'
// import { AuthorizerResponse } from '@adonisjs/bouncer/types'
// import Role from '../enums/role.js'

// export default class AdminBasePolicy extends BasePolicy {
//   async before(user:User | null, action:string, ...params:any[]){
//     if (user?.role == Role.ADMIN) {
//       return true
//     }
//   }
// }