const { app } = require('./../src/server/server');
const request = require('supertest');
require('dotenv').config();

// data for using
const employeeId = 13;
const employeeIdWrong = 9999;
const employee = {
  name: 'Test name',
  last_name: 'Test lastname',
  type_document: 'DUI',
  document: '00000000-2',
  subarea_id: 2,
};

const token = process.env.TOKEN_TEST;

describe('GET /api/employees', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .get('/api/employees')
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an object', async () => {
    const response = await request(app)
      .get('/api/employees')
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe('GET /api/employees/:id', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .get(`/api/employees/${employeeId}`)
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an object', async () => {
    const response = await request(app)
      .get(`/api/employees/${employeeId}`)
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe('POST /api/employees/', () => {
  test('should respond with a 201 status code ', async () => {
    const response = await request(app)
      .post(`/api/employees/`)
      .send(employee)
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(201);
  });

  test('should respond with an object', async () => {
    const response = await request(app)
      .post(`/api/employees/`)
      .send(employee)
      .set('Authorization', `Bearer ${token}`);
    expect(response.body).toBeInstanceOf(Object);
  });

  describe('when ', () => {
    // should respond with a 400 code
    test('should respond with a 400 status code when fields incomplete', async () => {
      const BadEmployee = [
        { name: 'some name' },
        { last_name: 'some last_name' },
      ];

      for (const body of BadEmployee) {
        const response = await request(app)
          .post('/api/employees/')
          .send(body)
          .set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});

describe('PUT /api/employees/:id', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .put(`/api/employees/${employeeId}`)
      .send(employee)
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an object', async () => {
    const response = await request(app)
      .put(`/api/employees/${employeeId}`)
      .send(employee)
      .set('Authorization', `Bearer ${token}`);
    expect(response.body).toBeInstanceOf(Object);
  });

  describe('when ', () => {
    test('should respond with a 400 status code when sending empty values', async () => {
      const BadEmployee = [{ name: '' }, { last_name: '' }];

      for (const body of BadEmployee) {
        const response = await request(app)
          .post(`/api/employees/${employeeId}`)
          .send(body)
          .set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(404);
      }
    });

    // should respond with a 404 code
    test('should respond with a 404 status code when id is incorrect', async () => {
      const response = await request(app)
        .post(`/api/employees/${employeeIdWrong}`)
        .send()
        .set('Authorization', `Bearer ${token}`);
      expect(response.statusCode).toBe(404);
    });
  });
});

describe('DELETE /api/employees/:id', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .delete(`/api/employees/${employeeId}`)
      .send()
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  describe('when ', () => {
    // should respond with a 404 code
    test('should respond with a 404 status code when id is incorrect', async () => {
      const response = await request(app)
        .delete(`/api/employees/${employeeIdWrong}`)
        .send()
        .set('Authorization', `Bearer ${token}`);
      expect(response.statusCode).toBe(404);
    });
  });
});
