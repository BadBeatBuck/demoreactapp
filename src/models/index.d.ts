import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BotMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Bot {
  readonly id: string;
  readonly priceLow?: number | null;
  readonly priceHigh?: number | null;
  readonly numSlices?: number | null;
  readonly active?: boolean | null;
  readonly priceEntry?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Bot, BotMetaData>);
  static copyOf(source: Bot, mutator: (draft: MutableModel<Bot, BotMetaData>) => MutableModel<Bot, BotMetaData> | void): Bot;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}