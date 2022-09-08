const Joi = require('joi');

// const pattern = '[0-9]{8}-[0-9]{1}';
const id = Joi.number().integer();
const name = Joi.string().min(4);
const last_name = Joi.string().min(4);
const document = Joi.string();
const type_document = Joi.string();
const subarea_id =Joi.number().integer();

const createEmployeeSchema = Joi.object({
  name: name.required(),
  last_name: last_name.required(),
  document: document.required(),
  type_document: type_document.required(),
  subarea_id : subarea_id.required(),
});

const updateEmployeeSchema = Joi.object({
  name: name,
  last_name: last_name,
  document: document,
  type_document: type_document,
  subarea_id: subarea_id
});

const getEmployeeSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createEmployeeSchema,
  updateEmployeeSchema,
  getEmployeeSchema,
};
