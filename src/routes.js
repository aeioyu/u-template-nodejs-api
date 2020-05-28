import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => res.json({ message: 'this is from api' }));

export default router;
