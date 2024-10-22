import {Request, Response} from 'express';
import TestService, {Test} from '../services/TestService';

interface TypedRequestBody<T> extends Request {
  body: T;
}

class TestController {
  async create(req: TypedRequestBody<Test>, res: Response) {
    try {
      console.log('log', req); 
      const test = await TestService.create(req.body);
      res.json(test);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req: Request, res: Response): Promise<any> {
    try {
      const posts = await TestService.getAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getOne(req: Request, res: Response): Promise<any> {
    try {
      const {id} = req.params;
      const post = await TestService.getOne(id);
      res.json(post);
    } catch (error) {
      res.status(500).json(error.massage);
    }
  }
  async update(req: Request, res: Response): Promise<any> {
    try {
      const post = req.body;
      const updatedPost = await TestService.update(post);
      res.json(updatedPost);
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error.message);
    }
  }
  async deleteOne(req: Request, res: Response): Promise<any> {
    try {
      const {id} = req.params;
      const post = await TestService.deleteOne(id);
      res.json(post);
    } catch (error) {
      res.status(500).json(error.massage);
    }
  }
  async deleteAll(req: Request, res: Response): Promise<any> {
    try {
      const message = await TestService.deleteAll();
      res.json(message);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default TestController;
