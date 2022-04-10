import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from 'App/Validators/AuthValidator'


import User from 'App/Models/User'

export default class AuthController {

    public async register({ request, response }: HttpContextContract) {

        const data = await request.validate(AuthValidator)
        
        try {
          await User.create(data)
          return response.created()
          } catch {
            return response.validationError()
        }
    }

    public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
        
        try { 
            const token = await auth.use('api').attempt(email, password)
            return response.send({ token })
          } catch {
            return response.validationError()
        }
    }

}
