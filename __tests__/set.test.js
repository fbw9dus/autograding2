const app = require('../app')
const request = require('supertest')
const mongoose = require('mongoose')
let server;

describe('App Request', () => {
  test('should write db entry', async (done) => {
    const response = await request(app)
    .get('/records')
    expect(response.statusCode).toEqual(200)
    expect(response.body[0].artist).toBe("George Michael")
    done();
  })
})

beforeAll(async (done) => {
  server = app.listen(3000, () => {
    global.agent = request.agent(server);
    done();
  });
});

afterAll(async () => {
  await server.close();
  await mongoose.disconnect();
});