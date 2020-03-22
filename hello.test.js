const app = require('./app')
const request = require('supertest')

test('gets the test endpoint', async () => {
  const response = await request(app).get('/records').expect(200)
  expect(response.statusCode).toEqual(200)
  expect(response.body[0].artist).toBe("George Michael")
})
