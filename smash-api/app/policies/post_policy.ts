// import User from '#models/user'
// // import Post from '#models/post'
// import { BasePolicy } from '@adonisjs/bouncer'
// import { AuthorizerResponse } from '@adonisjs/bouncer/types'
// import Role from '../../contact/role.js'
// import AdminBasePolicy from './admin_policy.js'

// export default class PostPolicy extends AdminBasePolicy {
//   viewList(user: User): AuthorizerResponse {
//     return true
//   }
  
//   view(user: User, post: Post): AuthorizerResponse {
//     return user.id == post.userId
//   }
  
//   create(user: User): AuthorizerResponse {
//     return true
//   }
  
//   edit(user: User,post: Post): AuthorizerResponse {
//     return user.id == post.userId
//   }
  
//   update(user: User,post: Post): AuthorizerResponse {
//     return user.id == post.userId
//   }
  
//   delete(user: User,post: Post): AuthorizerResponse {
//     return user.id == post.userId
//   }
  
// }