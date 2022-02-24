import { JsonValue } from "type-fest";
import { Product } from "../product/Product";

export type User = {
  createdAt: Date;
  firstName: JsonValue;
  id: string;
  lastName: string | null;
  products?: Array<Product>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
