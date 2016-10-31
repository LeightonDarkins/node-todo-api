const expect = require('expect');
const request = require('supertest');
const { ObjectId } = require('mongodb');

const { app } = require('../server');
const { Todo } = require('../models/Todo');

todos = [{
    _id: new ObjectId(),
    text: 'test 1'
  }, {
    _id: new ObjectId(),
    text: 'test 2'
  }];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    Todo.insertMany(todos).then(() => done());
  })
});

describe('POST /todos', () => {
  it('should create a new Todo', (done) => {
    var text = 'test';

    request(app)
      .post('/todos')
      .send({ text })
      .expect(200)                          // expect response status 200
      .expect((res) => {
        expect(res.body.text).toBe(text);   // expect body.text to match text
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({ text }).then((todos) => {       // check the DB for the new Todo
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);

          done();
        }).catch((e) => {
          done(e)
        });
      });
  });

  it('should not create an invalid Todo', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)                          // expect status 400
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {       // check the DB for the new Todo
          expect(todos.length).toBe(2);

          done();
        }).catch((e) => {
          done(e)
        });
      });
  });
});

describe('GET /todos', () => {
  it('should get a list of todos from the database', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

describe('GET /todos/:id', () => {
  it('should return and empty 404 for an invalid ObjectId', (done) => {
    request(app)
      .get('/todos/1234')
      .expect(404)
      .end(done);
  });

  it('should return an empty 404 for an ID that is not found', (done) => {
    request(app)
      .get(`/todos/${new ObjectId().toHexString()}`)
      .expect(404)
      .end(done);
  });

  it('should return a todo for the given ID', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });
});
