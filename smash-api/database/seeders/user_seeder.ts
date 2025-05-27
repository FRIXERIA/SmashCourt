import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        username: 'smashAdmin',
        password: 'smashadmin123', 
      },
      {
        username: 'jake_sim',
        password: 'jakesim2002',
      },
      {
        username: 'anton_lee',
        password: 'antonlee2004',
      },
      {
        username: 'nicholas_wang',
        password: 'nicholaswang2002',
      },
    ])  }
}