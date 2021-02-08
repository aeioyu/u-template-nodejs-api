import Express from 'express';

const router = Express.Router();

router.get('/test/:id', (req, res) => {
  const { query, params } = req;
  return res.json({ message: 'this is from api', query, params });
});

export default router;
