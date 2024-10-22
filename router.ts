import { Router } from 'express'
// import { check } from 'express-validator' // validation
import TestController from './controllers/TestController'

const router: Router = Router()
const testController = new TestController()

router.get('/test', testController.getAll)
router.get('/test/:id', testController.getOne)
router.post('/test', testController.create)
router.put('/test', testController.update)
router.delete('/test/:id', testController.deleteOne)
router.delete('/test', testController.deleteAll)


export default router
