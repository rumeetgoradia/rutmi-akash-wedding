import { type SchemaTypeDefinition } from "sanity";

import event from "./schemas/event";
import guest from "./schemas/guest";
import party from "./schemas/party";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, guest, party],
};
