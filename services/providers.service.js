// filepath: /c:/Users/User/Downloads/my-store-main (3)/my-store-main/services/supplier.service.js
const { v4: uuidv4 } = require('uuid');

class SupplierService {
  constructor() {
    this.suppliers = [];
  }

  async create(data) {
    const newSupplier = { id: uuidv4(), ...data };
    this.suppliers.push(newSupplier);
    return newSupplier;
  }

  async find() {
    return this.suppliers;
  }

  async findOne(id) {
    return this.suppliers.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.suppliers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Supplier not found');
    }
    const supplier = this.suppliers[index];
    this.suppliers[index] = { ...supplier, ...changes };
    return this.suppliers[index];
  }

  async delete(id) {
    const index = this.suppliers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Supplier not found');
    }
    this.suppliers.splice(index, 1);
    return { id };
  }
}

module.exports = SupplierService;
