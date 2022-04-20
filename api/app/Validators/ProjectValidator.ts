import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProjectValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */

  public schema = schema.create({
    name: schema.string({ trim: true, escape: true }, [rules.minLength(3)]),
    number: schema.string({ trim: true, escape: true }),
    budget: schema.string({ trim: true, escape: true }),
    company: schema.string({ trim: true, escape: true}),
    description: schema.string({ trim: true, escape: true }, [rules.minLength(10)]),
    email: schema.string(
      { trim: true }, 
      [rules.email(), rules.unique({ table: 'projects', column: 'email', caseInsensitive: true })]
    ),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = { 
    required: 'The {{ field }} is required to create a new account.',
    'email.unique': 'Email already exist!',
    'description.minLength': 'Short description.',
    'name.minLength': 'Please type full name.'
  }
}
      