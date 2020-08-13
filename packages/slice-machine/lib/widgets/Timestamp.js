import * as yup from 'yup'

/** {
    "type" : "Timestamp",
    "config" : {
      "label" : "timestamp",
      "placeholder" : "timestamp"
    }
  } */


import { removeProp } from '../utils'
import { DefaultFields } from "../forms/defaults"
import { createInitialValues, createValidationSchema } from '../forms'

const TYPE_NAME = 'Timestamp'

const FormFields = DefaultFields

const randomDate = (start = new Date(2012, 0, 1), end = new Date()) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

const createMock = (maybeMock) => maybeMock || randomDate()

const create = (apiId) => ({
  ...createInitialValues(DefaultFields),
  id: apiId
})

const schema = yup.object().shape({
  type: yup.string().matches(TYPE_NAME, { excludeEmptyString: true }).required(),
  config: createValidationSchema(removeProp(FormFields, 'id'))
});

const Meta = {
  title: 'Timestamp',
  description: 'A calendar date picker with time'
}

export default {
  createMock,
  create,
  schema,
  Meta
}