const { app } = require('./../src/server/server');
const request = require('supertest');

// data for using
const employeeId = 1;
const employeeIdWrong = 9999;
const employee = {
  name: 'Test name',
  last_name: 'Test lastname',
  type_document: 'DUI',
  document: '00000000-2',
};

describe('GET /api/employees', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app).get('/api/employees').send();
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an array', async () => {
    const response = await request(app).get('/api/employees').send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /api/employees/:id', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .get(`/api/employees/${employeeId}`)
      .send();
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an object', async () => {
    const response = await request(app)
      .get(`/api/employees/${employeeId}`)
      .send();
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe('POST /api/employees/', () => {
  test('should respond with a 201 status code ', async () => {
    const response = await request(app).post(`/api/employees/`).send(employee);
    expect(response.statusCode).toBe(201);
  });

  test('should respond with an object', async () => {
    const response = await request(app).post(`/api/employees/`).send(employee);
    expect(response.body).toBeInstanceOf(Object);
  });

  test('should respond with an employee ID', async () => {
    const response = await request(app).post('/api/employees/').send(employee);
    expect(response.body.employee.id).toBeDefined();
  });

  describe('when ', () => {
    // should respond with a 400 code
    test('should respond with a 400 status code when fields incomplete', async () => {
      const BadEmployee = [
        { name: 'some name' },
        { last_name: 'some last_name' },
      ];

      for (const body of BadEmployee) {
        const response = await request(app).post('/api/employees/').send(body);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});

describe('PUT /api/employees/:id', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .put(`/api/employees/${employeeId}`)
      .send(employee);
    expect(response.statusCode).toBe(200);
  });

  test('should respond with an object', async () => {
    const response = await request(app)
      .put(`/api/employees/${employeeId}`)
      .send(employee);
    expect(response.body.employee).toBeInstanceOf(Object);
  });

  test('should respond with an employee ID', async () => {
    const response = await request(app)
      .put(`/api/employees/${employeeId}`)
      .send(employee);
    expect(response.body.employee.id).toBeDefined();
  });

  describe('when ', () => {
    test('should respond with a 400 status code when sending empty values', async () => {
      const BadEmployee = [{ name: '' }, { last_name: '' }];

      for (const body of BadEmployee) {
        const response = await request(app)
          .post(`/api/employees/${employeeId}`)
          .send(body);
        expect(response.statusCode).toBe(404);
      }
    });

    // should respond with a 404 code
    test('should respond with a 404 status code when id is incorrect', async () => {
      const response = await request(app)
        .post(`/api/employees/${employeeIdWrong}`)
        .send();
      expect(response.statusCode).toBe(404);
    });
  });
});

describe('DELETE /api/employees/:id', () => {
  test('should respond with a 200 status code ', async () => {
    const response = await request(app)
      .delete(`/api/employees/${employeeId}`)
      .send();
    expect(response.statusCode).toBe(200);
  });

  describe('when ', () => {
    // should respond with a 404 code
    test('should respond with a 404 status code when id is incorrect', async () => {
      const response = await request(app)
        .delete(`/api/employees/${employeeIdWrong}`)
        .send();
      expect(response.statusCode).toBe(404);
    });
  });
});
