const { app } = require('./../src/server/server');
const request = require('supertest');

const auth = {
  email: 'admin@admin.app',
  password: 'secret123',
};

let token = '';

// data for using
const areaTest = {
  id: 1,
  name: 'prueba',
};

beforeAll(async () => {
  const response = await request(app).post('/api/signin').send({
    email: auth.email,
    password: auth.password,
  });
  token = response.body.token;
});

describe('GET /api/areas', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .get('/api/areas')
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  test('should respond with an array', async () => {
    const response = await request(app)
      .get('/api/areas')
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /api/areas/:id', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .get(`/api/areas/${areaTest.id}`)
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an object', async () => {
    const response = await request(app)
      .get(`/api/areas/${areaTest.id}`)
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe('GET /api/subareas/:id', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .get(`/api/areas/subareas/${areaTest.id}`)
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an array', async () => {
    const response = await request(app)
      .get(`/api/areas/subareas/${areaTest.id}`)
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.body.subareas).toBeInstanceOf(Array);
  });
});
