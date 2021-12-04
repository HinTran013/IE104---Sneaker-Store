const Customer = require("../models/customer.model.js");

exports.getCustomerLogin = async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  try {
    const customer = await Customer.findOne({
      email: email,
      password: password,
    });
    res.status(200).json(customer);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getCustomerByEmail = async (req, res) => {
  const email = req.query.email;

  try {
    const customer = await Customer.findOne({ email: email });
    res.status(200).json(customer);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.createCustomerAccount = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const customer = new Customer({
    email: email,
    password: password,
    name: "",
    gender: true,
    phone: "",
    address: "",
  });

  try {
    await customer.save();
    res.send("Account created successfully!");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.updateCustomerAccount = async (req, res) => {
  const id = req.body.id;
  const newName = req.body.name;
  const newPhone = req.body.phone;
  const newAddress = req.body.address;
  const newGender = req.body.gender;

  try {
    await Customer.findById({ _id: id }, (error, customerToUpdate) => {
      customerToUpdate.name = newName;
      customerToUpdate.phone = newPhone;
      customerToUpdate.address = newAddress;
      customerToUpdate.gender = newGender === "true";

      customerToUpdate.save();
    });
  } catch (err) {}
  res.send("updated");
};
