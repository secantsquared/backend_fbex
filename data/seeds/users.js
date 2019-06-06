exports.seed = function(knex, Promise) {
  const faker = require('faker')
  return knex('users')
    .truncate()
    .then(function() {
      for (let i = 0; i <= 500; i++) {
        return knex('users').insert([
          {
            username: faker.fake('{{internet.userName}}'),
            password: faker.fake('{{internet.password}}'),
            email: faker.fake('{{internet.email}}')
          }
        ])
      }
    })
}
