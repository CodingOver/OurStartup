import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'
import User from 'App/Models/User'

export default class MockSeeder extends BaseSeeder {
  public async run () {

    // Create usere roles

    await Role.createMany([
      {
        name: 'user',
      },
      {
        name: 'admin',
      },
    ])

    // Add user and admin

    await User.createMany([
      {
        email: 'arcoders@gmail.com',
        username: 'ismael Haytam',
        password: 'secret',
        roleId: 1
      },
      {
        email: 'javascriptevolution@gmail.com',
        password: 'supersecret',
        username: 'Admin JS',
        roleId: 2
      }
    ])

  }
}
