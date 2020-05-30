import Customer from '../models/customerSchema';

export async function getCustomers(req, res) {
  try {
    const customers = await Customer.find(req.query);
    res.json({ customers });
  } catch (e) {
    res.json({ error: true, message: e.message });
  }
}

export async function getCustomer(req, res) {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    res.json({ customer });
  } catch (e) {
    res.json({ error: true, message: e.message });
  }
}

export async function createCustomer(req, res) {
  try {
    const customer = new Customer(req.body);
    await customer.save();

    res.json({ customer });
  } catch (error) {
    res.json({ error: true, message: 'error' });
  }
}

export async function updateCustomer(req, res) {
  try {
    const customer = new Customer(req.body);

    await customer.save();

    res.json({ customer });
  } catch (error) {
    res.json({ error: true, message: 'error' });
  }
}

export async function deleteCustomer(req, res) {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    res.json({ customer });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
}
