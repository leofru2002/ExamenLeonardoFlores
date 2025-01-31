const { Pool } = require('pg');

class ProviderService {
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
    const query = 'INSERT INTO providers (name, ruc, direccion, estado) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [data.name, data.ruc, data.direccion, data.estado];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async find() {
    const query = 'SELECT * FROM providers';
    const result = await this.pool.query(query);
    return result.rows;
  }

  async findOne(id) {
    const query = 'SELECT * FROM providers WHERE id = $1';
    const values = [id];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async update(id, changes) {
    const query = 'UPDATE providers SET name = $1, ruc = $2, direccion = $3, estado = $4 WHERE id = $5 RETURNING *';
    const values = [changes.name, changes.ruc, changes.direccion, changes.estado, id];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async delete(id) {
    const query = 'DELETE FROM providers WHERE id = $1 RETURNING *';
    const values = [id];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = ProviderService;
