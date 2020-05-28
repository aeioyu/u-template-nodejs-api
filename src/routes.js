import Express from 'express';

const router = Express.Router();

router.get('/hello', (req, res) => res.json({ message: 'hello world' }));

export default router;
