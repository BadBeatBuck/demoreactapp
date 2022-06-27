// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bot, Todo } = initSchema(schema);

export {
  Bot,
  Todo
};