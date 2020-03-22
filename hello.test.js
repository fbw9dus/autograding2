const app = require('./app')
const request = require('supertest')
const mongoose = require('mongoose')
let server;

beforeAll(async (done) => {
  server = app.listen(3000, () => {
    global.agent = request.agent(server);
    done();
  });
});

describe('App Request', () => {
  test('should have db entry', async (done) => {
    const response = await request(app)
    .get('/records')
    expect(response.statusCode).toEqual(200)
    expect(response.body[0].artist).toBe("George Michael")
    done();
  })
  test('should have db entry', async (done) => {
    const response = await request(app)
    .get('/records')
    expect(response.statusCode).toEqual(200)
    expect(response.body[0].artist).toBe("George Michael")
    done();
  })
})
describe('App Request', () => {
  test('should have db entry', async (done) => {
    const response = await request(app)
    .get('/records')
    expect(response.statusCode).toEqual(200)
    expect(response.body[0].artist).toBe("Michael")
    done();
  })
  test('should have db entry', async (done) => {
    const response = await request(app)
    .get('/records')
    expect(response.statusCode).toEqual(200)
    expect(response.body[0].artist).toBe("George Michael")
    done();
  })
})

afterAll(async () => {
  await server.close();
  await mongoose.disconnect();
});