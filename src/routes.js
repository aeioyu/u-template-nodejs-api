import Express from 'express';
import {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from './controllers/customer';

const router = Express.Router();

router.get('/', (req, res) => res.json({ message: 'this is from api' }));

router.get('/customers', getCustomers);
router.get('/customer/:id', getCustomer);
router.post('/customer', createCustomer);
router.put('/customer/:id', updateCustomer);
router.delete('/customer/:id', deleteCustomer);

export default router;
