// filepath: /c:/Users/User/Downloads/my-store-main (3)/my-store-main/services/supplier.service.js
const { Pool } = require('pg');

class SupplierService {
  constructor() {
    this.pool = new Pool({
      host: 'postgres',
      port: 5432,
      user: 'espe',
      password: 'espe',
      database: 'myStore'
    });
    this.pool.on('error', (err) => console.error('Unexpected error on idle client', err));
  }

  async create(data) {
    const query = 'INSERT INTO suppliers (name, ruc, direccion, estado) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [data.name, data.ruc, data.direccion, data.estado];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async find() {
    const result = await this.pool.query('SELECT * FROM suppliers');
    return result.rows;
  }

  async findOne(id) {
    const query = 'SELECT * FROM suppliers WHERE id = $1';
    const values = [id];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async update(id, changes) {
    const query = 'UPDATE suppliers SET name = $1, ruc = $2, direccion = $3, estado = $4 WHERE id = $5 RETURNING *';
    const values = [changes.name, changes.ruc, changes.direccion, changes.estado, id];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async delete(id) {
    const query = 'DELETE FROM suppliers WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = SupplierService;
