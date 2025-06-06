// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import { registerUserValidator } from "#validators/user";
import { HttpContext } from "@adonisjs/core/http";

export default class UsersController {
    async login({ auth, request }: HttpContext) {
        const { username, password } = request.all()
        const user = await User.verifyCredentials(username, password)
        return await auth.use("jwt").generate(user)
    }
    async logout({auth,response}:HttpContext) {
        await auth.use('web').logout()
        response.ok({ message: 'Logout successful' })

    }
    async register({ request, response }: HttpContext) {
        try {
            const payload = await request.validateUsing(registerUserValidator)
            const user = await User.create({ username: payload.username, password: payload.password })
            response.ok('The user is register successfully.')
        } catch (error) {
            response.badRequest(error.messages)
        }
    }
}