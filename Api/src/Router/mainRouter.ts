import { Router } from 'express';
import userRouter from './userRouter';
import { Request, Response } from 'express';

const router = Router();

router.use('/', (req: Request, res: Response) => {res.send('¡Hola, mundo!');});//Ejemplo
router.use('/users', userRouter);  // http://localhost:3001/users
// router.use('/', );
// router.use('/', );
// router.use('/', );
// router.use('/', );

export default router;