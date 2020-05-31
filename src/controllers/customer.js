import Customer from '../models/customerSchema';

export async function getCustomers(req, res) {
  try {
    const customers = await Customer.find(req.query);
    res.json({ items: customers });
  } catch (e) {
    res.status(400).json({ error: true, message: e.message });
  }
}

export async function getCustomer(req, res) {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    res.json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function createCustomer(req, res) {
  try {
    const customer = new Customer(req.body);
    await customer.save();

    res.json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateCustomer(req, res) {
  try {
    const { id } = req.params;
    // { new: true } is for return new object after update. // default is return obj before update.
    const customer = await Customer.findByIdAndUpdate(id, req.body, { new: true });

    res.json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteCustomer(req, res) {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    res.json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
