const { app } = require('./../src/server/server');
const request = require('supertest');

// data for using
const auth = {
  username: 'username',
  password: 'secret',
};

describe('POST /api/auth', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app).get('/api/auth').send(auth);
    expect(response.statusCode).toBe(200);
  });
});
