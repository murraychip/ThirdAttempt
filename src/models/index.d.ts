import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Hunt {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  constructor(init: ModelInit<Hunt>);
  static copyOf(source: Hunt, mutator: (draft: MutableModel<Hunt>) => MutableModel<Hunt> | void): Hunt;
}