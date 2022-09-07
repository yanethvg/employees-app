const { app } = require('./../src/server/server');
// const bcrypt = require('bcrypt');
const request = require('supertest');

// data for using
const auth = {
  name: 'prueba',
  last_name: 'prueba',
  email: 'prueba@gmail.com',
  password: 'secret1234',
};


describe('POST /api/signup', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app).post('/api/signup').send(auth);
    expect(response.statusCode).toBe(200);
  });
  describe('when ', () => {
    // should respond with a 400 code
    test('should respond with a 400 status when fields incomplete', async () => {
      const response = await request(app).post('/api/signup').send({
        name: auth.name,
        email: auth.email,
      });
      expect(response.statusCode).toBe(400);
    });
  });
});

describe('POST /api/signin', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .post('/api/signin')
      .send({
        email: auth.email,
        password: auth.password,
      });
    expect(response.statusCode).toBe(200);
  });
  describe('when ', () => {
    // should respond with a 400 code
    test('should respond with a 400 status when fields incomplete', async () => {
      const response = await request(app).post('/api/signin').send({
        email: auth.email,
        password: '',
      });
      expect(response.statusCode).toBe(400);
    });
  });
});
