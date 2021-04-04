// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Hunt } = initSchema(schema);

export {
  Hunt
};