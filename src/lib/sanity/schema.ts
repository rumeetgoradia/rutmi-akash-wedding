import { type SchemaTypeDefinition } from "sanity";

import event from "./schemas/event";
import guest from "./schemas/guest";
import party from "./schemas/party";
import address from "./schemas/address";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [address, event, guest, party],
};
