const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const ruc = Joi.string().length(10);
const direccion = Joi.string().min(5).max(100);
const estado = Joi.boolean();

const createSupplierSchema = Joi.object({
  name: name.required(),
  ruc: ruc.required(),
  direccion: direccion.required(),
  estado: estado.required(),
});

const updateSupplierSchema = Joi.object({
  name,
  ruc,
  direccion,
  estado,
});

const getSupplierSchema = Joi.object({
  id: id.required(),
});

module.exports = { createSupplierSchema, updateSupplierSchema, getSupplierSchema };
