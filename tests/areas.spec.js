const { app } = require('./../src/server/server');
const request = require('supertest');
require('dotenv').config();
const token = process.env.TOKEN_TEST;

// data for using
const areaTest = {
  id: 1,
  name: 'prueba',
};

describe('GET /api/areas', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app).get('/api/areas').send().set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  test('should respond with an array', async () => {
    const response = await request(app).get('/api/areas').send().set('Authorization', `Bearer ${token}`);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /api/areas/:id', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .get(`/api/areas/${areaTest.id}`)
      .send().set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an object', async () => {
    const response = await request(app)
      .get(`/api/areas/${areaTest.id}`)
      .send().set('Authorization', `Bearer ${token}`);
    expect(response.body).toBeInstanceOf(Object);
  });
});
