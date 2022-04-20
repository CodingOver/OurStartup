import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProjectValidator from 'App/Validators/ProjectValidator'

import Project from 'App/Models/Project'

export default class ProjectsController {
    public async create({ request, response }: HttpContextContract) {

        const data = await request.validate(ProjectValidator)
        
        try {
          await Project.create(data)
          return response.created()
          } catch {
            return response.validationError()
        }
    }
}
