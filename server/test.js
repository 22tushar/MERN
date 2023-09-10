const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./index.js'); // Assuming your main file is named index.js

chai.use(chaiHttp);
const expect = chai.expect;

describe('Task Manager API', () => {
  let taskId;

  it('should create a new task', (done) => {
    chai.request(process.env.localhost)
      .post('/tasks/newtask')
      .send({
        title: 'Test Task',
        description: 'Test Description',
        status: 'todo',
        dueDate: '2023-09-10'
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('_id');
        taskId = res.body._id;
        done();
      });
  });

  it('should get all tasks', (done) => {
    chai.request(process.env.localhost)
      .get('/tasks/getalltask')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should get a specific task', (done) => {
    chai.request(process.env.localhost)
      .get(`/tasks/${taskId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('_id', taskId);
        done();
      });
  });

  it('should update a task', (done) => {
    chai.request(process.env.localhost)
      .put(`/tasks/${taskId}`)
      .send({
        title: 'Updated Task',
        description: 'Updated Description',
        status: 'in progress',
        dueDate: '2023-09-15'
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Task updated successfully');
        done();
      });
  });

  it('should delete a task', (done) => {
    chai.request(process.env.localhost)
      .delete(`/tasks/${taskId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Task deleted');
        done();
      });
  });
});
