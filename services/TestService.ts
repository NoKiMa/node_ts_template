import {Request, Response} from 'express';
export type Test = {id: string; text: string};
class TestService {
  async create(test: Test): Promise<string> {
    console.log('test', test);
    return `create test: id -> ${test.id} and text: ${test.text}`;
  }
  async getAll(): Promise<string> {
    return 'this is mock of all tests';
  }
  async getOne(id: string): Promise<string> {
    if (!id) {
      throw new Error('id is not exist');
    }
    return `this is one test with id:${id}`;
  }
  async update(test: Test): Promise<string> {
    if (!test.id) {
      throw new Error('id is not exist');
    }
    return `test with id:${test.id} was updated, text is ${test.text}`;
  }

  async deleteOne(id: string): Promise<string> {
    if (!id) {
      throw new Error('id is not exist');
    }
    return `test with id: ${id} was delete`;
  }
  async deleteAll(): Promise<string> {
    return 'all tests were delete';
  }
}

export default new TestService();
